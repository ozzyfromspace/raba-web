import { BaseId, BoardDigits } from "../../../@types/coreTypes";
import { LineDirection, VerticalLineId } from "../../../@types/lineTypes";
import { PadId } from "../../../@types/padTypes";

const verticalBaseId00 = [BaseId._00, BaseId._03, BaseId._06];
const verticalBaseId11 = [BaseId._11, BaseId._13, BaseId._15];
const verticalBaseId22 = [BaseId._22, BaseId._23, BaseId._24];
const verticalBaseId30 = [BaseId._30, BaseId._31, BaseId._32];
const verticalBaseId34 = [BaseId._34, BaseId._35, BaseId._36];
const verticalBaseId42 = [BaseId._42, BaseId._43, BaseId._44];
const verticalBaseId51 = [BaseId._51, BaseId._53, BaseId._55];
const verticalBaseId60 = [BaseId._60, BaseId._63, BaseId._66];

const verticalBaseIdMap = {
  _0: verticalBaseId00,
  _1: verticalBaseId11,
  _2: verticalBaseId22,
  _30: verticalBaseId30,
  _34: verticalBaseId34,
  _4: verticalBaseId42,
  _5: verticalBaseId51,
  _6: verticalBaseId60,
};

const getVerticalBaseArrayData = (padId: PadId) => {
  const padIdDigitsArray = padId
    .split('_')[1]
    .split('')
    .map((str) => +str) as BoardDigits[];

  const firstId = padIdDigitsArray[0];
  const secondId = padIdDigitsArray[1];
  const isFirstNot3 = firstId !== 3;
  const isSecondLess3 = secondId < 3;
  const refArray = isFirstNot3
    ? verticalBaseIdMap[`_${firstId}`]
    : isSecondLess3
    ? verticalBaseIdMap['_30']
    : verticalBaseIdMap['_34'];

  const baseId: VerticalLineId =
    VerticalLineId[
      `${LineDirection.VERTICAL}_LINE_${isFirstNot3 ? firstId : isSecondLess3 ? '30' : '34'}`
    ];

  return { baseId, refArray };
};

export default getVerticalBaseArrayData;
