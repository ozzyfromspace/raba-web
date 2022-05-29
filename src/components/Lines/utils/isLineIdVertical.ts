import {
  LineDirection,
  LineId,
  VerticalLineId,
} from '../../../@types/lineTypes';

const isLineIdVertical = (lineId: LineId): lineId is VerticalLineId => {
  return lineId.split('_')[0] === LineDirection.VERTICAL;
};

export default isLineIdVertical;
