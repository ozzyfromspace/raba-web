import { Pad, ResourceTypeName } from '../../../utils/types';

const allPadsFilter = (
  resource: Pad | ResourceTypeName.PADS
): resource is Pad => {
  if (resource instanceof Object) return true;
  return false;
};

export default allPadsFilter;
