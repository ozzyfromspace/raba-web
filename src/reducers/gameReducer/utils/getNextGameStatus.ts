import { GameStatus, GetNextGameStatus, Player } from '../../../utils/types';
import freeCowFilter from './freeCowFilter';

const getNextGameStatus: GetNextGameStatus = (nextCows, nextGlowing) => {
  const freeCowsPlayerOne = Object.values(nextCows[Player.ONE]).filter(
    freeCowFilter
  );
  const freeCowsPlayerTwo = Object.values(nextCows[Player.TWO]).filter(
    freeCowFilter
  );
  const maxFreeCows =
    freeCowsPlayerOne.length + freeCowsPlayerTwo.length === 24;
  const isGameDrawn = maxFreeCows && !!!nextGlowing.pads.size;

  const noSafeCows =
    nextCows.safeCows[Player.ONE] === 0 && nextCows.safeCows[Player.TWO] === 0;

  const isWinnerPlayerOne = freeCowsPlayerTwo.length < 3 && noSafeCows;
  const isWinnerPlayerTwo = freeCowsPlayerOne.length < 3 && noSafeCows;

  const nextGameStatus = isWinnerPlayerOne
    ? GameStatus.VICTORY_P1
    : isWinnerPlayerTwo
    ? GameStatus.VICTORY_P2
    : isGameDrawn
    ? GameStatus.STALEMATE
    : GameStatus.ONGOING;

  return nextGameStatus;
};

export default getNextGameStatus;
