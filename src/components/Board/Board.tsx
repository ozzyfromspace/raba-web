// import styles from './Board.module.scss';
import Background from '../Background';
import Cows from '../Cows';
import Lines from '../Lines';
import Pads from '../Pads';

const Board = () => {
  return (
    <div role="main">
      <svg
        width="600"
        height="600"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="BOARD">
          <Background />
          <Lines />
          <Pads />
          <Cows />
        </g>
      </svg>
    </div>
  );
};

export default Board;
