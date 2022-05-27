import { SelectableId } from "../../../@types/coreTypes";
import { CowId } from "../../../@types/cowTypes";
import { PadId } from "../../../@types/padTypes";
import { Typename } from "../../../@types/typenames";


const isResourceId = (
  selectableId: SelectableId,
  resourceName: Typename.COW | Typename.PAD
) => {
  const selectableIdName = selectableId.substring(0, 3);
  if (selectableIdName === Typename[resourceName]) return true;
  return false;
};

const isCowId = (selectableId: SelectableId): selectableId is CowId =>
  isResourceId(selectableId, Typename.COW);

const isPadId = (selectableId: SelectableId): selectableId is PadId =>
  isResourceId(selectableId, Typename.PAD);

export { isCowId, isPadId };
