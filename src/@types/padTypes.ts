import { Circle, ResourceId } from "./coreTypes";
import { CowId } from "./cowTypes";
import { PadGraphArray } from "./padsGraphArray";
import { Typename } from "./typenames";

export enum PadId {
  PAD_00 = 'PAD_00',
  PAD_30 = 'PAD_30',
  PAD_60 = 'PAD_60',
  PAD_11 = 'PAD_11',
  PAD_31 = 'PAD_31',
  PAD_51 = 'PAD_51',
  PAD_22 = 'PAD_22',
  PAD_32 = 'PAD_32',
  PAD_42 = 'PAD_42',
  PAD_03 = 'PAD_03',
  PAD_13 = 'PAD_13',
  PAD_23 = 'PAD_23',
  PAD_43 = 'PAD_43',
  PAD_53 = 'PAD_53',
  PAD_63 = 'PAD_63',
  PAD_24 = 'PAD_24',
  PAD_34 = 'PAD_34',
  PAD_44 = 'PAD_44',
  PAD_15 = 'PAD_15',
  PAD_35 = 'PAD_35',
  PAD_55 = 'PAD_55',
  PAD_06 = 'PAD_06',
  PAD_36 = 'PAD_36',
  PAD_66 = 'PAD_66',
}

export interface Pad extends Circle {
  __typename: Typename.PAD;
  padId: PadId;
  centerX: number;
  centerY: number;
  radius: number;
  error: boolean;
  selected: boolean;
  visitingCowId: null | CowId;
}

export type Pads = {
  __typename: Typename.PADS;
  padGraphs: PadGraphArray;
} & {
  [Property in PadId]: Pad;
};

export type PadIdUnion = ResourceId<Typename.PAD>;
