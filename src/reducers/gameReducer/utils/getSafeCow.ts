import { PlayerCows } from '../../../@types/cowTypes';
import { Typename } from '../../../@types/typenames';

const getSafeCow = (playerCows: PlayerCows) => {
  const cows = Object.values(playerCows);

  for (const cow of cows) {
    if (cow.__typename === Typename.SAFE_COW) return cow;
  }

  throw new Error('No Safe Cows to play. Check your logic, hombre.');
};

export default getSafeCow;
