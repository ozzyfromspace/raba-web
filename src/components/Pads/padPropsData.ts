import { PadProps, PadPropsDataDefaults } from "../../utils/props";
import { PadId, ResourceTypeName } from "../../utils/types";


const defaultSettings: PadPropsDataDefaults = {
  __typename: ResourceTypeName.PAD,
  error: false,
  radius: 24,
  fill: '#ffffff',
  stroke: '#808080',
  strokeOpacity: 0.5,
  visitingCowId: null,
  selected: false,
  isGlowing: false,
};

export const padPropsData: PadProps[] = [
  {
    ...defaultSettings,
    centerX: 531.6,
    centerY: 69.05,
    padId: PadId.PAD_66,
  },
  {
    ...defaultSettings,
    centerX: 531.6,
    centerY: 300,
    padId: PadId.PAD_63,
  },
  {
    ...defaultSettings,
    centerX: 531.6,
    centerY: 531.3,
    padId: PadId.PAD_60,
  },
  {
    ...defaultSettings,
    centerX: 453.95,
    centerY: 146,
    padId: PadId.PAD_55,
  },
  {
    ...defaultSettings,
    centerX: 454,
    centerY: 300.02,
    padId: PadId.PAD_53,
  },
  {
    ...defaultSettings,
    centerX: 454,
    centerY: 453.95,
    padId: PadId.PAD_51,
  },
  {
    ...defaultSettings,
    centerX: 377,
    centerY: 223,
    padId: PadId.PAD_44,
  },
  {
    ...defaultSettings,
    centerX: 377,
    centerY: 300.276,
    padId: PadId.PAD_43,
  },
  {
    ...defaultSettings,
    centerX: 377,
    centerY: 377.276,
    padId: PadId.PAD_42,
  },
  {
    ...defaultSettings,
    centerX: 299.4,
    centerY: 69.05,
    padId: PadId.PAD_36,
  },
  {
    ...defaultSettings,
    centerX: 300.05,
    centerY: 145.95,
    padId: PadId.PAD_35,
  },
  {
    ...defaultSettings,
    centerX: 300,
    centerY: 223,
    padId: PadId.PAD_34,
  },
  {
    ...defaultSettings,
    centerX: 300,
    centerY: 377,
    padId: PadId.PAD_32,
  },
  {
    ...defaultSettings,
    centerX: 299.9,
    centerY: 454,
    padId: PadId.PAD_31,
  },
  {
    ...defaultSettings,
    centerX: 300,
    centerY: 531.6,
    padId: PadId.PAD_30,
  },
  {
    ...defaultSettings,
    centerX: 223,
    centerY: 223,
    padId: PadId.PAD_24,
  },
  {
    ...defaultSettings,
    centerX: 223,
    centerY: 300.276,
    padId: PadId.PAD_23,
  },
  {
    ...defaultSettings,
    centerX: 223,
    centerY: 377,
    padId: PadId.PAD_22,
  },
  {
    ...defaultSettings,
    centerX: 146,
    centerY: 146,
    padId: PadId.PAD_15,
  },
  {
    ...defaultSettings,
    centerX: 145.8,
    centerY: 300.5,
    padId: PadId.PAD_13,
  },
  {
    ...defaultSettings,
    centerX: 146,
    centerY: 454,
    padId: PadId.PAD_11,
  },
  {
    ...defaultSettings,
    centerX: 68.05,
    centerY: 69.05,
    padId: PadId.PAD_06,
  },
  {
    ...defaultSettings,
    centerX: 68.18,
    centerY: 300.4,
    padId: PadId.PAD_03,
  },
  {
    ...defaultSettings,
    centerX: 68.18,
    centerY: 531.6,
    padId: PadId.PAD_00,
  },
];
