import { IsCowTrapped } from "../../../utils/types";

const isCowTrapped: IsCowTrapped = (cowId, padGraph, pads) => {
  const rootPad = pads[padGraph.root];

  if(rootPad.visitingCowId !== cowId) throw new Error('Inconsistent CowId-PadId combination passed as inputs');

  for(const closePad of padGraph.children) {
    const currentPad = pads[closePad];
    if(currentPad.visitingCowId === null) return false;
  }

  return true;
}

export default isCowTrapped;