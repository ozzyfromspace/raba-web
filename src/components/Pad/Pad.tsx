// import styles from './Pad.module.scss';

import { PadProps } from 'utils/props';

const Pad = (props: PadProps) => {
  const { centerX, centerY, radius, stroke, fill, strokeOpacity, padId } =
    props;

  return (
    <circle
      id={padId}
      data-testid={padId}
      cx={centerX}
      cy={centerY}
      r={radius}
      fill={fill}
      stroke={stroke}
      strokeOpacity={strokeOpacity}
    />
  );
};

export default Pad;
