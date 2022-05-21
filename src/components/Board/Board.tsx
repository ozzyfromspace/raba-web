// import styles from './Board.module.scss';
import Background from '../Background';
import Lines from '../Lines';
import Pads from '../Pads/index';

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
        </g>
      </svg>
    </div>
  );
};

export default Board;
