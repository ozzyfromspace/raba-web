// import styles from './GameProvider.module.scss';

import { createContext, useContext, useEffect, useReducer } from 'react';
import gameReducer from '../../reducers/gameReducer';
import { PlayOperation } from '../../utils/PlayState';
import { GameProviderProps } from '../../utils/props';
import {
  GameActionTypeName,
  GameProviderValue,
  GameStatus,
  Player
} from '../../utils/types';
import initGame from './utils/initGame';

const initGameState = initGame();

const gameProviderValue: GameProviderValue = {
  game: initGameState,
  dispatch: () => null,
};

const GameProviderContext = createContext(gameProviderValue);

const GameProvider = (props: GameProviderProps) => {
  const { children } = props;

  const [game, dispatch] = useReducer(gameReducer, initGameState);

  useEffect(() => {
    if (game.cows.safeCows[Player.ONE] < 12) {
      console.log('trying...', game.cows.safeCows);
      
      const shouldProceedToNextPlayer =
        game.playState.done === true &&
        game.playState.__typename !== PlayOperation.INITIAL_STATE &&
        game.gameStatus === GameStatus.ONGOING;

      if (shouldProceedToNextPlayer) {
        console.log('changed!');
        dispatch({
          __typename: GameActionTypeName.GAME_ACTION,
          type: 'NEXT_PLAYER',
          payload: null,
        });
      }
    }
  }, [game]);

  const providerValue: GameProviderValue = {
    dispatch,
    game,
  };

  return (
    <GameProviderContext.Provider value={providerValue}>
      {children}
    </GameProviderContext.Provider>
  );
};

export const useGame = () => useContext(GameProviderContext);

export default GameProvider;
