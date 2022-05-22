import { PadProps } from './props';

export enum Player {
  ONE = 'PLAYER_ONE',
  TWO = 'PLAYER_TWO',
}

export enum PlayerColor {
  ONE = '#ff0000',
  TWO = '#0000ff',
}

export interface Circle {
  radius: number;
  fill: string;
  stroke: string;
  strokeOpacity: number;
}

export enum ResourceTypeName {
  GAME = 'GAME',
  PAD = 'PAD',
  COW = 'COW',
  PADS = 'PADS',
  COWS = 'COWS',
  BASE_COW = 'BASE_COW',
}

export enum CowTypeName {
  COW = 'COW',
  SAFE_COW = 'SAFE_COW',
  FREE_COW = 'FREE_COW',
  CAPTURED_COW = 'CAPTURED_COW',
}

export type TypeName = keyof (typeof ResourceTypeName &
  typeof GameActionTypeName &
  typeof GamePayloadTypeName);

export enum BaseId {
  _00 = '_00',
  _30 = '_30',
  _60 = '_60',
  _11 = '_11',
  _31 = '_31',
  _51 = '_51',
  _22 = '_22',
  _32 = '_32',
  _42 = '_42',
  _03 = '_03',
  _13 = '_13',
  _23 = '_23',
  _43 = '_43',
  _53 = '_53',
  _63 = '_63',
  _24 = '_24',
  _34 = '_34',
  _44 = '_44',
  _15 = '_15',
  _35 = '_35',
  _55 = '_55',
  _06 = '_06',
  _36 = '_36',
  _66 = '_66',
}

export enum PadId {
  PAD_00 = 'PAD_00',
  PAD_30 = 'PAD_30',
  PAD_60 = 'PAD_60',
  PAD_11 = 'PAD_11',
  PAD_31 = 'PAD_31',
  PAD_51 = 'PAD_51',
  PAD_22 = 'PAD_22',
  PAD_32 = 'PAD_32',
  PAD_42 = 'PAD_42',
  PAD_03 = 'PAD_03',
  PAD_13 = 'PAD_13',
  PAD_23 = 'PAD_23',
  PAD_43 = 'PAD_43',
  PAD_53 = 'PAD_53',
  PAD_63 = 'PAD_63',
  PAD_24 = 'PAD_24',
  PAD_34 = 'PAD_34',
  PAD_44 = 'PAD_44',
  PAD_15 = 'PAD_15',
  PAD_35 = 'PAD_35',
  PAD_55 = 'PAD_55',
  PAD_06 = 'PAD_06',
  PAD_36 = 'PAD_36',
  PAD_66 = 'PAD_66',
}

export enum CowId {
  COW_00 = 'COW_00',
  COW_30 = 'COW_30',
  COW_60 = 'COW_60',
  COW_11 = 'COW_11',
  COW_31 = 'COW_31',
  COW_51 = 'COW_51',
  COW_22 = 'COW_22',
  COW_32 = 'COW_32',
  COW_42 = 'COW_42',
  COW_03 = 'COW_03',
  COW_13 = 'COW_13',
  COW_23 = 'COW_23',
  COW_43 = 'COW_43',
  COW_53 = 'COW_53',
  COW_63 = 'COW_63',
  COW_24 = 'COW_24',
  COW_34 = 'COW_34',
  COW_44 = 'COW_44',
  COW_15 = 'COW_15',
  COW_35 = 'COW_35',
  COW_55 = 'COW_55',
  COW_06 = 'COW_06',
  COW_36 = 'COW_36',
  COW_66 = 'COW_66',
}

type BaseIdUnion = keyof typeof BaseId;

export type ResourceId<S extends ResourceTypeName> = `${S}${BaseIdUnion}`;
export type PadIdUnion = ResourceId<ResourceTypeName.PAD>;
export type CowIdUnion = ResourceId<ResourceTypeName.COW>;

export interface Pad extends Circle {
  __typename: ResourceTypeName.PAD;
  padId: PadId;
  centerX: number;
  centerY: number;
  radius: number;
  error: boolean;
  selected: boolean;
  visitingCow: null | CowId;
}

export type Pads = {
  __typename: ResourceTypeName.PADS;
} & {
  [Property in PadId]: Pad;
};

interface BaseCow extends Circle {
  __typename: CowTypeName;
  cowId: CowId;
  owner: Player;
}

export interface SafeCow extends BaseCow {
  __typename: CowTypeName.SAFE_COW;
  centerX: number;
  centerY: number;
}

export interface FreeCow extends BaseCow {
  __typename: CowTypeName.FREE_COW;
  padId: PadId;
  selected: boolean;
  error: boolean;
  centerX: number;
  centerY: number;
}

export interface CapturedCow extends BaseCow {
  __typename: CowTypeName.CAPTURED_COW;
  centerX: number;
  centerY: number;
}

export type Cow = SafeCow | FreeCow | CapturedCow;

export type PlayerCows = Record<CowId, Cow>;

export type NumberSafeCows =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12;

export type Cows = {
  __typename: ResourceTypeName.COWS;
  selectedCowId: CowId | null;
  safeCows: {
    [Player.ONE]: NumberSafeCows;
    [Player.TWO]: NumberSafeCows;
  };
  [Player.ONE]: PlayerCows;
  [Player.TWO]: PlayerCows;
};

export interface AddCowPayload {
  __typename: GamePayloadTypeName.ADD_COW_PAYLOAD;
  selectedPadId: PadId;
}

export interface MoveCowPayload {
  __typename: GamePayloadTypeName.MOVE_COW_PAYLOAD;
  selectedPadId: PadId;
}

