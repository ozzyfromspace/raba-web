import {
  IsInVerticalLine,
  PadId,
  ResourceTypeName,
} from '../../../utils/types';
import { getAllFreeCows, getAllOwnerCows, getRefBaseIdArray } from '../utils';

const isInVerticalLine: IsInVerticalLine = (
  cowOwner,
  nextCows,
  newPads,
  padId
) => {
  const allOwnerCows = getAllOwnerCows(cowOwner, nextCows);

  const refBaseIdArray = getRefBaseIdArray(padId);
  const freeCows = getAllFreeCows(allOwnerCows);
  const matches = [];

  for (const refBaseId of refBaseIdArray) {
    let pass = false;
    const refPadId: PadId = PadId[`${ResourceTypeName.PAD}${refBaseId}`];
    const testPad = newPads[refPadId];

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
        matches: [],
      };
    }
  }
  return {
    result: true,
    matches,
  };
};

export default isInVerticalLine;
