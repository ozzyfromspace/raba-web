import initErrors from '../../../reducers/gameReducer/utils/initErrors';
import initPlayState from '../../../utils/initPlayState';
import {
  Game,
  GameStatus,
  InitGame,
  Player,
  ResourceTypeName,
} from '../../../utils/types';
import initCows from '../../Cows/utils/initCows';
import { padPropsData } from '../../Pads/padPropsData';
import initPadsState from '../../Pads/utils/initPads';
import initGlowing from './initGlowing';

const initGame: InitGame = () => {
  const initGameState: Game = {
    __typename: ResourceTypeName.GAME,
    pads: initPadsState(padPropsData),
    errors: initErrors(),
    playState: initPlayState(),
    currentPlayer: Player.ONE,
    gameStatus: GameStatus.ONGOING,
    cows: initCows(),
    glowing: initGlowing(),
  };

  return initGameState;
};

export default initGame;
