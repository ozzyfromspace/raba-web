import { IsInLine, LineDescription, LineDirection } from '../../../utils/types';
import {
  getAllFreeCows,
  getAllOwnerCows,
  getLineMatchData,
  getVerticalBaseArrayData
} from '../utils';

const isInVerticalLine: IsInLine = (cowOwner, nextCows, nextPads, padId) => {
  const allOwnerCows = getAllOwnerCows(cowOwner, nextCows);
  const { baseId, refArray } = getVerticalBaseArrayData(padId);
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
};

export default isInVerticalLine;
