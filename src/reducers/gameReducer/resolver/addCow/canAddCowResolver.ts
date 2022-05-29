import { ResolvedPadPayload } from '../../../../@types/payloadTypes';
import {
  CanAddCowResolver,
  ResolvedAddCowAction,
  ResolvedGameType,
} from '../../../../@types/resolverActionTypes';
import { Typename } from '../../../../@types/typenames';

const canAddCowResolver: CanAddCowResolver = (padId) => {
  const addCowPayload: ResolvedPadPayload = {
    __typename: Typename.RESOLVED_PAD_PAYLOAD,
    type: ResolvedGameType.ADD_COW,
    selectedPadId: padId,
  };
  const resolvedAction: ResolvedAddCowAction = {
    __typename: Typename.RESOLVED_ADD_COW_ACTION,
    type: ResolvedGameType.ADD_COW,
    payload: addCowPayload,
  };

  return resolvedAction;
};

export default canAddCowResolver;
