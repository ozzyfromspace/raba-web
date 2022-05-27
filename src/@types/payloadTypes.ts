import { PadId } from './padTypes';
import { ResolvedGameType } from './resolverActionTypes';
import { Typename } from './typenames';

export interface ResolvedCowPayload {
  __typename: Typename.RESOLVED_COW_PAYLOAD;
  type: ResolvedGameType.ADD_COW | ResolvedGameType.MOVE_COW;
  selectedPadId: PadId;
}