import { ResolvedCowPayload } from '../../../../@types/payloadTypes';
import {
  CanAddCaptureCowResolver,
  ResolvedAddCaptureCowAction,
  ResolvedGameType,
} from '../../../../@types/resolverActionTypes';
import { Typename } from '../../../../@types/typenames';

const canAddCaptureCowResolver: CanAddCaptureCowResolver = (cowId) => {
  const addCaptureCowPayload: ResolvedCowPayload = {
    __typename: Typename.RESOLVED_COW_PAYLOAD,
    type: ResolvedGameType.ADD_CAPTURE_COW,
    selectedCowId: cowId,
  };
  const resolvedAction: ResolvedAddCaptureCowAction = {
    __typename: Typename.RESOLVED_ADD_CAPTURE_COW_ACTION,
    type: ResolvedGameType.ADD_CAPTURE_COW,
    payload: addCaptureCowPayload,
  };

  return resolvedAction;
};

export default canAddCaptureCowResolver;
