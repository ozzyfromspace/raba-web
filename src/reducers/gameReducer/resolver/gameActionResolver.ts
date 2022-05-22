import { GameActionResolver } from '../../../utils/types';
import canAddCowResolver, { canAddCow } from './addCow';
import { isCowId, isPadId } from './isResourceId';

const gameActionResolver: GameActionResolver = (selectableId, game) => {
  if (isCowId(selectableId)) {
  }

  if (isPadId(selectableId)) {
    if (canAddCow(selectableId, game)) return canAddCowResolver(selectableId);
  }

  return null;
};

export default gameActionResolver;
