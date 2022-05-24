import { PadProps } from '../../../utils/props';
import { Game, Pad } from '../../../utils/types';

const createPadPropsArray = (game: Game) => (pad: Pad) => {
  const currentProps: PadProps = {
    ...pad,
    isGlowing: game.glowing.pads.has(pad.padId),
  };
  return currentProps;
};

export default createPadPropsArray;
