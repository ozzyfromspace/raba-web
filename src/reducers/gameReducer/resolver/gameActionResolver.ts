import { GameActionResolver } from '../../../@types/resolverActionTypes';
import canAddCowResolver, { canAddCow } from './addCow';
import canAddCaptureCow from './addCow/canAddCaptureCow';
import canAddCaptureCowResolver from './addCow/canAddCaptureCowResolver';
import { isCowId, isPadId } from './isResourceId';

const gameActionResolver: GameActionResolver = (selectableId, game) => {
  if (isCowId(selectableId)) {
    if (canAddCaptureCow(selectableId, game)) {
      return canAddCaptureCowResolver(selectableId);
    }
  }

  if (isPadId(selectableId)) {
    if (canAddCow(selectableId, game)) return canAddCowResolver(selectableId);
  }

  return null;
};

export default gameActionResolver;
