import { GamePhase } from './gameTypes';

export enum PlayOperation {
  INITIAL_STATE = 'INITIAL_STATE_OPERATION',
  ADD_COW = 'ADD_COW_OPERATION',
  MOVE_COW = 'MOVE_COW_OPERATION',
  ADD_CAPTURE_COW = 'ADD_CAPTURE_COW_OPERATION',
  MOVE_CAPTURE_COW = 'MOVE_CAPTURE_COW_OPERATION',
}

export type InitialOperation<Done extends boolean = false> = Done extends true
  ? {
      done: true;
      __typename: PlayOperation.INITIAL_STATE;
      lastOperation: null;
      nextOperation: null;
    }
  : {
      done: false;
      __typename: PlayOperation.INITIAL_STATE;
      lastOperation: null;
      nextOperation: PlayOperation.ADD_COW | PlayOperation.MOVE_COW;
    };

export type AddCowOperation =
  | {
      done: true;
      __typename: PlayOperation.ADD_COW;
      lastOperation: PlayOperation.INITIAL_STATE;
      nextOperation: null;
    }
  | {
      done: false;
      __typename: PlayOperation.ADD_COW;
      lastOperation: PlayOperation.INITIAL_STATE;
      nextOperation: PlayOperation.ADD_CAPTURE_COW;
    };

export type AddCaptureCowOperation = {
  done: true;
  __typename: PlayOperation.ADD_CAPTURE_COW;
  lastOperation: PlayOperation.ADD_COW;
  nextOperation: null;
};

export type MoveCowOperation =
  | {
      done: true;
      __typename: PlayOperation.MOVE_COW;
      lastOperation: PlayOperation.INITIAL_STATE;
      nextOperation: null;
    }
  | {
      done: false;
      __typename: PlayOperation.MOVE_COW;
      lastOperation: PlayOperation.INITIAL_STATE;
      nextOperation: PlayOperation.MOVE_CAPTURE_COW;
    };

export type PlayState<Done extends boolean = false> =
  | InitialOperation<Done>
  | AddCowOperation
  | AddCaptureCowOperation
  | MoveCowOperation;

export type PlayStateFn<Done extends boolean = false> = (
  done: boolean,
  phase: GamePhase
) => PlayState<Done>;
