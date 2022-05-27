import { Player, PlayerColor, PlayerColorOnPad } from '../../@types/coreTypes';
import { CowProps } from '../../@types/props';
import { Typename } from '../../@types/typenames';
import sendToGameReducer from '../../utils/sendToGameReducer';
import { useGame } from '../GameProvider/GameProvider';
import styles from './Cow.module.scss';


const Cow = (props: CowProps) => {
  const { centerX, centerY, radius, cowId, owner } = props;
  const { game, dispatch: gameDispatch } = useGame();
  const defaultFillColor =
    owner === Player.ONE ? PlayerColor.ONE : PlayerColor.TWO;

  const cow = game.cows[owner][cowId];
  const cowOnPad =
    cow.__typename === Typename.FREE_COW && game.glowing.pads.has(cow.padId);
    const isGlowing = (cow.__typename === Typename.FREE_COW && game.glowing.pads.has(cow.padId));
    const glowingClass = isGlowing ? styles[`cow-glow-${cow.owner}`] : '';

  const fillColor = cowOnPad
    ? cow.owner === Player.ONE
      ? PlayerColorOnPad.ONE
      : PlayerColorOnPad.TWO
    : defaultFillColor;

  return (
    <circle
      id={cowId}
      data-testid={cowId}
      r={radius}
      cx={centerX}
      cy={centerY}
      fill={fillColor}
      stroke="#777777"
      className={glowingClass}
      onClick={sendToGameReducer(cowId, gameDispatch)}
    />
  );
};

export default Cow;
