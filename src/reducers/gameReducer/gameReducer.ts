import { GameReducer } from '../../@types/functionTypes';
import { ResolvedGameType } from '../../@types/resolverActionTypes';
import { addCow } from './middlewares';
import goToNextPlayer from './middlewares/goToNextPlayer';
import gameActionResolver from './resolver/gameActionResolver';

const gameReducer: GameReducer = (game, action) => {
  if (action.payload) {
    const resolvedAction = gameActionResolver(
      action.payload.selectableId,
      game
    );
    if (!resolvedAction) return game;

    switch (resolvedAction.type) {
      case ResolvedGameType.ADD_COW:
        return addCow(game, resolvedAction.payload.selectedPadId);
    }
  } else if (action.type === 'NEXT_PLAYER') {
    return goToNextPlayer(game);
  } else return game;
};

export default gameReducer;
