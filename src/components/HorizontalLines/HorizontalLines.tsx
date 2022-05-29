import { useGame } from '../GameProvider';
import styles from '../Lines/Lines.module.scss';
import {
  HorizontalLine00,
  HorizontalLine06,
  HorizontalLine11,
  HorizontalLine15,
  HorizontalLine22,
  HorizontalLine03,
  HorizontalLine24,
  HorizontalLine43
} from './Line';

const HorizontalLines = () => {
  const { game } = useGame();

  return (
    <g id="HORIZONTAL_LINES">
      <HorizontalLine00 game={game} styles={styles} />
      <HorizontalLine11 game={game} styles={styles} />
      <HorizontalLine22 game={game} styles={styles} />
      <HorizontalLine03 game={game} styles={styles} />
      <HorizontalLine24 game={game} styles={styles} />
      <HorizontalLine43 game={game} styles={styles} />
      <HorizontalLine15 game={game} styles={styles} />
      <HorizontalLine06 game={game} styles={styles} />
    </g>
  );
};

export default HorizontalLines;
