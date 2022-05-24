import { AddCow, Game } from '../../../utils/types';
import {
  isInDiagonalLine,
  isInHorizontalLine,
  isInVerticalLine
} from '../lineDetector';
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

  const horizontal = isInHorizontalLine(
    computedData.cowOwner,
    computedData.nextCows,
    computedData.nextPads,
    payload.selectedPadId
  );

  const diagonal = isInDiagonalLine(
    computedData.cowOwner,
    computedData.nextCows,
    computedData.nextPads,
    payload.selectedPadId
  );

  console.log('[VERTICAL]:', vertical);
  console.log('[HORIZONTAL]:', horizontal);
  console.log('[DIAGONAL]:', diagonal);
  return nextGame;
};

export default addCow;
