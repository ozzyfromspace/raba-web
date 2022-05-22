import { Cow, CowTypeName, Pad, ResourceTypeName } from './types';

export type CowProps = Cow;

export interface SVGParentProps {
  children: React.ReactNode;
}

export interface PadProps extends Pad {}

export interface PadPropsDataDefaults {
  __typename: ResourceTypeName.PAD;
  error: boolean;
  radius: number;
  fill: string;
  stroke: string;
  strokeOpacity: number;
  visitingCowId: null;
  selected: boolean;
}

export interface SafeCowDefaults {
  __typename: CowTypeName.SAFE_COW;
  radius: number;
  fill: string;
  stroke: string;
  strokeOpacity: number;
}

export interface GameProviderProps {
  children: React.ReactNode;
}
