import { useGame } from '../GameProvider';
import styles from '../Lines/Lines.module.scss';
import {
  VerticalLine00,
  VerticalLine11,
  VerticalLine22,
  VerticalLine30,
  VerticalLine34,
  VerticalLine42,
  VerticalLine51,
  VerticalLine60
} from './Line';


const VerticalLines = () => {
  const { game } = useGame();

  return (
    <g id="VERTICAL_LINES">
      <VerticalLine00 game={game} styles={styles} />
      <VerticalLine11 game={game} styles={styles} />
      <VerticalLine22 game={game} styles={styles} />
      <VerticalLine30 game={game} styles={styles} />
      <VerticalLine34 game={game} styles={styles} />
      <VerticalLine42 game={game} styles={styles} />
      <VerticalLine51 game={game} styles={styles} />
      <VerticalLine60 game={game} styles={styles} />
    </g>
  );
};

export default VerticalLines;
