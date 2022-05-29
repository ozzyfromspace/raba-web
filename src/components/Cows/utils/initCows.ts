import { Player } from '../../../@types/coreTypes';
import { CowId, Cows, PlayerCows, SafeCow } from '../../../@types/cowTypes';
import { GetPlayer, InitCows } from '../../../@types/functionTypes';
import { SafeCowDefaults } from '../../../@types/props';
import { Typename } from '../../../@types/typenames';

const defaults: SafeCowDefaults = {
  __typename: Typename.SAFE_COW,
  fill: '#ffffff',
  radius: 24,
  stroke: '#808080',
  strokeOpacity: 0.5,
};

const initCows: InitCows = () => {
  const cowIdArray = Object.values(CowId);
  const cowsObjInit = {
    __typename: Typename.COWS,
    safeCows: {
      [Player.ONE]: 12,
      [Player.TWO]: 12,
    },
    [Player.ONE]: {} as PlayerCows,
    [Player.TWO]: {} as PlayerCows,
  };

  const createdCows = cowIdArray.reduce((cowsObj, cowId) => {
    const owner = getPlayer(cowId);

    const safeCow: SafeCow = {
      ...defaults,
      cowId,
      owner,
      centerX: 0,
      centerY: 0,
    };

    const cowsOfOwner = cowsObj[owner];
    const newCowsOfOwner = { ...cowsOfOwner, [safeCow.cowId]: safeCow };

    return { ...cowsObj, [owner]: newCowsOfOwner };
  }, cowsObjInit);

  if (!isValidTray(createdCows.PLAYER_ONE))
    throw new Error('Expected 12 cows. Something went wrong');
  if (!isValidTray(createdCows.PLAYER_TWO))
    throw new Error('Expected 12 cows. Something went wrong');

  return createdCows as Cows;
};

const isValidTray = (playerCows: PlayerCows) => {
  const nrCows = Object.keys(playerCows).length;

  if (nrCows !== 12) return false;
  return true;
};

export const getPlayer: GetPlayer = (cowId) => {
  const idMaxIndex = cowId.length - 1;
  const idSum = Number(cowId[idMaxIndex] + cowId[idMaxIndex - 1]);
  if (isNaN(idSum)) throw new Error('Check IDs, something went wrong');

  if (idSum % 3) return Player.ONE;
  return Player.TWO;
};

export default initCows;
