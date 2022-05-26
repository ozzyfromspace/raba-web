import { PlayOperation, PlayState, PlayStateFn } from './PlayState';

const initPlayState: PlayStateFn<boolean> = (done) => {
  if (done) {
    const initialOperation: PlayState<typeof done> = {
      __typename: PlayOperation.INITIAL_STATE,
      done,
      lastOperation: null,
      nextOperation: null,
    };

    return initialOperation;
  }

  const initialOperation: PlayState = {
    __typename: PlayOperation.INITIAL_STATE,
    done: false,
    lastOperation: null,
    nextOperation: PlayOperation.ADD_OR_MOVE_COW,
  };

  return initialOperation;
};

export default initPlayState;
