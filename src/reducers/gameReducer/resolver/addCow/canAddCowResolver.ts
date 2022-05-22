import {
  AddCowPayload,
  AddCowResolvedAction,
  CanAddCowResolver,
  GameActionTypeName,
  GamePayloadTypeName,
} from '../../../../utils/types';

const canAddCowResolver: CanAddCowResolver = (padId) => {
  const addCowPayload: AddCowPayload = {
    __typename: GamePayloadTypeName.ADD_COW_PAYLOAD,
    selectedPadId: padId,
  };
  const addCowResolvedAction: AddCowResolvedAction = {
    __typename: GameActionTypeName.ADD_COW_ACTION,
    type: GameActionTypeName.ADD_COW_ACTION,
    payload: addCowPayload,
  };

  return addCowResolvedAction;
};

export default canAddCowResolver;
