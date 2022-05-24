import { IsInLine, LineDescription, LineDirection } from '../../../utils/types';
import {
  getAllFreeCows,
  getAllOwnerCows,
  getDiagonalBaseArrayData,
  getLineMatchData,
} from '../utils';

const isInDiagonalLine: IsInLine = (cowOwner, nextCows, nextPads, padId) => {
  const allOwnerCows = getAllOwnerCows(cowOwner, nextCows);
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
};

export default isInDiagonalLine;
