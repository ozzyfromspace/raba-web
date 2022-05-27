
import { Cows, FreeCow, NumberSafeCows, PlayerCows, SafeCows } from '../../../@types/cowTypes';
import { GameErrors } from '../../../@types/gameTypes';
import { NextData_AddCowFn } from '../../../@types/nextDataTypes';
import { Pad, Pads } from '../../../@types/padTypes';
import { PlayOperation, PlayState } from '../../../@types/PlayState';
import { Typename } from '../../../@types/typenames';
import computeNextGlowingState from './computeNextGlowingSet';
import getNextGameStatus from './getNextGameStatus';
import getSafeCow from './getSafeCow';

const computeNextData_AddCow: NextData_AddCowFn = (game, selectedPadId) => {
  const foundCow = getSafeCow(game.cows[game.currentPlayer]);
  const addedCow: FreeCow = {
    ...foundCow,
    padId: selectedPadId,
    __typename: Typename.FREE_COW,
    error: false,
    selected: false,
    centerX: game.pads[selectedPadId].centerX,
    centerY: game.pads[selectedPadId].centerY,
  };
  const cowOwner = addedCow.owner;

  const modifiedPad: Pad = {
    ...game.pads[selectedPadId],
    visitingCowId: addedCow.cowId,
  };
  const nextPads: Pads = { ...game.pads, [selectedPadId]: modifiedPad };
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

  const nextPlayState: PlayState = !nextGlowing.pads.has(selectedPadId)
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
