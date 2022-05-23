import { CowId, Game, IsInVerticalLine } from '../../../utils/types';

const horizontalBaseId0 = [CowId.COW_00, CowId.COW_03, CowId.COW_06];
const horizontalBaseId1 = [CowId.COW_11, CowId.COW_13, CowId.COW_15];
const horizontalBaseId2 = [CowId.COW_22, CowId.COW_23, CowId.COW_24];
const horizontalBaseId3 = [CowId.COW_30, CowId.COW_31, CowId.COW_32];
const horizontalBaseId4 = [CowId.COW_34, CowId.COW_35, CowId.COW_36];
const horizontalBaseId5 = [CowId.COW_42, CowId.COW_43, CowId.COW_44];
const horizontalBaseId6 = [CowId.COW_51, CowId.COW_53, CowId.COW_55];
const horizontalBaseId7 = [CowId.COW_60, CowId.COW_63, CowId.COW_66];

const horizontalLists = [
  horizontalBaseId0,
  horizontalBaseId1,
  horizontalBaseId2,
  horizontalBaseId3,
  horizontalBaseId4,
  horizontalBaseId5,
  horizontalBaseId6,
  horizontalBaseId7,
];

const isInHorizontalLine: IsInVerticalLine = (cowId: CowId, game: Game) => {
  for (const verticalList of horizontalLists) {
    const matches = verticalList.filter(cowIdMatches(cowId));
    if (matches.length === 3)
      return {
        result: true,
        matches,
      };
  }
  return {
    result: false,
    matches: [],
  };
};

const cowIdMatches = (refId: CowId) => (tempId: CowId) => refId === tempId;

export default isInHorizontalLine;