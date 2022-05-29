import { PadGraphArray } from './padsGraphArray';
import { PadId } from './padTypes';

export interface GraphSchema<T extends PadId> {
  root: T;
  children: readonly T[];
}

export type PadGraph = GraphSchema<PadId>;

export type GetPadGraphByRootId = (
  rootId: PadId,
  padGraphs: PadGraphArray
) => PadGraph;
