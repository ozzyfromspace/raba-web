import {
  CanSelectCowResolver, GameActionTypeName,
  GamePayloadTypeName,
  SelectCowPayload,
  SelectCowResolvedAction
} from "../../../../utils/types";
import canSelectHelpers from "../../utils/canSelectHelpers";

const canSelectCowResolver: CanSelectCowResolver = (cowId, game) => {

  const { canMoveCow, canAddCaptureCow, canMoveCaptureCow } = canSelectHelpers(
    cowId,
    game
  );

  if(canMoveCow) {
    const selectCowPayload: SelectCowPayload = {
      __typename: GamePayloadTypeName.SELECT_COW_PAYLOAD,
      selectedCowId: cowId,
    };
    const addCowResolvedAction: SelectCowResolvedAction = {
      __typename: GameActionTypeName.SELECT_COW_ACTION,
      type: GameActionTypeName.SELECT_COW_ACTION,
      payload: selectCowPayload,
    };
  
    return addCowResolvedAction;

  }
  if(canAddCaptureCow){

  }
  if(canMoveCaptureCow){

  }
  return

};

export default canSelectCowResolver;
