import { BaseId, CanSelectHelpers, Player } from "./coreTypes";
import { Cow, CowId, Cows, FreeCow } from "./cowTypes";
import { Game, GameAction, GameErrors, GameStatus } from "./gameTypes";
import { Glowing } from "./glowingTypes";
import { IsInLineReturnType, LineDescription } from "./lineTypes";
import { PadGraph } from "./padGraphTypes";
import { Pad, PadId, Pads } from "./padTypes";
import { PadProps } from "./props";

export type AssertPadsObject = (
  padsPartialObject: PartialPads
) => asserts padsPartialObject is Pads;

export type CreateInitPadsObject = (
  finObj: PartialPads,
  pad: Pad
) => PartialPads;

export type PartialPads = Partial<Pads>;
export type InitPads = (padPropsData: PadProps[]) => Pads;
export type InitPartialPads = (padPropsData: PadProps[]) => PartialPads;
export type InitGame = () => Game;
export type InitErrors = () => GameErrors;
export type InitCows = () => Cows;
export type GetPlayer = (cowId: CowId) => Player;
export type GameReducer = (game: Game, action: GameAction) => Game;
export type CanSelectHelpersFn = (cowId: CowId, game: Game) => CanSelectHelpers;

export type IsCowTrapped = (
  cowId: CowId,
  padGraph: PadGraph,
  pads: Pads
) => boolean;

export type IsCowProtected = (
  cowId: CowId,
  owner: Player,
  game: Game
) => boolean;

export type GetNextGameStatus = (
  nextCows: Cows,
  nextGlowing: Glowing
) => GameStatus;

export type GetLineMatchDataFn = (
  refArray: BaseId[],
  freeCows: Cow[],
  nextPads: Pads,
  lineDescription: LineDescription<true>
) => IsInLineReturnType;

export type IsInLine = (
  cowOwner: Player,
  cowId: CowId,
  nextCows: Cows,
  nextPads: Pads
) => IsInLineReturnType;

export type AddCow = (game: Game, selectedPadId: PadId) => Game;
export type AddCaptureCow = (game: Game, selectedCowId: CowId) => Game;

export type GoToNextPlayer = (game: Game) => Game;

export type AssertSelectedCowIsFree = (
  selectedCow: Cow
) => asserts selectedCow is FreeCow;

export type CanAddCow = (padId: PadId, game: Game) => boolean;

export type CanAddCaptureCow = (cowId: CowId, game: Game) => boolean;