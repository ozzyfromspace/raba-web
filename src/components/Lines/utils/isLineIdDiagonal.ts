import { DiagonalLineId, LineDirection, LineId } from "../../../@types/lineTypes";

const isLineIdDiagonal = (lineId: LineId): lineId is DiagonalLineId => {
  return lineId.split('_')[0] === LineDirection.DIAGONAL;
};

export default isLineIdDiagonal;