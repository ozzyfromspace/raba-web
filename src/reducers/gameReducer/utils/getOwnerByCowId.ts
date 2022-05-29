import { Player } from "../../../@types/coreTypes";
import { CowId, PlayerCowsObject } from "../../../@types/cowTypes";

const getOwnerByCowId = (cowId: CowId, playerCowsObject: PlayerCowsObject) => {
  const cowOwner =
    playerCowsObject[Player.ONE]?.[cowId]?.owner ??
    playerCowsObject[Player.TWO]?.[cowId].owner;
  return cowOwner;
};

export default getOwnerByCowId;
