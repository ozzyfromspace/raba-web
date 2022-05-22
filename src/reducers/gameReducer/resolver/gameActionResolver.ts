import {
  AddCowPayload, AddCowResolvedAction, GameActionResolver,
  GameActionTypeName,
  GamePayloadTypeName,
  GameStatus
} from '../../../utils/types';
import { isCowId, isPadId } from './isResourceId';

const gameActionResolver: GameActionResolver = (selectableId, game) => {
  if (isCowId(selectableId)) {
  }

  if (isPadId(selectableId)) {
    const canAddCow =
      game.actionStack.length === 0 &&
      game.cows.safeCows[game.currentPlayer] > 0 &&
      game.gameStatus === GameStatus.ONGOING &&
      game.pads[selectableId].visitingCow === null;

    // ADD Cow
    if (canAddCow) {
      const addCowPayload: AddCowPayload = {
        __typename: GamePayloadTypeName.ADD_COW_PAYLOAD,
        selectedPadId: selectableId,
      };
      const addCowResolvedAction: AddCowResolvedAction = {
        __typename: GameActionTypeName.ADD_COW_ACTION,
        type: GameActionTypeName.ADD_COW_ACTION,
        payload: addCowPayload,
      };

      return addCowResolvedAction;
    }
  }

  return null;
};

export default gameActionResolver;
