import { useGame } from '../GameProvider/GameProvider';
import styles from '../Lines/Lines.module.scss';
import {
  DiagonalLine00,
  DiagonalLine06,
  DiagonalLine60,
  DiagonalLine66
} from './Line';

const DiagonalLines = () => {
  const { game } = useGame();

  return (
    <g id="DIAGONAL_LINES">
      <DiagonalLine00 game={game} styles={styles} />
      <DiagonalLine60 game={game} styles={styles} />
      <DiagonalLine66 game={game} styles={styles} />
      <DiagonalLine06 game={game} styles={styles} />
    </g>
  );
};

export default DiagonalLines;
