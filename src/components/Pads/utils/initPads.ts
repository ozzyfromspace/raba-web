import { InitPads, PartialPads } from "../../../@types/functionTypes";
import padGraphArray from "../../../@types/padsGraphArray";
import { Pad } from "../../../@types/padTypes";
import assertPadsObject from './assertPadsObject';
import createInitPadsObject from './createInitPadsObject';
import getPad from './getPad';

const startValue: PartialPads = {};

const initPads: InitPads = (padPropsData) => {
  const pads: Pad[] = padPropsData.map(getPad);

  const initPadsObject = pads.reduce(createInitPadsObject, startValue);
  initPadsObject['padGraphs'] = padGraphArray;
  assertPadsObject(initPadsObject);

  return initPadsObject;
};

export default initPads;
