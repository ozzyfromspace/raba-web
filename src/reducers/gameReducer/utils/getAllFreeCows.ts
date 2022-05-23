import { Cow, FreeCow } from '../../../utils/types';
import freeCowFilter from './freeCowFilter';

const getAllFreeCows = (allPlayerCows: Cow[]): FreeCow[] => {
  const freeCowsArray = allPlayerCows.filter(freeCowFilter);
  return freeCowsArray;
};

export default getAllFreeCows;
