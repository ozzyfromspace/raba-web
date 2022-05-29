import { IsCowProtected } from '../../../@types/functionTypes';
import { Typename } from '../../../@types/typenames';
import freeCowFilter from './freeCowFilter';

const isCowProtected: IsCowProtected = (cowId, owner, game) => {
  const cows = game.cows[owner];
  const testCow = cows[cowId];

  if (testCow.__typename !== Typename.FREE_COW) {
    throw new Error('Test cow must be a free cow');
  }

  const isTestCowInLine = game.glowing.pads.has(testCow.padId);
  if (!isTestCowInLine) return false;

  const ownerCowArray = Object.values(cows).filter(freeCowFilter);

  for (const currentCow of ownerCowArray) {
    const currentCowPadId = currentCow.padId;
    const isCurrentCowProtected = game.glowing.pads.has(currentCowPadId);
    if (!isCurrentCowProtected) return true;
  }

  return false;
};

export default isCowProtected;
