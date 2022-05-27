import { SelectableId } from './coreTypes';
import { Game } from './gameTypes';
import { PadId } from './padTypes';
import { ResolvedCowPayload } from './payloadTypes';
import { Typename } from './typenames';

export enum ResolvedGameType {
  ADD_COW = 'ADD_COW',
  MOVE_COW = 'MOVE_COW',
  ADD_CAPTURE_COW = 'ADD_CAPTURE_COW',
  MOVE_CAPTURE_COW = 'MOVE_CAPTURE_COW',
}

export interface ResolvedAddCowAction {
  __typename: Typename.RESOLVED_ADD_COW_ACTION;
  type: ResolvedGameType.ADD_COW;
  payload: ResolvedCowPayload;
}

export type GameActionResolver = (
  selectableId: SelectableId,
  game: Game
) => ResolvedAddCowAction | null;

export type CanAddCowResolver = (padId: PadId) => ResolvedAddCowAction;
