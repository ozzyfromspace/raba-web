import {
  BaseId,
  Cow,
  CowId,
  LineDescription,
  PadId,
  Pads,
  ResourceTypeName
} from '../../../utils/types';

const getLineMatchData = (
  refArray: BaseId[],
  freeCows: Cow[],
  nextPads: Pads,
  lineDescription: LineDescription
): { result: false, lineDescription:  } | {result: true, lineDescription: LineDescription, matches: CowId[]} => {
  const matches: CowId[] = [];

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
    lineDescription,
    matches,
  };
};

export default getLineMatchData;
