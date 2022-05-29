import { GameAction, SendToGameReducerFn } from "../@types/gameTypes";
import { Typename } from "../@types/typenames";

const sendToGameReducer: SendToGameReducerFn = (padId, gameDispatch) => () => {
  const action: GameAction = {
    __typename: Typename.GAME_ACTION,
    payload: { selectableId: padId },
  };
  gameDispatch(action);
};

export default sendToGameReducer;