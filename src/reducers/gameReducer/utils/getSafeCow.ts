import { CowTypeName, PlayerCows } from '../../../utils/types';

const getSafeCow = (playerCows: PlayerCows) => {
  const cows = Object.values(playerCows);

  for (const cow of cows) {
    if (cow.__typename === CowTypeName.SAFE_COW) return cow;
  }

  throw new Error('No Safe Cows to play. Check your logic, hombre.');
};

export default getSafeCow;
