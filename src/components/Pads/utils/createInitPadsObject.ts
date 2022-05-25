import { CreateInitPadsObject, PartialPads, ResourceTypeName } from '../../../utils/types';

const createInitPadsObject: CreateInitPadsObject = (
  finObj,
  pad
): PartialPads => ({
  ...finObj,
  __typename: ResourceTypeName.PADS,
  [pad.padId]: pad,
});

export default createInitPadsObject;
