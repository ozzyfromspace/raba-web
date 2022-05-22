import {
  CanSelectCowResolver,
  GameActionTypeName,
  GamePayloadTypeName,
  SelectCowPayload,
  SelectCowResolvedAction,
} from '../../../../utils/types';

const canSelectCowResolver: CanSelectCowResolver = (cowId) => {
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
};

export default canSelectCowResolver;
