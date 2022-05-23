import { Cows, Player } from '../../../utils/types';

const getAllOwnerCows = (cowOwner: Player, nextCows: Cows) => {
  const playerCowsObject = nextCows[cowOwner];
  return Object.values(playerCowsObject);
};

export default getAllOwnerCows;
