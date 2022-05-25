import { PlayOperation, PlayState, PlayStateFn } from './PlayState';

const initPlayState: PlayStateFn = () => {
  const stateMachine: PlayState = {
    __typeName: PlayOperation.INITIAL_STATE,
    done: false,
    lastOperation: null,
    nextOperation: PlayOperation.ADD_COW,
  };

  return stateMachine;
};

export default initPlayState;
