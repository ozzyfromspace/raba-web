import { CowId, Player, PlayerCowsObject } from '../../../utils/types';

const getOwnerByCowId = (cowId: CowId, playerCowsObject: PlayerCowsObject) => {
  const cowOwner =
    playerCowsObject[Player.ONE]?.[cowId]?.owner ??
    playerCowsObject[Player.TWO]?.[cowId].owner;
  return cowOwner;
};

export default getOwnerByCowId;
