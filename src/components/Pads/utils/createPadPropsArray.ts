import { Game } from "../../../@types/gameTypes";
import { Pad } from "../../../@types/padTypes";
import { PlayOperation } from "../../../@types/PlayState";
import { PadProps } from "../../../@types/props";

const createPadPropsArray = (game: Game) => (pad: Pad) => {
  const currentProps: PadProps = {
    ...pad,
    isGlowing: game.glowing.pads.has(pad.padId),
    currentPlayer: game.currentPlayer,
    captureOperation: game.playState.nextOperation !== PlayOperation.ADD_CAPTURE_COW,
  };
  return currentProps;
};

export default createPadPropsArray;
