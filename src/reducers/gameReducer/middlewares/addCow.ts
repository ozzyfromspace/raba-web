import { GameStateMachine } from '../../../utils/operationalStateMachine';
import {
  AddCow,
  Cows,
  CowTypeName,
  FreeCow,
  Game,
  NumberSafeCows,
  Pad,
  Pads,
  Player,
  PlayerCows,
  SafeCows
} from '../../../utils/types';

const addCow: AddCow = (game, payload) => {
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
  const modifiedPad: Pad = {
    ...game.pads[padId],
    visitingCowId: addedCow.cowId,
  };
  const newPads: Pads = { ...game.pads, [padId]: modifiedPad };
  const newNumberSafeCows: NumberSafeCows = (game.cows.safeCows[
    game.currentPlayer
  ] - 1) as NumberSafeCows;
  const newSafeCows: SafeCows = {
    ...game.cows.safeCows,
    [game.currentPlayer]: newNumberSafeCows,
  };
  const newPlayerCows: PlayerCows = {
    ...game.cows[game.currentPlayer],
    [addedCow.cowId]: addedCow,
  };
  const newCows: Cows = {
    ...game.cows,
    safeCows: newSafeCows,
    [game.currentPlayer]: newPlayerCows,
  };

  // make end a boolean depending on LINE once you've written that code
  const newActionState: GameStateMachine = {
    ...game.actionState,
    // __typename: GameState.ADD_COW,
    // end: true,
    // prevState: [GameState.INITIAL_STATE],
    // SELECT_COW: {
    //   done: false,
    //   SELECT_PAD: {
    //     done: false,
    //     SELECT_COW: {
    //       done: false,
    //     },
    //   },
    // },
    // SELECT_PAD: {
    //   done: true,
    //   SELECT_COW: {
    //     done: false,
    //   },
    // },
  };

  const errors = {
    pads: [],
    cows: [],
  };

  const newGame: Game = {
    ...game,
    pads: newPads,
    cows: newCows,
    errors,
    currentPlayer: game.currentPlayer === Player.ONE ? Player.TWO : Player.ONE,
    actionState: newActionState,
  };

  return newGame;
};

const getSafeCow = (playerCows: PlayerCows) => {
  const cows = Object.values(playerCows);

  for (const cow of cows) {
    if (cow.__typename === CowTypeName.SAFE_COW) return cow;
  }

  throw new Error('No Safe Cows to play. Check your logic, hombre.');
};

export default addCow;
