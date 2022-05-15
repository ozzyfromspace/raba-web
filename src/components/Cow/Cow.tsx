// import styles from './Cow.module.scss';

import { CowProps } from 'utils/props';
import { Player, PlayerColor } from 'utils/types';

const Cow = (props: CowProps) => {
  const { centerX, centerY, radius, cowId, owner } = props;
  const fillColor = owner === Player.ONE ? PlayerColor.ONE : PlayerColor.TWO;

  return (
    <circle
      id={cowId}
      data-testid={cowId}
      r={radius}
      cx={centerX}
      cy={centerY}
      // transform="matrix(1 0 0 -1 300 300)"
      fill={fillColor}
      stroke="#777777"
    />
  );
};

export default Cow;
