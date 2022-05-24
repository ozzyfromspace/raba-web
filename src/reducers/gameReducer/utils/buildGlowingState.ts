import { Cows, Glowing, LineDirection, Pad, Pads, Player, PlayerCowsObject } from "../../../utils/types";
import { isInDiagonalLine, isInHorizontalLine, isInVerticalLine } from "../lineDetector";
import getOwnerByCowId from "./getOwnerByCowId";

const buildGlowingState = (nextCows: Cows, nextPads: Pads) => {
  const nextPlayerCowsObject: PlayerCowsObject = {
    [Player.ONE]: nextCows[Player.ONE],
    [Player.TWO]: nextCows[Player.TWO],
  };

  return (accState: Glowing, pad: Pad) => {
    const cowId = pad.visitingCowId;

    if (cowId) {
      const cowOwner = getOwnerByCowId(cowId, nextPlayerCowsObject);

      const vertical = isInVerticalLine(cowOwner, cowId, nextCows, nextPads);

      const horizontal = isInHorizontalLine(
        cowOwner,
        cowId,
        nextCows,
        nextPads
      );

      const diagonal = isInDiagonalLine(cowOwner, cowId, nextCows, nextPads);

      if (
        vertical.result &&
        vertical.lineDescription.lineDirection === LineDirection.VERTICAL
      ) {
        accState.lines[LineDirection.VERTICAL].add(
          vertical.lineDescription.baseId
        );
        accState.pads.add(pad.padId);
      }

      if (
        horizontal.result &&
        horizontal.lineDescription.lineDirection === LineDirection.HORIZONTAL
      ) {
        accState.lines[LineDirection.HORIZONTAL].add(
          horizontal.lineDescription.baseId
        );
        accState.pads.add(pad.padId);
      }

      if (
        diagonal.result &&
        diagonal.lineDescription.lineDirection === LineDirection.DIAGONAL
      ) {
        accState.lines[LineDirection.DIAGONAL].add(
          diagonal.lineDescription.baseId
        );
        accState.pads.add(pad.padId);
      }
    }

    return accState;
  };
};

export default buildGlowingState;