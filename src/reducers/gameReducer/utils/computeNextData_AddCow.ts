import { GameStateMachine } from '../../../utils/operationalStateMachine';
import {
  AddCowPayload,
  Cows,
  CowTypeName,
  FreeCow,
  Game,
  GameErrors,
  GameStatus, NextData_AddCow,
  NumberSafeCows,
  Pad,
  Pads,
  Player,
  PlayerCows,
  ResourceTypeName,
  SafeCows
} from '../../../utils/types';
import computeNextGlowingState from "./computeNextGlowingSet";
import getSafeCow from './getSafeCow';

const computeNextData_AddCow = (
  game: Game,
  payload: AddCowPayload
): NextData_AddCow => {
  const padId = payload.selectedPadId;
  const foundCow = getSafeCow(game.cows[game.currentPlayer]);
  const addedCow: FreeCow = {
    ...foundCow,
    padId,
    __typename: CowTypeName.FREE_COW,
    error: false,
    selected: false,
    centerX: game.pads[padId].centerX,
    centerY: game.pads[padId].centerY,
  };
  const cowOwner = addedCow.owner;

  const modifiedPad: Pad = {
    ...game.pads[padId],
    visitingCowId: addedCow.cowId,
  };
  const nextPads: Pads = { ...game.pads, [padId]: modifiedPad };
  const nextNumberSafeCows: NumberSafeCows = (game.cows.safeCows[
    game.currentPlayer
  ] - 1) as NumberSafeCows;
  const nextSafeCows: SafeCows = {
    ...game.cows.safeCows,
    [game.currentPlayer]: nextNumberSafeCows,
  };
  const nextPlayerCows: PlayerCows = {
    ...game.cows[game.currentPlayer],
    [addedCow.cowId]: addedCow,
  };
  const nextCows: Cows = {
    ...game.cows,
    safeCows: nextSafeCows,
    [game.currentPlayer]: nextPlayerCows,
  };



  const nextGlowing = computeNextGlowingState(nextCows, nextPads);

  // make end a boolean depending on LINE once you've written that code
  const nextActionState: GameStateMachine = {
    ...game.actionState,
    // __typename: GameState.ADD_COW,
    // end: true,
    // prevState: [GameState.INITIAL_STATE],
    // },
  };

  const nextPlayer: Player =
    game.currentPlayer === Player.ONE ? Player.TWO : Player.ONE;

  const nextErrors: GameErrors = {
    pads: [],
    cows: [],
  };

  const nextTypename = ResourceTypeName.GAME;

  const nextGameStatus = GameStatus.ONGOING;

  return {
    nextGlowing,
    cowOwner,
    nextPads,
    nextCows,
    nextActionState,
    nextErrors,
    nextPlayer,
    nextTypename,
    nextGameStatus
  };
};

export default computeNextData_AddCow;
