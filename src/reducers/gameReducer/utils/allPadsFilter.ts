import { PadGraphArray } from '../../../@types/padsGraphArray';
import { Pad } from '../../../@types/padTypes';
import { Typename } from '../../../@types/typenames';

const allPadsFilter = (
  resource: Pad | Typename.PADS | PadGraphArray
): resource is Pad => {
  if (
    resource instanceof Object &&
    !(resource instanceof Array) &&
    resource.__typename === Typename.PAD
  )
    return true;
  return false;
};

export default allPadsFilter;
