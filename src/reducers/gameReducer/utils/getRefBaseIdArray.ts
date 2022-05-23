import { BaseId, BoardDigits, PadId } from "../../../utils/types";

const verticalBaseId00 = [BaseId._00, BaseId._03, BaseId._06];
const verticalBaseId11 = [BaseId._11, BaseId._13, BaseId._15];
const verticalBaseId22 = [BaseId._22, BaseId._23, BaseId._24];
const verticalBaseId30 = [BaseId._30, BaseId._31, BaseId._32];
const verticalBaseId34 = [BaseId._34, BaseId._35, BaseId._36];
const verticalBaseId42 = [BaseId._42, BaseId._43, BaseId._44];
const verticalBaseId51 = [BaseId._51, BaseId._53, BaseId._55];
const verticalBaseId60 = [BaseId._60, BaseId._63, BaseId._66];

const verticalBaseIdMap = {
  0: verticalBaseId00,
  1: verticalBaseId11,
  2: verticalBaseId22,
  30: verticalBaseId30,
  34: verticalBaseId34,
  4: verticalBaseId42,
  5: verticalBaseId51,
  6: verticalBaseId60,
};

const getRefBaseIdArray = (padId: PadId) => {
  const padIdDigitsArray = padId
    .split('_')[1]
    .split('')
    .map((str) => +str) as BoardDigits[];

  if (padIdDigitsArray[0] !== 3) {
  }
  const firstId = padIdDigitsArray[0];
  const secondId = padIdDigitsArray[1];
  const isFirstNot3 = firstId !== 3;
  const isSecondLess3 = secondId < 3;
  const refBaseIdArray = isFirstNot3
    ? verticalBaseIdMap[firstId]
    : isSecondLess3
    ? verticalBaseIdMap[30]
    : verticalBaseIdMap[34];

  return refBaseIdArray;
};

export default getRefBaseIdArray;