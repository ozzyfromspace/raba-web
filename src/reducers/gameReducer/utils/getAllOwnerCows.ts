import { Player } from "../../../@types/coreTypes";
import { Cows } from "../../../@types/cowTypes";

const getAllOwnerCows = (cowOwner: Player, nextCows: Cows) => {
  const playerCowsObject = nextCows[cowOwner];
  return Object.values(playerCowsObject);
};

export default getAllOwnerCows;
