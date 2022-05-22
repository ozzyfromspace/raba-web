import {
  GameState,
  GameStateMachine,
  GameStateMachineFn,
} from './operationalStateMachine';

const initActionState: GameStateMachineFn = () => {
  const stateMachine: GameStateMachine = {
    end: false,
    __typename: GameState.INITIAL_STATE,
    prevState: [],
    SELECT_COW: {
      done: false,
      SELECT_PAD: {
        done: false,
        SELECT_COW: {
          done: false,
        },
      },
    },
    SELECT_PAD: {
      done: false,
      SELECT_COW: {
        done: false,
      },
    },
  };

  return stateMachine;
};

export default initActionState;
