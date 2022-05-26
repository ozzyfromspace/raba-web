import initPlayState from '../../../utils/initPlayState';
import { PlayOperation } from '../../../utils/PlayState';
import { Game, GameStatus, GoToNextPlayer, Player } from '../../../utils/types';
import getNextGameStatus from '../utils/getNextGameStatus';

const goToNextPlayer: GoToNextPlayer = (game) => {
  const isGameFinished = game.gameStatus !== GameStatus.ONGOING;

  if (isGameFinished) return game;

  const resetPlayState =
    game.playState.__typename !== PlayOperation.INITIAL_STATE &&
    game.playState.done;

  if (resetPlayState) {
    const nextGameStatus = getNextGameStatus(game.cows, game.glowing);

    const isGameDone = nextGameStatus !== GameStatus.ONGOING;

    const nextPlayState = initPlayState(isGameDone);
    const nextPlayer: Player =
      game.currentPlayer === Player.ONE ? Player.TWO : Player.ONE;

    const nextGame: Game = {
      ...game,
      playState: nextPlayState,
      currentPlayer: nextPlayer,
      gameStatus: nextGameStatus,
    };

    return nextGame;
  }

  return game;
};

export default goToNextPlayer;
