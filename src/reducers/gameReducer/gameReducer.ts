import { GameActionTypeName, GameReducer } from '../../utils/types';

const gameReducer: GameReducer = (game, action) => {
  switch (action.type) {
    case GameActionTypeName.ADD_COW_ACTION:
      return { ...game };

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
};

export default gameReducer;
