import { Player } from './coreTypes';
import { Cows } from './cowTypes';
import { Game, GameErrors, GameStatus } from './gameTypes';
import { Glowing } from './glowingTypes';
import { PadId, Pads } from './padTypes';
import { PlayState } from './PlayState';

export type NextData_AddCowFn = (
  game: Game,
  selectedPadId: PadId
) => NextData_AddCow;

export interface NextData_AddCow {
  nextGlowing: Glowing;
  cowOwner: Player;
  nextPads: Pads;
  nextCows: Cows;
  nextPlayState: PlayState;
  nextErrors: GameErrors;
  nextGameStatus: GameStatus;
}
