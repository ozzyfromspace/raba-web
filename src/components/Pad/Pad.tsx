// import styles from './Pad.module.scss';
import { PadProps } from '../../@types/props';
import sendToGameReducer from '../../utils/sendToGameReducer';
import { useGame } from '../GameProvider/GameProvider';

const Pad = (props: PadProps) => {
  const { centerX, centerY, radius, stroke, fill, strokeOpacity, padId } =
    props;

  const { dispatch: gameDispatch } = useGame();

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
      onClick={sendToGameReducer(padId, gameDispatch)}
    />
  );
};

export default Pad;
