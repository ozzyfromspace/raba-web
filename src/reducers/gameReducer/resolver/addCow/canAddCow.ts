import { CanAddCow, GameStatus } from '../../../../utils/types';

const canAddCow: CanAddCow = (padId, game) => {
  const canAddCowBoolean =
    game.actionStack.length === 0 &&
    game.cows.safeCows[game.currentPlayer] > 0 &&
    game.gameStatus === GameStatus.ONGOING &&
    game.pads[padId].visitingCow === null;
  return canAddCowBoolean;
};

export default canAddCow;
