import { GameStatus, InitErrors, InitGame, Player, ResourceTypeName } from "../../../utils/types";
import initCows from "../../Cows/utils/initCows";
import { padPropsData } from "../../Pads/padPropsData";
import initPadsState from "../../Pads/utils/initPads";

const initGame: InitGame = () => ({
  __typename: ResourceTypeName.GAME,
  pads: initPadsState(padPropsData),
  errors: initErrors(),
  actionStack: [],
  currentPlayer: Player.ONE,
  gameStatus: GameStatus.START,
  cows: initCows(),
});

const initErrors: InitErrors = () => ({cows: [], pads: []});

export default initGame;