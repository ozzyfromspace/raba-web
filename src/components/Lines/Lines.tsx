// import styles from './Lines.module.scss';

import DiagonalLines from '../DiagonalLines';
import HorizontalLines from '../HorizontalLines';
import VerticalLines from '../VerticalLines';

const Lines = () => {
  return (
    <g id="lines" data-testid="lines">
      <DiagonalLines />
      <HorizontalLines />
      <VerticalLines />
    </g>
  );
};

export default Lines;
