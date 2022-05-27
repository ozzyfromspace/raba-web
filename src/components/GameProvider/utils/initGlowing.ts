import { InitGlowing } from '../../../@types/glowingTypes';
import { LineDirection } from '../../../@types/lineTypes';

const initGlowing: InitGlowing = () => ({
  pads: new Set(),
  lines: {
    [LineDirection.DIAGONAL]: new Set(),
    [LineDirection.HORIZONTAL]: new Set(),
    [LineDirection.VERTICAL]: new Set(),
  },
});

export default initGlowing;
