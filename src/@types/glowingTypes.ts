import { Cows } from './cowTypes';
import {
  DiagonalLineBaseId,
  HorizontalLineBaseId,
  LineDirection,
  VerticalLineBaseId,
} from './lineTypes';
import { PadId, Pads } from './padTypes';

export interface GlowingLines {
  [LineDirection.HORIZONTAL]: Set<HorizontalLineBaseId>;
  [LineDirection.VERTICAL]: Set<VerticalLineBaseId>;
  [LineDirection.DIAGONAL]: Set<DiagonalLineBaseId>;
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
