import { PadProps } from '../../@types/props';
import sendToGameReducer from '../../utils/sendToGameReducer';
import { getPlayer } from '../Cows/utils/initCows';
import { useGame } from '../GameProvider/GameProvider';
import styles from './Pad.module.scss';

const Pad = (props: PadProps) => {
  const {
    centerX,
    centerY,
    radius,
    stroke,
    fill,
    strokeOpacity,
    padId,
    isGlowing,
    visitingCowId,
  } = props;

  const { dispatch: gameDispatch } = useGame();

  const visitingPlayer = !!visitingCowId && getPlayer(visitingCowId);

  const glow = isGlowing && visitingPlayer ? styles[`pad-glow-${visitingPlayer}`] : '';

  return (
    <circle
      className={glow}
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
