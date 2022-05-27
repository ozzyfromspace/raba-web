import { CapturedCow, Cows } from '../../../@types/cowTypes';
import { AssertSelectedCowIsFree } from '../../../@types/functionTypes';
import { GameErrors } from '../../../@types/gameTypes';
import { NextData_AddCaptureCowFn } from '../../../@types/nextDataTypes';
import { Pad, Pads } from '../../../@types/padTypes';
import { PlayOperation, PlayState } from '../../../@types/PlayState';
import { Typename } from '../../../@types/typenames';
import { getPlayer } from '../../../components/Cows/utils/initCows';
import computeNextGlowingState from './computeNextGlowingSet';

const computeNextData_AddCaptureCow: NextData_AddCaptureCowFn = (
  game,
  selectedCowId
) => {
  const cowOwner = getPlayer(selectedCowId);
  const selectedCow = game.cows[cowOwner][selectedCowId];

  assertSelectedCowIsFree(selectedCow);

  const capturedCow: CapturedCow = {
    __typename: Typename.CAPTURED_COW,
    cowId: selectedCowId,
    fill: selectedCow.fill,
    owner: selectedCow.owner,
    radius: selectedCow.radius,
    centerX: 0,
    centerY: 0,
    stroke: selectedCow.stroke,
    strokeOpacity: selectedCow.strokeOpacity,
  };

  const nextCows: Cows = {
    ...game.cows,
    [cowOwner]: { ...game.cows[cowOwner], [selectedCowId]: capturedCow },
  };

  const nextPad: Pad = { ...game.pads[selectedCow.padId], visitingCowId: null };

  const nextPads: Pads = { ...game.pads, [selectedCow.padId]: nextPad };

  const nextPlayState: PlayState<true> = {
    __typename: PlayOperation.ADD_CAPTURE_COW,
    done: true,
    lastOperation: PlayOperation.ADD_COW,
    nextOperation: null,
  };

  const nextGlowing = computeNextGlowingState(nextCows, nextPads);

  const nextErrors: GameErrors = {
    pads: [],
    cows: [],
  };

  return {
    cowOwner,
    nextCows,
    nextErrors,
    nextGlowing,
    nextPads,
    nextPlayState,
  };
};

const assertSelectedCowIsFree: AssertSelectedCowIsFree = (selectedCow) => {
  if (selectedCow.__typename !== Typename.FREE_COW) {
    const msg = 'The selected cow should have been FREE';
    throw new Error(msg);
  }
};

export default computeNextData_AddCaptureCow;
