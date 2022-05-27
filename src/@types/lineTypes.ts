import { CowId } from "./cowTypes";

export enum VerticalLineId {
  VERTICAL_LINE_0 = 'VERTICAL_LINE_00',
  VERTICAL_LINE_1 = 'VERTICAL_LINE_11',
  VERTICAL_LINE_2 = 'VERTICAL_LINE_22',
  VERTICAL_LINE_4 = 'VERTICAL_LINE_42',
  VERTICAL_LINE_5 = 'VERTICAL_LINE_51',
  VERTICAL_LINE_6 = 'VERTICAL_LINE_60',
  VERTICAL_LINE_30 = 'VERTICAL_LINE_30',
  VERTICAL_LINE_34 = 'VERTICAL_LINE_34',
}

export enum HorizontalLineId {
  HORIZONTAL_LINE_0 = 'HORIZONTAL_LINE_00',
  HORIZONTAL_LINE_1 = 'HORIZONTAL_LINE_11',
  HORIZONTAL_LINE_2 = 'HORIZONTAL_LINE_22',
  HORIZONTAL_LINE_4 = 'HORIZONTAL_LINE_24',
  HORIZONTAL_LINE_5 = 'HORIZONTAL_LINE_15',
  HORIZONTAL_LINE_6 = 'HORIZONTAL_LINE_60',
  HORIZONTAL_LINE_03 = 'HORIZONTAL_LINE_03',
  HORIZONTAL_LINE_43 = 'HORIZONTAL_LINE_43',
}

export enum DiagonalLineId {
  DIAGONAL_LINE_00 = 'DIAGONAL_LINE_00',
  DIAGONAL_LINE_60 = 'DIAGONAL_LINE_60',
  DIAGONAL_LINE_66 = 'DIAGONAL_LINE_66',
  DIAGONAL_LINE_06 = 'DIAGONAL_LINE_06',
}

export enum LineDirection {
  VERTICAL = 'VERTICAL',
  DIAGONAL = 'DIAGONAL',
  HORIZONTAL = 'HORIZONTAL',
}

export type LineId = DiagonalLineId | VerticalLineId | HorizontalLineId;

export type LineDescription<T extends boolean = true> =
  | {
      lineDirection: LineDirection.VERTICAL;
      baseId: T extends true ? VerticalLineId : null;
    }
  | {
      lineDirection: LineDirection.HORIZONTAL;
      baseId: T extends true ? HorizontalLineId : null;
    }
  | {
      lineDirection: LineDirection.DIAGONAL;
      baseId: T extends true ? DiagonalLineId : null;
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