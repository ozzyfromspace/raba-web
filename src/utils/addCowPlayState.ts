import { PlayOperation, PlayState, PlayStateFn } from './PlayState';

const addCowPlayState: PlayStateFn<boolean> = (done) => {
  if (done) {
    const addCowOperation: PlayState<typeof done> = {
      __typename: PlayOperation.ADD_COW,
      done,
      lastOperation: PlayOperation.INITIAL_STATE,
      nextOperation: null,
    };

    return addCowOperation;
  }

  const addCowOperation: PlayState = {
    __typename: PlayOperation.ADD_COW,
    done,
    lastOperation: PlayOperation.INITIAL_STATE,
    nextOperation: PlayOperation.ADD_CAPTURE_COW,
  };

  return addCowOperation;
};

export default addCowPlayState;
