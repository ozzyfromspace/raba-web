import { Circle, Player, ResourceId } from "./coreTypes";
import { PadId } from "./padTypes";
import { Typename } from "./typenames";

export enum CowId {
  COW_00 = 'COW_00',
  COW_30 = 'COW_30',
  COW_60 = 'COW_60',
  COW_11 = 'COW_11',
  COW_31 = 'COW_31',
  COW_51 = 'COW_51',
  COW_22 = 'COW_22',
  COW_32 = 'COW_32',
  COW_42 = 'COW_42',
  COW_03 = 'COW_03',
  COW_13 = 'COW_13',
  COW_23 = 'COW_23',
  COW_43 = 'COW_43',
  COW_53 = 'COW_53',
  COW_63 = 'COW_63',
  COW_24 = 'COW_24',
  COW_34 = 'COW_34',
  COW_44 = 'COW_44',
  COW_15 = 'COW_15',
  COW_35 = 'COW_35',
  COW_55 = 'COW_55',
  COW_06 = 'COW_06',
  COW_36 = 'COW_36',
  COW_66 = 'COW_66',
}

export type NumberSafeCows =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12;

interface BaseCow extends Circle {
  __typename: Typename;
  cowId: CowId;
  owner: Player;
}

export interface SafeCow extends BaseCow {
  __typename: Typename.SAFE_COW;
  centerX: number;
  centerY: number;
}

export interface FreeCow extends BaseCow {
  __typename: Typename.FREE_COW;
  padId: PadId;
  selected: boolean;
  error: boolean;
  centerX: number;
  centerY: number;
}

export interface CapturedCow extends BaseCow {
  __typename: Typename.CAPTURED_COW;
  centerX: number;
  centerY: number;
}

export type CowIdUnion = ResourceId<Typename.COW>;

export type Cow = SafeCow | FreeCow | CapturedCow;

export type PlayerCows = Record<CowId, Cow>;

export interface SafeCows {
  [Player.ONE]: NumberSafeCows;
  [Player.TWO]: NumberSafeCows;
}

export type Cows = {
  __typename: Typename.COWS;
  safeCows: SafeCows;
  [Player.ONE]: PlayerCows;
  [Player.TWO]: PlayerCows;
};

export interface PlayerCowsObject {
  [Player.ONE]: PlayerCows;
  [Player.TWO]: PlayerCows;
}