// import styles from './Cow.module.scss';

import { Player, PlayerColor, PlayerColorOnPad } from '../../@types/coreTypes';
import { CowProps } from '../../@types/props';
import { Typename } from '../../@types/typenames';
import { useGame } from '../GameProvider/GameProvider';

const Cow = (props: CowProps) => {
  const { game } = useGame();
  const { centerX, centerY, radius, cowId, owner } = props;
  const defaultFillColor =
    owner === Player.ONE ? PlayerColor.ONE : PlayerColor.TWO;

  const cow = game.cows[owner][cowId];
  const cowOnPad =
    cow.__typename === Typename.FREE_COW && game.glowing.pads.has(cow.padId);

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
    />
  );
};

export default Cow;
