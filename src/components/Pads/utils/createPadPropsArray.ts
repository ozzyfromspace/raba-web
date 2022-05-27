import { Game } from "../../../@types/gameTypes";
import { Pad } from "../../../@types/padTypes";
import { PadProps } from "../../../@types/props";

const createPadPropsArray = (game: Game) => (pad: Pad) => {
  const currentProps: PadProps = {
    ...pad,
    isGlowing: game.glowing.pads.has(pad.padId),
  };
  return currentProps;
};

export default createPadPropsArray;
