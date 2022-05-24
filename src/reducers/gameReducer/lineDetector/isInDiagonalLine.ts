import {
  IsInLine,
  LineDirection,
  PadId,
  ResourceTypeName,
} from '../../../utils/types';
import {
  getAllFreeCows,
  getAllOwnerCows,
  getDiagonalBaseArrayData,
} from '../utils';

const isInDiagonalLine: IsInLine = (cowOwner, nextCows, nextPads, padId) => {
  const allOwnerCows = getAllOwnerCows(cowOwner, nextCows);
  const refData = getDiagonalBaseArrayData(padId);

  if (!refData) {
    return {
      result: false,
      lineDescription: null,
      matches: [],
    };
  }

  const { baseId, refArray } = refData;

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
      lineDirection: LineDirection.DIAGONAL,
      baseId,
    },
    matches,
  };
};

export default isInDiagonalLine;
