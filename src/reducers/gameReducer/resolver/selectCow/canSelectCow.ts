import { CowId } from '../../../../@types/cowTypes';
import { Game } from '../../../../@types/gameTypes';
import canSelectHelpers from '../../utils/canSelectHelpers';

export type CanSelectCow = (cowId: CowId, game: Game) => boolean;

const canSelectCow: CanSelectCow = (cowId, game) => {
  const { canMoveCow, canAddCaptureCow, canMoveCaptureCow } = canSelectHelpers(
    cowId,
    game
  );

  return canMoveCow
    ? true
    : canAddCaptureCow
    ? true
    : canMoveCaptureCow
    ? true
    : false;
};

export default canSelectCow;
