import { getPlayer } from '../../../../components/Cows/utils/initCows';
import { PlayOperation } from '../../../../utils/PlayState';
import { CanSelectCow, CowTypeName, Player } from '../../../../utils/types';
import getPadGraphByRootId from '../../utils/getPadGraphByPadId';
import isCowProtected from '../../utils/isCowProtected';
import isCowTrapped from '../../utils/isCowTrapped';

const canSelectCow: CanSelectCow = (cowId, game) => {
  const playState = game.playState;
  const cowOwner: Player = getPlayer(cowId);
  const cow = game.cows[cowOwner][cowId];
  const isCowFree = cow.__typename === CowTypeName.FREE_COW;

  if (isCowFree) {
    const padId = cow.padId;
    const currentPadGraph = getPadGraphByRootId(padId, game.pads.padGraphs);
    const cowIsTrapped = isCowTrapped(cowId, currentPadGraph, game.pads);

    const isCurrentPlayersCow = game.currentPlayer === cowOwner;
    const currentPlayState = playState.__typename;
    const nextPlayState = playState.nextOperation;
    const hasNotMovedOwnCow = currentPlayState === PlayOperation.INITIAL_STATE;
    const cowIsProtected = isCowProtected(cowId, cowOwner, game);
    const canTakeSelectedCow =
      currentPlayState === PlayOperation.MOVE_COW &&
      nextPlayState === PlayOperation.MOVE_CAPTURE_COW &&
      cowIsProtected;

    const canSelectOwnCow =
      isCurrentPlayersCow && hasNotMovedOwnCow && !cowIsTrapped;
    const canSelectOpponentCow = !isCurrentPlayersCow && canTakeSelectedCow;

    if (canSelectOwnCow) return true;
    if (canSelectOpponentCow) return true;
    return false;
  }

  throw new Error(
    'You should only be able to select a FREE cow in the first place'
  );
};

export default canSelectCow;
