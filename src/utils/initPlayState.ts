import { GamePhase } from '../@types/gameTypes';
import { PlayOperation, PlayState, PlayStateFn } from '../@types/PlayState';

const initPlayState: PlayStateFn<boolean> = (done, phase) => {
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
    nextOperation:
      phase === GamePhase.ADDING
        ? PlayOperation.ADD_COW
        : PlayOperation.MOVE_COW,
  };

  return initialOperation;
};

export default initPlayState;
