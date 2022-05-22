// import styles from './Pad.module.scss';

import { PadProps } from '../../utils/props';
import { GameAction, GameActionTypeName, PadId } from '../../utils/types';
import { useGame } from '../GameProvider/GameProvider';

const Pad = (props: PadProps) => {
  const { centerX, centerY, radius, stroke, fill, strokeOpacity, padId } =
    props;

  const { dispatch: gameDispatch } = useGame();

  const sendToGameReducer = (padId: PadId) => () => {
    const action: GameAction = {
      __typename: GameActionTypeName.GAME_ACTION,
      payload: { selectableId: padId },
    };
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
      onClick={sendToGameReducer(padId)}
    />
  );
};

export default Pad;
