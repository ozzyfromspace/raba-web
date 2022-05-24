import { IsInLine, LineDescription, LineDirection } from '../../../utils/types';
import {
  getAllFreeCows,
  getAllOwnerCows,
  getHorizontalBaseArrayData,
  getLineMatchData,
} from '../utils';

const isInHorizontalLine: IsInLine = (cowOwner, nextCows, nextPads, padId) => {
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
};

export default isInHorizontalLine;
