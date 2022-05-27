import { Player } from './coreTypes';
import { CowId, Cows } from './cowTypes';
import { Game, GameErrors } from './gameTypes';
import { Glowing } from './glowingTypes';
import { PadId, Pads } from './padTypes';
import { PlayState } from './PlayState';

export interface NextData {
  nextGlowing: Glowing;
  cowOwner: Player;
  nextPads: Pads;
  nextCows: Cows;
  nextPlayState: PlayState;
  nextErrors: GameErrors;
}

export type NextData_AddCowFn = (game: Game, selectedPadId: PadId) => NextData;

export type NextData_AddCaptureCowFn = (
  game: Game,
  selectedCowId: CowId
) => NextData;