export interface CaptureCowPayload {
  __typename: GamePayloadTypeName.CAPTURE_COW_PAYLOAD;
  selectedCowId: CowId;
}

export interface CancelCowPayload {
  __typename: GamePayloadTypeName.CANCEL_COW_PAYLOAD;
}

export interface SelectCowPayload {
  __typename: GamePayloadTypeName.SELECT_COW_PAYLOAD;
  selectedCowId: CowId;
}

export interface ShowInvalidCowPayload {
  __typename: GamePayloadTypeName.SHOW_INVALID_COW_PAYLOAD;
  selectedCowId: CowId;
}

export interface ShowInvalidPadPayload {
  __typename: GamePayloadTypeName.SHOW_INVALID_PAD_PAYLOAD;
  selectedCowId: PadId;
}

export type BaseGamePayload =
  | AddCowPayload
  | MoveCowPayload
  | CaptureCowPayload
  | CancelCowPayload
  | SelectCowPayload
  | ShowInvalidCowPayload
  | ShowInvalidPadPayload;

export enum GameStatus {
  ONGOING = 'GAME_ONGOING',
  STALEMATE = 'GAME_STALEMATE',
  VICTORY_P1 = 'PLAYER_ONE_WINS',
  VICTORY_P2 = 'PLAYER_TWO_WINS',
}

export enum GameActionTypeName {
  ADD_COW_ACTION = 'ADD_COW_ACTION',
  MOVE_COW_ACTION = 'MOVE_COW_ACTION',
  CAPTURE_COW_ACTION = 'CAPTURE_COW_ACTION',
  CANCEL_COW_ACTION = 'CANCEL_COW_ACTION',
  SELECT_COW_ACTION = 'SELECT_COW_ACTION',
  SHOW_INVALID_COW_ACTION = 'SHOW_INVALID_COW_ACTION',
  SHOW_INVALID_PAD_ACTION = 'SHOW_INVALID_PAD_ACTION',
  GAME_ACTION = 'GAME_ACTION',
}

export enum GamePayloadTypeName {
  ADD_COW_PAYLOAD = 'ADD_COW_PAYLOAD',
  MOVE_COW_PAYLOAD = 'MOVE_COW_PAYLOAD',
  CAPTURE_COW_PAYLOAD = 'CAPTURE_COW_PAYLOAD',
  CANCEL_COW_PAYLOAD = 'CANCEL_COW_PAYLOAD',
  SELECT_COW_PAYLOAD = 'SELECT_COW_PAYLOAD',
  SHOW_INVALID_COW_PAYLOAD = 'SHOW_INVALID_COW_PAYLOAD',
  SHOW_INVALID_PAD_PAYLOAD = 'SHOW_INVALID_PAD_PAYLOAD',
}

interface BaseResolvedAction {
  type: GameActionTypeName;
  payload: BaseGamePayload;
}

export interface AddCowResolvedAction extends BaseResolvedAction {
  __typename: GameActionTypeName.ADD_COW_ACTION;
  type: GameActionTypeName.ADD_COW_ACTION;
  payload: AddCowPayload;
}

export interface MoveCowResolvedAction extends BaseResolvedAction {
  __typename: GameActionTypeName.MOVE_COW_ACTION;
  type: GameActionTypeName.MOVE_COW_ACTION;
  payload: MoveCowPayload;
}

export interface CaptureCowResolvedAction extends BaseResolvedAction {
  __typename: GameActionTypeName.CAPTURE_COW_ACTION;
  type: GameActionTypeName.CAPTURE_COW_ACTION;
  payload: CaptureCowPayload;
}

export interface CancelCowResolvedAction extends BaseResolvedAction {
  __typename: GameActionTypeName.CANCEL_COW_ACTION;
  type: GameActionTypeName.CANCEL_COW_ACTION;
  payload: CancelCowPayload;
}

export interface SelectCowResolvedAction extends BaseResolvedAction {
  __typename: GameActionTypeName.SELECT_COW_ACTION;
  type: GameActionTypeName.SELECT_COW_ACTION;
  payload: SelectCowPayload;
}

export interface ShowInvalidCowResolvedAction extends BaseResolvedAction {
  __typename: GameActionTypeName.SHOW_INVALID_COW_ACTION;
  type: GameActionTypeName.SHOW_INVALID_COW_ACTION;
  payload: ShowInvalidCowPayload;
}

export interface ShowInvalidPadResolvedAction extends BaseResolvedAction {
  __typename: GameActionTypeName.SHOW_INVALID_PAD_ACTION;
  type: GameActionTypeName.SHOW_INVALID_PAD_ACTION;
  payload: ShowInvalidPadPayload;
}

export type GameResolvedAction =
  | AddCowResolvedAction
  | MoveCowResolvedAction
  | CaptureCowResolvedAction
  | CancelCowResolvedAction
  | SelectCowResolvedAction
  | ShowInvalidCowResolvedAction
  | ShowInvalidPadResolvedAction;

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
  actionStack: GameActionTypeName[];
  errors: GameErrors;
}

export interface GameAction {
  __typename: GameActionTypeName.GAME_ACTION;
  payload: {
    selectableId: SelectableId;
  };
}

export type GameDispatch = React.Dispatch<GameAction>;

export type SelectableId = PadId | CowId;

export type GameActionResolver = (
  selectableId: SelectableId,
  game: Game
) => GameResolvedAction | null;

export interface GameProviderValue {
  game: Game;
  dispatch: GameDispatch;
}

export type InitPads = (padPropsData: PadProps[]) => Pads;
export type InitGame = () => Game;
export type InitErrors = () => GameErrors;
export type InitCows = () => Cows;
export type GetPlayer = (cowId: CowId) => Player;
export type GameReducer = (game: Game, action: GameAction) => Game;
