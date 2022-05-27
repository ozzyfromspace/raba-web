import { CanAddCow } from '../../../../@types/functionTypes';
import { GameStatus } from '../../../../@types/gameTypes';

const canAddCow: CanAddCow = (padId, game) => {
  const canAddCowBoolean =
    !game.playState.done &&
    game.cows.safeCows[game.currentPlayer] > 0 &&
    game.gameStatus === GameStatus.ONGOING &&
    game.pads[padId].visitingCowId === null;
  return canAddCowBoolean;
};

export default canAddCow;
