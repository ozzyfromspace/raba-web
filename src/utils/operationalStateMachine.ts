export enum GameState {
  INITIAL_STATE = 'INITIAL_STATE',
  ADD_COW = 'ADD_COW',
  MOVE_COW = 'MOVE_COW',
  MOVE_CAPTURE_COW = 'MOVE_CAPTURE_COW',
  ADD_CAPTURE_COW = 'ADD_CAPTURE_COW',
}

interface STATE_MACHINE_SCAFFOLD {
  end: boolean;
  __typename: GameState;
  prevState: GameState[];

  SELECT_COW: {
    done: boolean;
    SELECT_PAD: {
      done: boolean;
      SELECT_COW: {
        done: boolean;
      };
    };
  };

  SELECT_PAD: {
    done: boolean;
    SELECT_COW: {
      done: boolean;
    };
  };
}

export interface INITIAL_STATE extends STATE_MACHINE_SCAFFOLD {
  end: false;
  __typename: GameState.INITIAL_STATE;
  prevState: [];

  SELECT_COW: {
    done: false;
    SELECT_PAD: {
      done: false;
      SELECT_COW: {
        done: false;
      };
    };
  };

  SELECT_PAD: {
    done: false;
    SELECT_COW: {
      done: false;
    };
  };
}

export interface ADD_COW extends STATE_MACHINE_SCAFFOLD {
  end: boolean;
  __typename: GameState.ADD_COW;
  prevState: [GameState.INITIAL_STATE];

  SELECT_COW: {
    done: false;
    SELECT_PAD: {
      done: false;
      SELECT_COW: {
        done: false;
      };
    };
  };

  SELECT_PAD: {
    done: true;
    SELECT_COW: {
      done: false;
    };
  };
}

export interface MOVE_COW extends STATE_MACHINE_SCAFFOLD {
  end: boolean;
  __typename: GameState.MOVE_COW;
  prevState: [GameState.INITIAL_STATE];

  SELECT_COW: {
    done: true;
    SELECT_PAD: {
      done: true;
      SELECT_COW: {
        done: false;
      };
    };
  };

  SELECT_PAD: {
    done: false;
    SELECT_COW: {
      done: false;
    };
  };
}

export interface MOVE_CAPTURE_COW extends STATE_MACHINE_SCAFFOLD {
  end: true;
  __typename: GameState.MOVE_CAPTURE_COW;
  prevState: [GameState.MOVE_COW];

  SELECT_COW: {
    done: true;
    SELECT_PAD: {
      done: true;
      SELECT_COW: {
        done: true;
      };
    };
  };

  SELECT_PAD: {
    done: false;
    SELECT_COW: {
      done: false;
    };
  };
}

export interface ADD_CAPTURE_COW extends STATE_MACHINE_SCAFFOLD {
  end: true;
  __typename: GameState.ADD_CAPTURE_COW;
  prevState: [GameState.ADD_COW];

  SELECT_COW: {
    done: false;
    SELECT_PAD: {
      done: false;
      SELECT_COW: {
        done: false;
      };
    };
  };

  SELECT_PAD: {
    done: true;
    SELECT_COW: {
      done: true;
    };
  };
}

export type GameStateMachine =
  | INITIAL_STATE
  | ADD_COW
  | ADD_CAPTURE_COW
  | MOVE_COW
  | MOVE_CAPTURE_COW;

export type GameStateMachineFn = () => GameStateMachine;
