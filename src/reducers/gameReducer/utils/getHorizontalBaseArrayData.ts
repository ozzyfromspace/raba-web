import { BaseId, BoardDigits } from "../../../@types/coreTypes";
import { HorizontalLineId, LineDirection } from "../../../@types/lineTypes";
import { PadId } from "../../../@types/padTypes";

const horizontalBaseId00 = [BaseId._00, BaseId._30, BaseId._60];
const horizontalBaseId11 = [BaseId._11, BaseId._31, BaseId._51];
const horizontalBaseId22 = [BaseId._22, BaseId._32, BaseId._42];
const horizontalBaseId03 = [BaseId._03, BaseId._13, BaseId._23];
const horizontalBaseId43 = [BaseId._43, BaseId._53, BaseId._63];
const horizontalBaseId24 = [BaseId._24, BaseId._34, BaseId._44];
const horizontalBaseId15 = [BaseId._15, BaseId._35, BaseId._55];
const horizontalBaseId06 = [BaseId._06, BaseId._36, BaseId._66];

const horizontalBaseIdMap = {
  _0: horizontalBaseId00,
  _1: horizontalBaseId11,
  _2: horizontalBaseId22,
  _03: horizontalBaseId03,
  _43: horizontalBaseId43,
  _4: horizontalBaseId24,
  _5: horizontalBaseId15,
  _6: horizontalBaseId06,
};

const getHorizontalBaseArrayData = (padId: PadId) => {
  const padIdDigitsArray = padId
    .split('_')[1]
    .split('')
    .map((str) => +str) as BoardDigits[];

  const firstId = padIdDigitsArray[0];
  const secondId = padIdDigitsArray[1];
  const isSecondNot3 = secondId !== 3;
  const isFirstLess3 = firstId < 3;
  const refArray = isSecondNot3
    ? horizontalBaseIdMap[`_${secondId}`]
    : isFirstLess3
    ? horizontalBaseIdMap['_03']
    : horizontalBaseIdMap['_43'];

  const baseId: HorizontalLineId =
    HorizontalLineId[
      `${LineDirection.HORIZONTAL}_LINE_${isSecondNot3 ? secondId : isFirstLess3 ? '03' : '43'}`
    ];

  return { baseId, refArray };
};

export default getHorizontalBaseArrayData;
