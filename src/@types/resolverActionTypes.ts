import { SelectableId } from './coreTypes';
import { CowId } from './cowTypes';
import { Game } from './gameTypes';
import { PadId } from './padTypes';
import { ResolvedPadPayload, ResolvedCowPayload } from './payloadTypes';
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
  payload: ResolvedPadPayload;
}

export interface ResolvedAddCaptureCowAction {
  __typename: Typename.RESOLVED_ADD_CAPTURE_COW_ACTION;
  type: ResolvedGameType.ADD_CAPTURE_COW;
  payload: ResolvedCowPayload;
}

export type ResolvedGameAction = ResolvedAddCowAction | ResolvedAddCaptureCowAction;

export type GameActionResolver = (
  selectableId: SelectableId,
  game: Game
) => ResolvedGameAction | null;

export type CanAddCowResolver = (padId: PadId) => ResolvedAddCowAction;
export type CanAddCaptureCowResolver = (cowId: CowId) => ResolvedAddCaptureCowAction;
