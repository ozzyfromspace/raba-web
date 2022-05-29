import { Cow, FreeCow } from "../../../@types/cowTypes";
import { Typename } from "../../../@types/typenames";

const freeCowFilter = (testCow: Cow): testCow is FreeCow =>
  testCow.__typename === Typename.FREE_COW;

export default freeCowFilter;
