import { CowId } from './cowTypes';
import { PadId } from './padTypes';
import { Typename } from './typenames';

export enum BaseId {
  _00 = '_00',
  _30 = '_30',
  _60 = '_60',
  _11 = '_11',
  _31 = '_31',
  _51 = '_51',
  _22 = '_22',
  _32 = '_32',
  _42 = '_42',
  _03 = '_03',
  _13 = '_13',
  _23 = '_23',
  _43 = '_43',
  _53 = '_53',
  _63 = '_63',
  _24 = '_24',
  _34 = '_34',
  _44 = '_44',
  _15 = '_15',
  _35 = '_35',
  _55 = '_55',
  _06 = '_06',
  _36 = '_36',
  _66 = '_66',
}

type BaseIdUnion = keyof typeof BaseId;
export type ResourceId<S extends Typename> = `${S}${BaseIdUnion}`;

export type SelectableId = PadId | CowId;

export enum Player {
  ONE = 'PLAYER_ONE',
  TWO = 'PLAYER_TWO',
}

export enum PlayerColor {
  ONE = '#fa66ab',
  TWO = '#4299df',
}

export enum PlayerColorOnPad {
  ONE = '#ff207b',
  TWO = '#207ede',
}

export interface Circle {
  radius: number;
  fill: string;
  stroke: string;
  strokeOpacity: number;
}

export type BoardDigits = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface CanSelectHelpers {
  canMoveCow: boolean;
  canAddCaptureCow: boolean;
  canMoveCaptureCow: boolean;
}

export interface Styles {
  readonly [key: string]: string;
}
