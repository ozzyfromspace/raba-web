export enum Player {
  ONE = 'PLAYER_ONE',
  TWO = 'PLAYER_TWO',
}

export enum ResourceTypeName {
  GAME = 'GAME',
  PAD = 'PAD',
  COW = 'COW',
  PADS = 'PADS',
  COWS = 'COWS',
}

export enum ActionTypeName {
  ADD_COW_ACTION = 'ADD_COW_ACTION',
  MOVE_COW_ACTION = 'MOVE_COW_ACTION',
  CAPTURE_COW_ACTION = 'CAPTURE_COW_ACTION',
  CANCEL_COW_ACTION = 'CANCEL_COW_ACTION',
  SELECT_COW_ACTION = 'SELECT_COW_ACTION',
  SHOW_INVALID_COW_ACTION = 'SHOW_INVALID_COW_ACTION',
  SHOW_INVALID_PAD_ACTION = 'SHOW_INVALID_PAD_ACTION',
}

export enum PayloadTypeName {
  ADD_COW_PAYLOAD = 'ADD_COW_PAYLOAD',
  MOVE_COW_PAYLOAD = 'MOVE_COW_PAYLOAD',
  CAPTURE_COW_PAYLOAD = 'CAPTURE_COW_PAYLOAD',
  CANCEL_COW_PAYLOAD = 'CANCEL_COW_PAYLOAD',
  SELECT_COW_PAYLOAD = 'SELECT_COW_PAYLOAD',
  SHOW_INVALID_COW_PAYLOAD = 'SHOW_INVALID_COW_PAYLOAD',
  SHOW_INVALID_PAD_PAYLOAD = 'SHOW_INVALID_PAD_PAYLOAD',
}

export enum CowState {
  FREE = 'FREE',
  CAPTURED = 'CAPTURED',
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
  __typename: ResourceTypeName.PAD;
  padId: PadId;
  centerX: number;
  centerY: number;
  error: boolean;
  cow: null | CowId;
}

export type Cow = {
  __typename: ResourceTypeName.COW;
  cowId: CowId;
  owner: Player;
  centerX: number;
  centerY: number;
  error: boolean;
} & (
  | {
      cowState: CowState.FREE | CowState.CAPTURED;
      pad: null;
    }
  | {
      cowState: CowState.FREE;
      pad: PadId;
    }
);

export type Pads = {
  __typename: ResourceTypeName.PADS;
} & {
  [Property in PadId]: Pad;
};

export type Cows = {
  __typename: ResourceTypeName.COWS;
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
  __typename: PayloadTypeName.ADD_COW_PAYLOAD;
  selectedPad: PadId;
}

export interface MoveCowPayload {
  __typename: PayloadTypeName.MOVE_COW_PAYLOAD;
  selectedPad: PadId;
}

export interface CaptureCowPayload {
  __typename: PayloadTypeName.CAPTURE_COW_PAYLOAD;
  selectedCow: CowId;
}

export interface CancelCowPayload {
  __typename: PayloadTypeName.CANCEL_COW_PAYLOAD;
}

export interface SelectCowPayload {
  __typename: PayloadTypeName.SELECT_COW_PAYLOAD;
  selectedCow: CowId;
}

export interface ShowInvalidCowPayload {
  __typename: PayloadTypeName.SHOW_INVALID_COW_PAYLOAD;
  selectedCow: CowId;
}

export interface ShowInvalidPadPayload {
  __typename: PayloadTypeName.SHOW_INVALID_PAD_PAYLOAD;
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
  __typename: ActionTypeName.ADD_COW_ACTION;
  type: GameActionType.ADD_COW;
  payload: AddCowPayload;
}

export interface MoveCowAction extends BaseAction {
  __typename: ActionTypeName.MOVE_COW_ACTION;
  type: GameActionType.MOVE_COW;
  payload: MoveCowPayload;
}

export interface CaptureCowAction extends BaseAction {
  __typename: ActionTypeName.CAPTURE_COW_ACTION;
  type: GameActionType.CAPTURE_COW;
  payload: CaptureCowPayload;
}

export interface CancelCowAction extends BaseAction {
  __typename: ActionTypeName.CANCEL_COW_ACTION;
  type: GameActionType.CANCEL_COW;
  payload: CancelCowPayload;
}

export interface SelectCowAction extends BaseAction {
  __typename: ActionTypeName.SELECT_COW_ACTION;
  type: GameActionType.SELECT_COW;
  payload: SelectCowPayload;
}

export interface ShowInvalidCowAction extends BaseAction {
  __typename: ActionTypeName.SHOW_INVALID_COW_ACTION;
  type: GameActionType.SHOW_INVALID_COW;
  payload: ShowInvalidCowPayload;
}

export interface ShowInvalidPadAction extends BaseAction {
  __typename: ActionTypeName.SHOW_INVALID_PAD_ACTION;
  type: GameActionType.SHOW_INVALID_PAD;
  payload: ShowInvalidPadPayload;
}

export type GameAction =
  | AddCowAction
  | MoveCowAction
  | CaptureCowAction
  | CancelCowAction
  | SelectCowAction;

export interface GameErrors {
  pads: PadId[];
  cows: CowId[];
}

export interface Game {
  __typename: ResourceTypeName.GAME;
  pads: Pads;
  cows: Cows;
  currentPlayer: Player;
  gameStatus: GameStatus;
  gamePhase: GamePhase;
  actionStack: GameActionType[];
  errors: GameErrors;
}
