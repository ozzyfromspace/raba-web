import { AddCow } from '../../../@types/functionTypes';
import { Game } from '../../../@types/gameTypes';
import { computeNextData_AddCow } from '../utils';

const addCow: AddCow = (game, selectedPadId) => {
  const computedData = computeNextData_AddCow(game, selectedPadId);

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

export default addCow;
