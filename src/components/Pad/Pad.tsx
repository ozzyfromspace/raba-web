import { useState } from "react";
import { PadHoverColor, Player } from '../../@types/coreTypes';
import { PadProps } from '../../@types/props';
import sendToGameReducer from '../../utils/sendToGameReducer';
import { useGame } from '../GameProvider/GameProvider';
import styles from './Pad.module.scss';

const Pad = (props: PadProps) => {
  const { centerX, centerY, radius, stroke, strokeOpacity, padId, currentPlayer, captureOperation } =
    props;
  const [hoverColor, setHoverColor] = useState<PadHoverColor>(() => PadHoverColor.NONE);

  const { dispatch: gameDispatch } = useGame();

  const handleMouseEnter = () => {
    if(!captureOperation) return;
    if(currentPlayer === Player.ONE) return setHoverColor(PadHoverColor.ONE);
    if(currentPlayer === Player.TWO) return setHoverColor(PadHoverColor.TWO);
    return;
  }

  const handleMouseLeave = () => {
    if(hoverColor === PadHoverColor.NONE) return;
    setHoverColor(() => PadHoverColor.NONE);
  }

  return (
    <circle
      id={padId}
      className={captureOperation ? styles.pad: styles['pad-no-capture']}
      data-testid={padId}
      cx={centerX}
      cy={centerY}
      r={radius}
      fill={hoverColor}
      stroke={stroke}
      strokeOpacity={strokeOpacity}
      onClick={sendToGameReducer(padId, gameDispatch)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};

export default Pad;
