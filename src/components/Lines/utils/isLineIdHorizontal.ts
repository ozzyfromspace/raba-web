import {
  HorizontalLineId,
  LineDirection,
  LineId,
} from '../../../@types/lineTypes';

const isLineIdHorizontal = (lineId: LineId): lineId is HorizontalLineId => {
  return lineId.split('_')[0] === LineDirection.HORIZONTAL;
};

export default isLineIdHorizontal;
