import { PadId } from './types';

const padGraphArray = [
  { root: PadId.PAD_00, children: [PadId.PAD_03, PadId.PAD_30, PadId.PAD_11] },
  { root: PadId.PAD_30, children: [PadId.PAD_00, PadId.PAD_66, PadId.PAD_31] },
  { root: PadId.PAD_60, children: [PadId.PAD_30, PadId.PAD_51, PadId.PAD_63] },

  {
    root: PadId.PAD_11,
    children: [PadId.PAD_00, PadId.PAD_13, PadId.PAD_31, PadId.PAD_22],
  },
  {
    root: PadId.PAD_31,
    children: [PadId.PAD_11, PadId.PAD_51, PadId.PAD_32, PadId.PAD_30],
  },
  {
    root: PadId.PAD_51,
    children: [PadId.PAD_31, PadId.PAD_53, PadId.PAD_42, PadId.PAD_60],
  },

  { root: PadId.PAD_22, children: [PadId.PAD_11, PadId.PAD_23, PadId.PAD_32] },
  { root: PadId.PAD_32, children: [PadId.PAD_22, PadId.PAD_31, PadId.PAD_42] },
  { root: PadId.PAD_42, children: [PadId.PAD_32, PadId.PAD_43, PadId.PAD_51] },

  { root: PadId.PAD_03, children: [PadId.PAD_00, PadId.PAD_06, PadId.PAD_13] },
  {
    root: PadId.PAD_13,
    children: [PadId.PAD_03, PadId.PAD_23, PadId.PAD_11, PadId.PAD_15],
  },
  { root: PadId.PAD_23, children: [PadId.PAD_13, PadId.PAD_22, PadId.PAD_24] },

  { root: PadId.PAD_43, children: [PadId.PAD_42, PadId.PAD_44, PadId.PAD_53] },
  {
    root: PadId.PAD_53,
    children: [PadId.PAD_43, PadId.PAD_63, PadId.PAD_55, PadId.PAD_51],
  },
  { root: PadId.PAD_63, children: [PadId.PAD_53, PadId.PAD_60, PadId.PAD_66] },

  { root: PadId.PAD_24, children: [PadId.PAD_23, PadId.PAD_15, PadId.PAD_34] },
  { root: PadId.PAD_34, children: [PadId.PAD_24, PadId.PAD_44, PadId.PAD_35] },
  { root: PadId.PAD_44, children: [PadId.PAD_34, PadId.PAD_43, PadId.PAD_55] },

  {
    root: PadId.PAD_15,
    children: [PadId.PAD_06, PadId.PAD_24, PadId.PAD_13, PadId.PAD_35],
  },
  {
    root: PadId.PAD_35,
    children: [PadId.PAD_15, PadId.PAD_55, PadId.PAD_36, PadId.PAD_34],
  },
  {
    root: PadId.PAD_55,
    children: [PadId.PAD_44, PadId.PAD_35, PadId.PAD_53, PadId.PAD_66],
  },

  { root: PadId.PAD_06, children: [PadId.PAD_03, PadId.PAD_36, PadId.PAD_15] },
  { root: PadId.PAD_36, children: [PadId.PAD_06, PadId.PAD_35, PadId.PAD_66] },
  { root: PadId.PAD_66, children: [PadId.PAD_36, PadId.PAD_63, PadId.PAD_55] },
] as const;

export default padGraphArray;
export type PadGraphArray = typeof padGraphArray;
