import { BaseId, BoardDigits } from '../../../@types/coreTypes';
import { VerticalLineId } from '../../../@types/lineTypes';
import { PadId } from '../../../@types/padTypes';

const verticalBaseId00 = [BaseId._00, BaseId._03, BaseId._06];
const verticalBaseId11 = [BaseId._11, BaseId._13, BaseId._15];
const verticalBaseId22 = [BaseId._22, BaseId._23, BaseId._24];
const verticalBaseId30 = [BaseId._30, BaseId._31, BaseId._32];
const verticalBaseId34 = [BaseId._34, BaseId._35, BaseId._36];
const verticalBaseId42 = [BaseId._42, BaseId._43, BaseId._44];
const verticalBaseId51 = [BaseId._51, BaseId._53, BaseId._55];
const verticalBaseId60 = [BaseId._60, BaseId._63, BaseId._66];

const verticalBaseIdMap = {
  _00: verticalBaseId00,
  _11: verticalBaseId11,
  _22: verticalBaseId22,
  _30: verticalBaseId30,
  _34: verticalBaseId34,
  _42: verticalBaseId42,
  _51: verticalBaseId51,
  _60: verticalBaseId60,
};

type VerticalBaseIdMapKey = keyof typeof verticalBaseIdMap;

const getVerticalBaseArrayData = (padId: PadId) => {
  const padIdDigitsArray = padId
    .split('_')[1]
    .split('')
    .map((str) => +str) as BoardDigits[];

  const firstId = padIdDigitsArray[0];
  const secondId = padIdDigitsArray[1];
  const isFirstNot3 = firstId !== 3;
  const isSecondLess3 = secondId < 3;
  const mapKey = `_${firstId}${
    firstId < 3 ? firstId : 6 - firstId
  }` as VerticalBaseIdMapKey;

  const refArray = isFirstNot3
    ? verticalBaseIdMap[mapKey]
    : isSecondLess3
    ? verticalBaseIdMap['_30']
    : verticalBaseIdMap['_34'];

  const verticalLineMapKey = VerticalLineId[`VERTICAL_LINE${mapKey}`];
  const baseId: VerticalLineId =
    VerticalLineId[
      isFirstNot3
        ? verticalLineMapKey
        : isSecondLess3
        ? VerticalLineId.VERTICAL_LINE_30
        : VerticalLineId.VERTICAL_LINE_34
    ];

  return { baseId, refArray };
};

export default getVerticalBaseArrayData;
