// import styles from './Cows.module.scss';

import { CowTypeName, Player } from '../../utils/types';
import Cow from '../Cow';
import { useGame } from '../GameProvider';

const Cows = () => {
  const { game } = useGame();

  const allCowsArray = Object.values({
    ...game.cows[Player.ONE],
    ...game.cows[Player.TWO],
  });
  const freeCowsArray = allCowsArray.filter(
    ({ __typename }) => __typename === CowTypeName.FREE_COW
  );

  return (
    <g id="Cows">
      {freeCowsArray.map((cow) => (
        <Cow {...cow} key={cow.cowId} />
      ))}
    </g>
  );
};

export default Cows;
