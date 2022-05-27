import { CreateInitPadsObject, PartialPads } from "../../../@types/functionTypes";
import { Typename } from "../../../@types/typenames";

const createInitPadsObject: CreateInitPadsObject = (
  finObj,
  pad
): PartialPads => ({
  ...finObj,
  __typename: Typename.PADS,
  [pad.padId]: pad,
});

export default createInitPadsObject;
