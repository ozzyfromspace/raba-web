import { PadGraphArray } from '../../../utils/padsGraphArray';
import { Pad, ResourceTypeName } from '../../../utils/types';

const allPadsFilter = (
  resource: Pad | ResourceTypeName.PADS | PadGraphArray
): resource is Pad => {
  if (
    resource instanceof Object &&
    !(resource instanceof Array) &&
    resource.__typename === ResourceTypeName.PAD
  )
    return true;
  return false;
};

export default allPadsFilter;
