import { Cow, CowTypeName, FreeCow } from '../../../utils/types';

const freeCowFilter = (testCow: Cow): testCow is FreeCow =>
  testCow.__typename === CowTypeName.FREE_COW;

export default freeCowFilter;
