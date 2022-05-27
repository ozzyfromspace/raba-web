import { CanAddCaptureCow } from '../../../../@types/functionTypes';
import { GamePhase, GameStatus } from '../../../../@types/gameTypes';
import { PlayOperation } from '../../../../@types/PlayState';
import { getPlayer } from '../../../../components/Cows/utils/initCows';
import isCowProtected from '../../utils/isCowProtected';

const canAddCaptureCow: CanAddCaptureCow = (cowId, game) => {
  const isOpponentCow = game.currentPlayer !== getPlayer(cowId);
  const cowOwner = getPlayer(cowId);
  const isSelectedCowProtected = isCowProtected(cowId, cowOwner, game);

  const canAddCaptureCowBoolean =
    !game.playState.done &&
    isOpponentCow &&
    !isSelectedCowProtected &&
    game.gameStatus === GameStatus.ONGOING &&
    game.gamePhase === GamePhase.ADDING &&
    game.playState.nextOperation === PlayOperation.ADD_CAPTURE_COW;

  return canAddCaptureCowBoolean;
};

export default canAddCaptureCow;
