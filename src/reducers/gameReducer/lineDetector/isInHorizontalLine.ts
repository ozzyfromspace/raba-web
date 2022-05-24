import {
  IsInLine,
  LineDirection,
  PadId,
  ResourceTypeName,
} from '../../../utils/types';
import {
  getAllFreeCows,
  getAllOwnerCows,
  getHorizontalBaseArrayData,
} from '../utils';

const isInHorizontalLine: IsInLine = (cowOwner, nextCows, nextPads, padId) => {
  const allOwnerCows = getAllOwnerCows(cowOwner, nextCows);
  const { baseId, refArray } = getHorizontalBaseArrayData(padId);
  const freeCows = getAllFreeCows(allOwnerCows);
  const matches = [];

  for (const refBaseId of refArray) {
    let pass = false;
    const refPadId: PadId = PadId[`${ResourceTypeName.PAD}${refBaseId}`];
    const testPad = nextPads[refPadId];

    for (const cow of freeCows) {
      if (testPad.visitingCowId === cow.cowId) {
        matches.push(cow.cowId);
        pass = true;
        break;
      }
    }

    if (!pass) {
      return {
        result: false,
        lineDescription: null,
        matches: [],
      };
    }
  }
  return {
    result: true,
    lineDescription: {
      lineDirection: LineDirection.HORIZONTAL,
      baseId,
    },
    matches,
  };
};

export default isInHorizontalLine;
