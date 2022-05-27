import { Player } from '../../../@types/coreTypes';
import { GoToNextPlayer } from '../../../@types/functionTypes';
import { Game, GamePhase, GameStatus } from '../../../@types/gameTypes';
import { PlayOperation } from '../../../@types/PlayState';
import initPlayState from '../../../utils/initPlayState';
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

    const nextPlayState = initPlayState(isGameDone, game.gamePhase);
    const nextPlayer =
      game.currentPlayer === Player.ONE ? Player.TWO : Player.ONE;

    const isAddingPhase = game.cows.safeCows[Player.ONE] > 0 || game.cows.safeCows[Player.TWO] > 0;

    const nextGame: Game = {
      ...game,
      gamePhase: isAddingPhase ? GamePhase.ADDING : GamePhase.MOVING,
      playState: nextPlayState,
      currentPlayer: nextPlayer,
      gameStatus: nextGameStatus,
    };

    return nextGame;
  }

  return game;
};

export default goToNextPlayer;
