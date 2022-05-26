import { CanSelectCow } from '../../../../utils/types';
import canSelectHelpers from '../../utils/canSelectHelpers';

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
