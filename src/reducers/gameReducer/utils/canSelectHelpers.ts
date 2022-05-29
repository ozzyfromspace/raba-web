import { CanSelectHelpersFn } from '../../../@types/functionTypes';
import { PlayOperation } from '../../../@types/PlayState';
import { Typename } from '../../../@types/typenames';
import { getPlayer } from '../../../components/Cows/utils/initCows';
import getPadGraphByRootId from './getPadGraphByPadId';
import isCowProtected from './isCowProtected';
import isCowTrapped from './isCowTrapped';

const canSelectHelpers: CanSelectHelpersFn = (cowId, game) => {
  const cowOwner = getPlayer(cowId);
  const cow = game.cows[cowOwner][cowId];
  const isCowFree = cow.__typename === Typename.FREE_COW;
  const playState = game.playState;

  if (isCowFree) {
    const padId = cow.padId;

    const currentPadGraph = getPadGraphByRootId(padId, game.pads.padGraphs);
    const cowIsTrapped = isCowTrapped(cowId, currentPadGraph, game.pads);

    const isCurrentPlayersCow = game.currentPlayer === cowOwner;
    const currentPlayOperation = playState.__typename;
    const nextPlayOperation = playState.nextOperation;
    const cowIsProtected = isCowProtected(cowId, cowOwner, game);

    const canMoveCow =
      currentPlayOperation === PlayOperation.INITIAL_STATE &&
      isCurrentPlayersCow &&
      !cowIsTrapped;
    const canAddCaptureCow =
      nextPlayOperation === PlayOperation.ADD_CAPTURE_COW &&
      !isCurrentPlayersCow &&
      !cowIsProtected;
    const canMoveCaptureCow =
      nextPlayOperation === PlayOperation.MOVE_CAPTURE_COW &&
      !isCurrentPlayersCow &&
      !cowIsProtected;

    return {
      canMoveCow,
      canAddCaptureCow,
      canMoveCaptureCow,
    };
  }

  throw new Error(
    'You should only be able to select a FREE cow in the first place'
  );
};

export default canSelectHelpers;
