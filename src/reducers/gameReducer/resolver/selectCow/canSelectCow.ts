import { getPlayer } from '../../../../components/Cows/utils/initCows';
import { GameState } from '../../../../utils/operationalStateMachine';
import { CanSelectCow, Player } from '../../../../utils/types';

const canSelectCow: CanSelectCow = (cowId, game) => {
  const state = game.actionState;
  const cowOwner: Player = getPlayer(cowId);

  const isCurrentPlayersCow = game.currentPlayer === cowOwner;
  const currentGameState = state.prevState.length ? state.prevState[0] : null;
  const hasNotMovedOwnCow = currentGameState === GameState.INITIAL_STATE;
  const canTakeSelectedCow = currentGameState === GameState.MOVE_COW;

  if (isCurrentPlayersCow && hasNotMovedOwnCow) return true;
  if (!isCurrentPlayersCow && canTakeSelectedCow) return true;
  return false;
};

export default canSelectCow;
