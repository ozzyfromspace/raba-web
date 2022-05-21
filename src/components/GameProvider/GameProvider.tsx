// import styles from './GameProvider.module.scss';

import { createContext, useContext } from 'react';
import { GameProviderProps } from '../../utils/props';
import { GameProviderValue } from '../../utils/types';
import initGame from './utils/initGame';

const gameProviderValue: GameProviderValue = {
  game: initGame(),
  dispatch: null,
};

const GameProviderContext = createContext(gameProviderValue);

const GameProvider = (props: GameProviderProps) => {
  const { children } = props;

  const providerValue: GameProviderValue = {
    dispatch: null,
    game: initGame(),
  };

  return (
    <GameProviderContext.Provider value={providerValue}>
      {children}
    </GameProviderContext.Provider>
  );
};

export const useGame = () => useContext(GameProviderContext);

export default GameProvider;
