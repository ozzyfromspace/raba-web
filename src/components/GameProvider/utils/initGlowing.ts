import { InitGlowing, LineDirection } from '../../../utils/types';

const initGlowing: InitGlowing = () => ({
  pads: new Set(),
  lines: {
    [LineDirection.DIAGONAL]: new Set(),
    [LineDirection.HORIZONTAL]: new Set(),
    [LineDirection.VERTICAL]: new Set(),
  },
});

export default initGlowing;
