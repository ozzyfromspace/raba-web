import { AssertPadsObject } from '../../../@types/functionTypes';
import { PadId } from '../../../@types/padTypes';
import { Typename } from '../../../@types/typenames';

const assertPadsObject: AssertPadsObject = (partial) => {
  const hasCorrectTypename = partial?.__typename === Typename.PADS;
  if (!hasCorrectTypename)
    throw new Error("Pads Object missing a __typename 'PADS'");
  const hasAllPads = Object.keys(partial).filter(isPad).length === 24;
  if (!hasAllPads) throw new Error("Some PadId's are missing");
  if (partial?.padGraphs === undefined || partial?.padGraphs?.length !== 24)
    throw new Error('padGraphs is not a valid Pads object');
  return;
};

const isPad = (key: string): key is PadId => {
  if (PadId?.[key as PadId] !== undefined) return true;
  return false;
};

export default assertPadsObject;
