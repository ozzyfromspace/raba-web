import { Styles } from './coreTypes';
import { Cow } from './cowTypes';
import { Game } from './gameTypes';
import { Pad } from './padTypes';
import { Typename } from './typenames';

export type CowProps = Cow;

export interface SVGParentProps {
  children: React.ReactNode;
}

export interface PadProps extends Pad {
  isGlowing: boolean;
}

export interface PadPropsDataDefaults {
  __typename: Typename.PAD;
  error: boolean;
  radius: number;
  fill: string;
  stroke: string;
  strokeOpacity: number;
  visitingCowId: null;
  selected: boolean;
  isGlowing: boolean;
}

export interface SafeCowDefaults {
  __typename: Typename.SAFE_COW;
  radius: number;
  fill: string;
  stroke: string;
  strokeOpacity: number;
}

export interface GameProviderProps {
  children: React.ReactNode;
}

export interface LineProps {
  game: Game;
  styles: Styles;
}