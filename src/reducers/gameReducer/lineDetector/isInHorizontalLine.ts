import {
  CowTypeName,
  IsInLine,
  LineDescription,
  LineDirection,
} from '../../../utils/types';
import {
  getAllFreeCows,
  getAllOwnerCows,
  getHorizontalBaseArrayData,
  getLineMatchData,
} from '../utils';

const isInHorizontalLine: IsInLine = (cowOwner, cowId, nextCows, nextPads) => {
  const currentCow = nextCows[cowOwner][cowId];

  if (currentCow.__typename === CowTypeName.FREE_COW) {
    const padId = currentCow.padId;
    const allOwnerCows = getAllOwnerCows(cowOwner, nextCows);
    const { baseId, refArray } = getHorizontalBaseArrayData(padId);
    const freeCows = getAllFreeCows(allOwnerCows);

    const lineDescription: LineDescription<true> = {
      lineDirection: LineDirection.HORIZONTAL,
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
    lineDirection: LineDirection.HORIZONTAL,
    baseId: null,
  };

  return {
    result: false,
    lineDescription,
    matches: [],
  };
};

export default isInHorizontalLine;
