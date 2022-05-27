import { BaseId } from "../../../@types/coreTypes";
import { Game } from "../../../@types/gameTypes";
import { LineDirection, LineId } from "../../../@types/lineTypes";
import { PadId } from "../../../@types/padTypes";
import { Typename } from "../../../@types/typenames";
import { getPlayer } from "../../Cows/utils/initCows";
import isLineIdDiagonal from "./isLineIdDiagonal";
import isLineIdHorizontal from "./isLineIdHorizontal";
import isLineIdVertical from "./isLineIdVertical";

const getLineOwnerHelper = (isSelected: boolean, lineId: LineId, game: Game) => {
  const lineIdArray = lineId.split('_');
  const baseId = lineIdArray[lineIdArray.length - 1] as BaseId;
  const padId = `${Typename.PAD}_${baseId}` as PadId;
  const lineOwner = game.pads[padId].visitingCowId;
  return (!lineOwner || !isSelected) ? null : getPlayer(lineOwner);
}

const getLineOwner = (lineId: LineId, lineDirection: LineDirection, game: Game) => {
  if (isLineIdVertical(lineId) && lineDirection === LineDirection.VERTICAL) {
    const isSelected = game.glowing.lines[lineDirection].has(lineId);
    return getLineOwnerHelper(isSelected, lineId, game)
  }
  if (
    isLineIdHorizontal(lineId) &&
    lineDirection === LineDirection.HORIZONTAL
    ) {
      const isSelected = game.glowing.lines[lineDirection].has(lineId);
      return getLineOwnerHelper(isSelected, lineId, game)
    }
    if (isLineIdDiagonal(lineId) && lineDirection === LineDirection.DIAGONAL) {
      const isSelected = game.glowing.lines[lineDirection].has(lineId);
      return getLineOwnerHelper(isSelected, lineId, game)
    }
    
    return null;
}

export default getLineOwner;