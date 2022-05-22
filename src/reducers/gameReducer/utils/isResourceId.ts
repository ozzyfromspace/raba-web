import {
  CowId,
  PadId,
  ResourceTypeName,
  SelectableId,
} from '../../../utils/types';

const isResourceId = (
  selectableId: SelectableId,
  resourceName: ResourceTypeName
) => {
  const selectableIdName = selectableId.substring(0, 3);
  if (selectableIdName === ResourceTypeName[resourceName]) return true;
  return false;
};

const isCowId = (selectableId: SelectableId): selectableId is CowId =>
  isResourceId(selectableId, ResourceTypeName.COW);

const isPadId = (selectableId: SelectableId): selectableId is PadId =>
  isResourceId(selectableId, ResourceTypeName.PAD);

export { isCowId, isPadId };
