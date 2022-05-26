import { PlayOperation, PlayState } from '../../../utils/PlayState';
import {
  Cows,
  CowTypeName,
  FreeCow,
  GameErrors,
  NextData_AddCowFn,
  NumberSafeCows,
  Pad,
  Pads,
  PlayerCows,
  SafeCows,
} from '../../../utils/types';
import computeNextGlowingState from './computeNextGlowingSet';
import getNextGameStatus from './getNextGameStatus';
import getSafeCow from './getSafeCow';

const computeNextData_AddCow: NextData_AddCowFn = (game, payload) => {
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

  const initialPlayState: PlayState<true> = {
    done: true,
    __typename: PlayOperation.ADD_COW,
    lastOperation: PlayOperation.INITIAL_STATE,
    nextOperation: null,
  };

  const addCapturePlayState: PlayState<false> = {
    done: false,
    __typename: PlayOperation.ADD_COW,
    lastOperation: PlayOperation.INITIAL_STATE,
    nextOperation: PlayOperation.ADD_CAPTURE_COW,
  };

  const nextPlayState: PlayState = !nextGlowing.pads.has(padId)
    ? initialPlayState
    : addCapturePlayState;

  const nextErrors: GameErrors = {
    pads: [],
    cows: [],
  };

  const nextGameStatus = getNextGameStatus(nextCows, nextGlowing);

  return {
    nextGlowing,
    cowOwner,
    nextPads,
    nextCows,
    nextPlayState,
    nextErrors,
    nextGameStatus,
  };
};

export default computeNextData_AddCow;
