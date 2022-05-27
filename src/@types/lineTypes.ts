import { CowId } from "./cowTypes";

export enum VerticalLineBaseId {
  _0 = '_00',
  _1 = '_11',
  _2 = '_22',
  _4 = '_42',
  _5 = '_51',
  _6 = '_60',
  _30 = '_30',
  _34 = '_34',
}

export enum HorizontalLineBaseId {
  _0 = '_00',
  _1 = '_11',
  _2 = '_22',
  _4 = '_24',
  _5 = '_15',
  _6 = '_60',
  _03 = '_03',
  _43 = '_43',
}

export enum DiagonalLineBaseId {
  _00 = '_00',
  _60 = '_60',
  _66 = '_66',
  _06 = '_06',
}

export enum LineDirection {
  VERTICAL = 'VERTICAL',
  DIAGONAL = 'DIAGONAL',
  HORIZONTAL = 'HORIZONTAL',
}

export type LineDescription<T extends boolean = true> =
  | {
      lineDirection: LineDirection.VERTICAL;
      baseId: T extends true ? VerticalLineBaseId : null;
    }
  | {
      lineDirection: LineDirection.HORIZONTAL;
      baseId: T extends true ? HorizontalLineBaseId : null;
    }
  | {
      lineDirection: LineDirection.DIAGONAL;
      baseId: T extends true ? DiagonalLineBaseId : null;
    };

export type IsInLineReturnType =
  | {
      result: false;
      lineDescription: LineDescription<false>;
      matches: [];
    }
  | {
      result: true;
      lineDescription: LineDescription<true>;
      matches: CowId[];
    };