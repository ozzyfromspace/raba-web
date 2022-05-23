import { AddCow, Game } from '../../../utils/types';
import { isInVerticalLine } from '../lineDetector';
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
  };

  const vertical = isInVerticalLine(
    computedData.cowOwner,
    computedData.nextCows,
    computedData.nextPads,
    payload.selectedPadId
  );

  console.log('[Vertical]:', vertical.result);
  return nextGame;
};

export default addCow;
