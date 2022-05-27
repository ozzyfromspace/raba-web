import { Cows } from './cowTypes';
import {
  DiagonalLineId,
  HorizontalLineId,
  LineDirection,
  VerticalLineId,
} from './lineTypes';
import { PadId, Pads } from './padTypes';

export interface GlowingLines {
  [LineDirection.HORIZONTAL]: Set<HorizontalLineId>;
  [LineDirection.VERTICAL]: Set<VerticalLineId>;
  [LineDirection.DIAGONAL]: Set<DiagonalLineId>;
}

export interface Glowing {
  pads: Set<PadId>;
  lines: GlowingLines;
}

export type InitGlowing = () => Glowing;

export type ComputeNextGlowingState = (
  nextCows: Cows,
  nextPads: Pads
) => Glowing;
