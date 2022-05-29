import { AddCaptureCow } from '../../../@types/functionTypes';
import { Game } from '../../../@types/gameTypes';
import computeNextData_AddCaptureCow from '../utils/computeNextData_AddCaptureCow';

const addCaptureCow: AddCaptureCow = (game, selectedCowId) => {
  const computedData = computeNextData_AddCaptureCow(game, selectedCowId);

  const nextGame: Game = {
    ...game,
    pads: computedData.nextPads,
    cows: computedData.nextCows,
    errors: computedData.nextErrors,
    playState: computedData.nextPlayState,
    glowing: computedData.nextGlowing,
  };

  return nextGame;
};

export default addCaptureCow;