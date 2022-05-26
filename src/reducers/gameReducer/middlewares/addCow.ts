import { AddCow, Game } from '../../../utils/types';
import { computeNextData_AddCow } from '../utils';

const addCow: AddCow = (game, payload) => {
  const computedData = computeNextData_AddCow(game, payload);

  const nextGame: Game = {
    ...game,
    pads: computedData.nextPads,
    cows: computedData.nextCows,
    errors: computedData.nextErrors,
    playState: computedData.nextPlayState,
    gameStatus: computedData.nextGameStatus,
    glowing: computedData.nextGlowing,
  };

  return nextGame;
};

export default addCow;
