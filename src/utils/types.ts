export enum Player {
  ONE = 'PLAYER_ONE',
  TWO = 'PLAYER_TWO',
}

export enum TypeName {
  GAME = 'GAME',
  PAD = 'PAD',
  COW = 'COW',
  TRAY = 'TRAY',
  PADS = 'PADS',
  COWS = 'COWS',
  TRAYS = 'TRAYS',
  ADD_COW_ACTION = 'ADD_COW_ACTION',
  MOVE_COW_ACTION = 'MOVE_COW_ACTION',
  CAPTURE_COW_ACTION = 'CAPTURE_COW_ACTION',
  CANCEL_COW_ACTION = 'CANCEL_COW_ACTION',
  SELECT_COW_ACTION = 'SELECT_COW_ACTION',
  SHOW_INVALID_COW_ACTION = 'SHOW_INVALID_COW_ACTION',
  SHOW_INVALID_PAD_ACTION = 'SHOW_INVALID_PAD_ACTION',
  ADD_COW_PAYLOAD = 'ADD_COW_PAYLOAD',
  MOVE_COW_PAYLOAD = 'MOVE_COW_PAYLOAD',
  CAPTURE_COW_PAYLOAD = 'CAPTURE_COW_PAYLOAD',
  CANCEL_COW_PAYLOAD = 'CANCEL_COW_PAYLOAD',
  SELECT_COW_PAYLOAD = 'SELECT_COW_PAYLOAD',
  SHOW_INVALID_COW_PAYLOAD = 'SHOW_INVALID_COW_PAYLOAD',
  SHOW_INVALID_PAD_PAYLOAD = 'SHOW_INVALID_PAD_PAYLOAD',
}

export enum CowState {
  SAFE = 'SAFE',
  BOARD = 'BOARD',
  TAKEN = 'TAKEN',
}

type BaseId =
  | '_00'
  | '_30'
  | '_60'
  | '_11'
  | '_31'
  | '_51'
  | '_22'
  | '_32'
  | '_42'
  | '_03'
  | '_13'
  | '_23'
  | '_43'
  | '_53'
  | '_63'
  | '_24'
  | '_34'
  | '_44'
  | '_15'
  | '_35'
  | '_55'
  | '_06'
  | '_36'
  | '_66';

enum BoardResource {
  COW = 'COW',
  PAD = 'PAD',
}

export type ResourceId<S extends BoardResource> = `${S}${BaseId}`;
export type PadId = ResourceId<BoardResource.PAD>;
export type CowId = ResourceId<BoardResource.COW>;

export interface Pad {
  __typename: TypeName.PAD;
  padId: PadId;
  centerX: number;
  centerY: number;
  glowing: boolean;
  cow: null | CowId;
}

export type Cow = {
  __typename: TypeName.COW;
  cowId: CowId;
  centerX: number;
  centerY: number;
} & (
  | {
      cowState: CowState.SAFE | CowState.TAKEN;
      pad: null;
    }
  | {
      cowState: CowState.BOARD;
      pad: PadId;
    }
);

export type Pads = {
  __typename: TypeName.PADS;
} & {
  [Property in PadId]: Pad;
};

export type Cows = {
  __typename: TypeName.COWS;
  selectedCow: CowId;
  [Player.ONE]: {
    [Property in CowId]: Cow;
  };
  [Player.TWO]: {
    [Property in CowId]: Cow;
  };
};

export enum GameStatus {
  ONGOING = 'GAME_ONGOING',
  STALEMATE = 'GAME_STALEMATE',
  VICTORY_P1 = 'PLAYER_ONE_WINS',
  VICTORY_P2 = 'PLAYER_TWO_WINS',
}

export enum GamePhase {
  PLOTTING = 'PLOTTING',
  MOVING = 'MOVING',
}

export enum GameActionType {
  ADD_COW = 'ADD_COW',
  MOVE_COW = 'MOVE_COW',
  SELECT_COW = 'SELECT_COW',
  CAPTURE_COW = 'CAPTURE_COW',
  CANCEL_COW = 'CANCEL_COW',
  SHOW_INVALID_PAD = 'SHOW_INVALID_PAD',
  SHOW_INVALID_COW = 'SHOW_INVALID_COW',
}

export interface AddCowPayload {
  __typename: TypeName.ADD_COW_PAYLOAD;
  selectedPad: PadId;
}

export interface MoveCowPayload {
  __typename: TypeName.MOVE_COW_PAYLOAD;
  selectedPad: PadId;
}

export interface CaptureCowPayload {
  __typename: TypeName.CAPTURE_COW_PAYLOAD;
  selectedCow: CowId;
}

export interface CancelCowPayload {
  __typename: TypeName.CANCEL_COW_PAYLOAD;
}

export interface SelectCowPayload {
  __typename: TypeName.SELECT_COW_PAYLOAD;
  selectedCow: CowId;
}

export interface ShowInvalidCowPayload {
  __typename: TypeName.SHOW_INVALID_COW_PAYLOAD;
  selectedCow: CowId;
}

export interface ShowInvalidPadPayload {
  __typename: TypeName.SHOW_INVALID_PAD_PAYLOAD;
  selectedCow: PadId;
}

export type BaseCowPayload =
  | AddCowPayload
  | MoveCowPayload
  | CaptureCowPayload
  | CancelCowPayload
  | SelectCowPayload
  | ShowInvalidCowPayload;

interface BaseAction {
  type: GameActionType;
  payload: BaseCowPayload | ShowInvalidPadPayload;
}

export interface AddCowAction extends BaseAction {
  __typename: TypeName.ADD_COW_ACTION;
  type: GameActionType.ADD_COW;
  payload: AddCowPayload;
}

export interface MoveCowAction extends BaseAction {
  __typename: TypeName.MOVE_COW_ACTION;
  type: GameActionType.MOVE_COW;
  payload: MoveCowPayload;
}

export interface CaptureCowAction extends BaseAction {
  __typename: TypeName.CAPTURE_COW_ACTION;
  type: GameActionType.CAPTURE_COW;
  payload: CaptureCowPayload;
}

export interface CancelCowAction extends BaseAction {
  __typename: TypeName.CANCEL_COW_ACTION;
  type: GameActionType.CANCEL_COW;
  payload: CancelCowPayload;
}

export interface SelectCowAction extends BaseAction {
  __typename: TypeName.SELECT_COW_ACTION;
  type: GameActionType.SELECT_COW;
  payload: SelectCowPayload;
}

export interface ShowInvalidCowAction extends BaseAction {
  __typename: TypeName.SHOW_INVALID_COW_ACTION;
  type: GameActionType.SHOW_INVALID_COW;
  payload: ShowInvalidCowPayload;
}

export interface ShowInvalidPadAction extends BaseAction {
  __typename: TypeName.SHOW_INVALID_PAD_PAYLOAD;
  type: GameActionType.SHOW_INVALID_PAD;
  payload: ShowInvalidPadPayload;
}

export type GameAction =
  | AddCowAction
  | MoveCowAction
  | CaptureCowAction
  | CancelCowAction
  | SelectCowAction;

export interface Game {
  __typename: TypeName.GAME;
  pads: Pads;
  cows: Cows;
  currentPlayer: Player;
  gameStatus: GameStatus;
  gamePhase: GamePhase;
  actionStack: GameActionType[];
}
