export enum Player {
  ONE = 'PLAYER_ONE',
  TWO = 'PLAYER_TWO',
}

export enum PlayerColor {
  ONE = '#ff0000',
  TWO = '#0000ff',
}

export enum ResourceTypeName {
  GAME = 'GAME',
  PAD = 'PAD',
  COW = 'COW',
  PADS = 'PADS',
  COWS = 'COWS',
  BASE_COW = 'BASE_COW'
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

export enum CowTypeName {
  COW = 'COW',
  SAFE_COW = 'SAFE_COW',
  FREE_COW = 'FREE_COW',
  CAPTURED_COW = 'CAPTURED_COW',
}

export type TypeName = keyof (typeof ResourceTypeName &
  typeof ActionTypeName &
  typeof PayloadTypeName);

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

export type ResourceId<S extends ResourceTypeName> = `${S}${BaseId}`;
export type PadId = ResourceId<ResourceTypeName.PAD>;
export type CowId = ResourceId<ResourceTypeName.COW>;

export interface BaseInterface {
  __typename: TypeName;
}

export interface Pad extends BaseInterface {
  __typename: ResourceTypeName.PAD;
  padId: PadId;
  centerX: number;
  centerY: number;
  radius: number;
  error: boolean;
  selected: boolean;
  cow: null | CowId;
}

interface BaseCow {
  __typename: CowTypeName;
  cowId: CowId;
  owner: Player;
  centerX: number;
  centerY: number;
  radius: number;
}

export interface SafeCow extends BaseCow {
  __typename: CowTypeName.SAFE_COW;
};

export interface FreeCow extends BaseCow {
  __typename: CowTypeName.FREE_COW;
  padId: PadId;
  selected: boolean;
  error: boolean;
}

export interface CapturedCow extends BaseCow {
  __typename: CowTypeName.CAPTURED_COW;
}

export type Cow = SafeCow | FreeCow | CapturedCow;

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

export interface AddCowPayload extends BaseInterface {
  __typename: PayloadTypeName.ADD_COW_PAYLOAD;
  selectedPad: PadId;
}

export interface MoveCowPayload extends BaseInterface {
  __typename: PayloadTypeName.MOVE_COW_PAYLOAD;
  selectedPad: PadId;
}

export interface CaptureCowPayload extends BaseInterface {
  __typename: PayloadTypeName.CAPTURE_COW_PAYLOAD;
  selectedCow: CowId;
}

export interface CancelCowPayload extends BaseInterface {
  __typename: PayloadTypeName.CANCEL_COW_PAYLOAD;
}

export interface SelectCowPayload extends BaseInterface {
  __typename: PayloadTypeName.SELECT_COW_PAYLOAD;
  selectedCow: CowId;
}

export interface ShowInvalidCowPayload extends BaseInterface {
  __typename: PayloadTypeName.SHOW_INVALID_COW_PAYLOAD;
  selectedCow: CowId;
}

export interface ShowInvalidPadPayload extends BaseInterface {
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

interface BaseAction extends BaseInterface {
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
