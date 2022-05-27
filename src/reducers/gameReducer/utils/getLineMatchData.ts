import { CowId } from "../../../@types/cowTypes";
import { GetLineMatchDataFn } from "../../../@types/functionTypes";
import { LineDescription, LineDirection } from "../../../@types/lineTypes";
import { PadId } from "../../../@types/padTypes";
import { Typename } from "../../../@types/typenames";

const getLineMatchData: GetLineMatchDataFn = (
  refArray,
  freeCows,
  nextPads,
  lineDescription
) => {
  const matches: CowId[] = [];

  for (const refBaseId of refArray) {
    let pass = false;
    const refPadId = PadId[`${Typename.PAD}${refBaseId}`];
    const testPad = nextPads[refPadId];

    for (const cow of freeCows) {
      if (testPad.visitingCowId === cow.cowId) {
        matches.push(cow.cowId);
        pass = true;
        break;
      }
    }

    if (!pass) {
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
  }

  return {
    result: true,
    lineDescription,
    matches,
  };
};

export default getLineMatchData;
