export enum PlayOperation {
  INITIAL_STATE = 'INITIAL_STATE_OPERATION',
  ADD_COW = 'ADD_COW_OPERATION',
  MOVE_COW = 'MOVE_COW_OPERATION',
  ADD_OR_MOVE_COW = 'ADD_OR_MOVE_COW',
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
      nextOperation: PlayOperation.ADD_OR_MOVE_COW;
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
  | MoveCowOperation;

export type PlayStateFn<Done extends boolean = false> = (
  done: boolean
) => PlayState<Done>;
