import { GameActionTypeName, GameReducer } from '../../utils/types';
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
      case GameActionTypeName.ADD_COW_ACTION:
        return addCow(game, resolvedAction.payload);

      case GameActionTypeName.CANCEL_COW_ACTION:
        return game;

      case GameActionTypeName.CAPTURE_COW_ACTION:
        return game;

      case GameActionTypeName.MOVE_COW_ACTION:
        return game;

      case GameActionTypeName.SELECT_COW_ACTION:
        return game;

      case GameActionTypeName.SHOW_INVALID_COW_ACTION:
        return game;

      case GameActionTypeName.SHOW_INVALID_PAD_ACTION:
        return game;
    }
  } else if (action.type === 'NEXT_PLAYER') {
    return goToNextPlayer(game);
  } else return game;
};

export default gameReducer;
