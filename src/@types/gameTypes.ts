import { Player, SelectableId } from "./coreTypes";
import { CowId, Cows } from "./cowTypes";
import { Glowing } from "./glowingTypes";
import { PadId, Pads } from "./padTypes";
import { PlayState } from "./PlayState";
import { Typename } from "./typenames";

export enum GameStatus {
  ONGOING = 'GAME_ONGOING',
  STALEMATE = 'GAME_STALEMATE',
  VICTORY_P1 = 'PLAYER_ONE_WINS',
  VICTORY_P2 = 'PLAYER_TWO_WINS',
}

export enum GamePhase {
  ADDING = 'ADDING',
  MOVING = 'MOVING',
}

export interface Game {
  __typename: Typename.GAME;
  pads: Pads;
  cows: Cows;
  currentPlayer: Player;
  gameStatus: GameStatus;
  playState: PlayState<boolean>;
  errors: GameErrors;
  gamePhase: GamePhase;
  glowing: Glowing;
}

export interface GamePayload {
  selectableId: SelectableId;
}

export type GameAction = {
  __typename: Typename.GAME_ACTION;
  payload: GamePayload;
} | {
  __typename: Typename.GAME_ACTION;
  type: 'NEXT_PLAYER';
  payload: null;
}

export type GameDispatch = React.Dispatch<GameAction>;

export interface GameProviderValue {
  game: Game;
  dispatch: GameDispatch;
}

export interface GameErrors {
  pads: PadId[];
  cows: CowId[];
}

export type SendToGameReducerFn = (selectableId: SelectableId, gameDispatch: GameDispatch) => () => void;