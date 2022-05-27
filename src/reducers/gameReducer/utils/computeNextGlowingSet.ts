import { ComputeNextGlowingState } from '../../../@types/glowingTypes';
import initGlowing from '../../../components/GameProvider/utils/initGlowing';
import allPadsFilter from './allPadsFilter';
import buildGlowingState from './buildGlowingState';

const computeNextGlowingState: ComputeNextGlowingState = (
  nextCows,
  nextPads
) => {
  const allPads = Object.values(nextPads).filter(allPadsFilter);

  const glowingState = allPads.reduce(
    buildGlowingState(nextCows, nextPads),
    initGlowing()
  );

  return glowingState;
};

export default computeNextGlowingState;
