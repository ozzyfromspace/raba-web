import { GameAction } from '../../@types/gameTypes';
import { PadId } from '../../@types/padTypes';
import { PadProps } from '../../@types/props';
import { Typename } from '../../@types/typenames';
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

  const sendToGameReducer = (padId: PadId) => () => {
    const action: GameAction = {
      __typename: Typename.GAME_ACTION,
      payload: { selectableId: padId },
    };
    gameDispatch(action);
  };

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
      onClick={sendToGameReducer(padId)}
    />
  );
};

export default Pad;
