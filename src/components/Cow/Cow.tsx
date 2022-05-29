import { motion } from 'framer-motion';
import { Player, PlayerColor, PlayerColorOnPad } from '../../@types/coreTypes';
import { CowProps } from '../../@types/props';
import { Typename } from '../../@types/typenames';
import canAddCaptureCow from '../../reducers/gameReducer/resolver/addCow/canAddCaptureCow';
import sendToGameReducer from '../../utils/sendToGameReducer';
import { useGame } from '../GameProvider/GameProvider';
import styles from '../Lines/Lines.module.scss';
import cowStyles from './Cow.module.scss';

const Cow = (props: CowProps) => {
  const { centerX, centerY, radius, cowId, owner } = props;
  const { game, dispatch: gameDispatch } = useGame();
  const defaultFillColor =
    owner === Player.ONE ? PlayerColor.ONE : PlayerColor.TWO;

  const cow = game.cows[owner][cowId];
  const cowOnPad =
    cow.__typename === Typename.FREE_COW && game.glowing.pads.has(cow.padId);
  const isGlowing =
    cow.__typename === Typename.FREE_COW && game.glowing.pads.has(cow.padId);
  const glowingClass = isGlowing ? styles[`glow-${cow.owner}`] : '';

  const canAddCapture = canAddCaptureCow(cowId, game);
  const fillColor = cowOnPad
    ? cow.owner === Player.ONE
      ? PlayerColorOnPad.ONE
      : PlayerColorOnPad.TWO
    : defaultFillColor;

  return (
    <motion.circle
      id={cowId}
      data-testid={cowId}
      className={`${glowingClass} ${canAddCapture ? cowStyles.cow : ''}`}
      onClick={sendToGameReducer(cowId, gameDispatch)}
      r={radius}
      cx={centerX}
      cy={centerY}
      fill={fillColor}
      stroke={'#777777'}
      animate={{
        scale: canAddCapture ? [0.945, 1.025, 0.945] : 1,
      }}
      transition={{
        repeat: canAddCapture ? Infinity : undefined,
        bounce: 1,
        duration: 1.25,
      }}
    />
  );
};

export default Cow;
