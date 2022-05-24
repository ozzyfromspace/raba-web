import {
  CowTypeName,
  IsInLine,
  LineDescription,
  LineDirection,
} from '../../../utils/types';
import {
  getAllFreeCows,
  getAllOwnerCows,
  getDiagonalBaseArrayData,
  getLineMatchData,
} from '../utils';

const isInDiagonalLine: IsInLine = (cowOwner, cowId, nextCows, nextPads) => {
  const currentCow = nextCows[cowOwner][cowId];

  if (currentCow.__typename === CowTypeName.FREE_COW) {
    const padId = currentCow.padId;
    const refData = getDiagonalBaseArrayData(padId);

    if (!refData) {
      const lineDescription: LineDescription<false> = {
        lineDirection: LineDirection.HORIZONTAL,
        baseId: null,
      };

      return {
        result: false,
        lineDescription,
        matches: [],
      };
    }

    const { baseId, refArray } = refData;
    const allOwnerCows = getAllOwnerCows(cowOwner, nextCows);
    const freeCows = getAllFreeCows(allOwnerCows);

    const lineDescription: LineDescription<true> = {
      lineDirection: LineDirection.DIAGONAL,
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
    lineDirection: LineDirection.DIAGONAL,
    baseId: null,
  };

  return {
    result: false,
    lineDescription,
    matches: [],
  };
};

export default isInDiagonalLine;
