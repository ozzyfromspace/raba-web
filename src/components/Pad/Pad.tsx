// import styles from './Pad.module.scss';

import { PadProps } from '../../utils/props';
import { useGame } from '../GameProvider/GameProvider';

const Pad = (props: PadProps) => {
  const { centerX, centerY, radius, stroke, fill, strokeOpacity, padId } =
    props;

  const { game, dispatch: gameDispatch, gameActionResolver } = useGame();

  const sendToGameReducer = () => {
    const action = gameActionResolver(padId, game);

    if (action === null) return;

    gameDispatch(action);
  };

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
      onClick={sendToGameReducer}
    />
  );
};

export default Pad;
