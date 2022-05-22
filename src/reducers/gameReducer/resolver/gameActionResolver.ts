import { GameActionResolver } from '../../../utils/types';
import canAddCowResolver, { canAddCow } from './addCow';
import { isCowId, isPadId } from './isResourceId';
import canSelectCow from './selectCow/canSelectCow';
import canSelectCowResolver from './selectCow/canSelectCowResolver';

const gameActionResolver: GameActionResolver = (selectableId, game) => {
  if (isCowId(selectableId)) {
    if (canSelectCow(selectableId, game)) return canSelectCowResolver(selectableId);
  }

  if (isPadId(selectableId)) {
    if (canAddCow(selectableId, game)) return canAddCowResolver(selectableId);
  }

  return null;
};

export default gameActionResolver;
