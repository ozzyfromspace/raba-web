import {
  CowTypeName,
  IsInLine,
  LineDescription,
  LineDirection
} from '../../../utils/types';
import {
  getAllFreeCows,
  getAllOwnerCows,
  getLineMatchData,
  getVerticalBaseArrayData
} from '../utils';

const isInVerticalLine: IsInLine = (cowOwner, cowId, nextCows, nextPads) => {
  const currentCow = nextCows[cowOwner][cowId];
  
  if (currentCow.__typename === CowTypeName.FREE_COW) {
    const padId = currentCow.padId;
    const { baseId, refArray } = getVerticalBaseArrayData(padId);
    const allOwnerCows = getAllOwnerCows(cowOwner, nextCows);
    const freeCows = getAllFreeCows(allOwnerCows);

    const lineDescription: LineDescription<true> = {
      lineDirection: LineDirection.VERTICAL,
      baseId,
    };

    const result = getLineMatchData(
      refArray,
      freeCows,
      nextPads,
      lineDescription
    );

    return result;
  }

  const lineDescription: LineDescription<false> = {
    lineDirection: LineDirection.VERTICAL,
    baseId: null,
  };

  return {
    result: false,
    lineDescription,
    matches: [],
  };
};

export default isInVerticalLine;
