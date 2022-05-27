
import { IsInLine } from '../../../@types/functionTypes';
import { LineDescription, LineDirection } from '../../../@types/lineTypes';
import { Typename } from '../../../@types/typenames';
import {
    getAllFreeCows,
    getAllOwnerCows,
    getLineMatchData,
    getVerticalBaseArrayData
} from '../utils';

const isInVerticalLine: IsInLine = (cowOwner, cowId, nextCows, nextPads) => {
  const currentCow = nextCows[cowOwner][cowId];
  
  if (currentCow.__typename === Typename.FREE_COW) {
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
