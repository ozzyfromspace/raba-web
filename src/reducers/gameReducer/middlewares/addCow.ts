import { AddCow, Game } from '../../../utils/types';
import { computeNextData_AddCow } from '../utils';

const addCow: AddCow = (game, payload) => {
  const computedData = computeNextData_AddCow(game, payload);

  const nextGame: Game = {
    __typename: computedData.nextTypename,
    pads: computedData.nextPads,
    cows: computedData.nextCows,
    errors: computedData.nextErrors,
    currentPlayer: computedData.nextPlayer,
    actionState: computedData.nextActionState,
    gameStatus: computedData.nextGameStatus,
    glowing: computedData.nextGlowing,
  };

  return nextGame;
};

export default addCow;
