import {
  BaseId,
  BoardDigits,
  DiagonalLineBaseId,
  PadId,
} from '../../../utils/types';

const diagonalBaseId00 = [BaseId._00, BaseId._11, BaseId._22];
const diagonalBaseId60 = [BaseId._60, BaseId._51, BaseId._42];
const diagonalBaseId66 = [BaseId._66, BaseId._55, BaseId._44];
const diagonalBaseId06 = [BaseId._06, BaseId._15, BaseId._24];

const diagonalBaseIdMap = {
  _00: diagonalBaseId00,
  _60: diagonalBaseId60,
  _66: diagonalBaseId66,
  _06: diagonalBaseId06,
};

const getDiagonalBaseArrayData = (padId: PadId) => {
  const padIdDigitsArray = padId
    .split('_')[1]
    .split('')
    .map((str) => +str) as BoardDigits[];

  const firstId = padIdDigitsArray[0];
  const secondId = padIdDigitsArray[1];

  if (firstId === 3 || secondId === 3) return null;

  const isFirstLess3 = firstId < 3;
  const isSecondLess3 = secondId < 3;

  const baseId = isFirstLess3
    ? isSecondLess3
      ? DiagonalLineBaseId['_00']
      : DiagonalLineBaseId['_06']
    : isSecondLess3
    ? DiagonalLineBaseId['_60']
    : DiagonalLineBaseId['_66'];

  const refArray = diagonalBaseIdMap[baseId];

  return { baseId, refArray };
};

export default getDiagonalBaseArrayData;
