import { Player, PlayerColorOnPad, Styles } from '../../../@types/coreTypes';
import { Game } from '../../../@types/gameTypes';
import { LineDirection, LineId } from '../../../@types/lineTypes';
import isLineIdDiagonal from './isLineIdDiagonal';
import isLineIdHorizontal from './isLineIdHorizontal';
import isLineIdVertical from './isLineIdVertical';

const lineStylesFn = (
  lineId: LineId,
  lineDirection: LineDirection,
  lineOwner: Player | null,
  game: Game,
  styles: Styles
) => {
  if (lineOwner === null)
    return {
      glowingClass: '',
      lineStyle: '#F2F1F1',
    };

  let isSelected = false;
  if (isLineIdVertical(lineId) && lineDirection === LineDirection.VERTICAL) {
    isSelected = game.glowing.lines[lineDirection].has(lineId);
  }
  if (
    isLineIdHorizontal(lineId) &&
    lineDirection === LineDirection.HORIZONTAL
  ) {
    isSelected = game.glowing.lines[lineDirection].has(lineId);
  }
  if (isLineIdDiagonal(lineId) && lineDirection === LineDirection.DIAGONAL) {
    isSelected = game.glowing.lines[lineDirection].has(lineId);
  }
  const lineStyle = isSelected
    ? lineOwner === Player.ONE
      ? PlayerColorOnPad.ONE
      : PlayerColorOnPad.TWO
    : '#F2F1F1';

  return {
    glowingClass: isSelected ? styles[`line-glow-${lineOwner}`] : '',
    lineStyle,
  };
};

export default lineStylesFn;
