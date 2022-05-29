import { Player } from '../../../@types/coreTypes';
import { InitGame } from '../../../@types/functionTypes';
import { Game, GamePhase, GameStatus } from '../../../@types/gameTypes';
import { Typename } from '../../../@types/typenames';
import initErrors from '../../../reducers/gameReducer/utils/initErrors';
import initPlayState from '../../../utils/initPlayState';
import initCows from '../../Cows/utils/initCows';
import { padPropsData } from '../../Pads/padPropsData';
import initPadsState from '../../Pads/utils/initPads';
import initGlowing from './initGlowing';


const initGame: InitGame = () => {
  const initGameState: Game = {
    __typename: Typename.GAME,
    pads: initPadsState(padPropsData),
    errors: initErrors(),
    playState: initPlayState(false, GamePhase.ADDING),
    gamePhase: GamePhase.ADDING,
    currentPlayer: Player.ONE,
    gameStatus: GameStatus.ONGOING,
    cows: initCows(),
    glowing: initGlowing(),
  };

  return initGameState;
};

export default initGame;
