import { CowId } from './cowTypes';
import { PadId } from './padTypes';
import { ResolvedGameType } from './resolverActionTypes';
import { Typename } from './typenames';

export interface ResolvedPadPayload {
  __typename: Typename.RESOLVED_PAD_PAYLOAD;
  type: ResolvedGameType.ADD_COW | ResolvedGameType.MOVE_COW;
  selectedPadId: PadId;
}

export interface ResolvedCowPayload {
  __typename: Typename.RESOLVED_COW_PAYLOAD;
  type: ResolvedGameType.ADD_CAPTURE_COW;
  selectedCowId: CowId;
}
