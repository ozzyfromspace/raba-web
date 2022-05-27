import { GetPadGraphByRootId } from "../../../@types/padGraphTypes";

const getPadGraphByRootId: GetPadGraphByRootId = (rootId, padGraphs) => {
  for (const padGraph of padGraphs) {
    const currentRootId = padGraph.root;
    if (rootId === currentRootId) return padGraph;
  }

  throw new Error('RootId is not in padIdArray, as expected');
};

export default getPadGraphByRootId;
