import {
  BaseId,
  BoardDigits,
  Cow,
  CowId,
  CowTypeName,
  FreeCow,
  Game,
  IsInVerticalLine,
  PadId,
  Player,
  ResourceTypeName,
} from '../../../utils/types';

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

const isInVerticalLine: IsInVerticalLine = (cowId, game, addedCow, newPads, padId) => {
  const refBaseIdArray = getRefBaseIdArray(padId);
  const freeCows = getAllFreeCows(cowId, game, addedCow);
  const matches = [];

  console.log('[free cows]: ', freeCows);
  console.log('[baseIdArr]: ', refBaseIdArray);

  for (const refBaseId of refBaseIdArray) {
    console.log('[top]');
    let pass = false;
    const testPad = newPads[`${ResourceTypeName.PAD}${refBaseId}`];

    for (const cow of freeCows) {
      if (testPad.visitingCowId === cow.cowId) {
        pass = true;
        matches.push(cow.cowId);
        console.log('[if statement]', pass, matches);
        break;
      }
    }

    if (!pass) {
      console.log('result is false, something went wrong');
      console.log('[part 2]: ', testPad, testPad.visitingCowId);
      return {
        result: false,
        matches: [],
      };
    }
  }
  return {
    result: true,
    matches,
  };
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

const getAllFreeCows = (
  cowId: CowId,
  game: Game,
  addedCow: Cow | null
): FreeCow[] => {
  const cowOwner = getOwnerByCowId(cowId, game);

  const allCowsArray = Object.values(game.cows[cowOwner]);
  const freeCowsArray = allCowsArray.filter(freeCowFilter);
  return addedCow
    ? ([...freeCowsArray, addedCow] as FreeCow[])
    : (freeCowsArray as FreeCow[]);
};

const getOwnerByCowId = (cowId: CowId, game: Game) => {
  const cowOwner =
    game.cows[Player.ONE]?.[cowId]?.owner ??
    game.cows[Player.TWO]?.[cowId].owner;
  return cowOwner;
};

const freeCowFilter = (testCow: Cow) =>
  testCow.__typename === CowTypeName.FREE_COW;

export default isInVerticalLine;
