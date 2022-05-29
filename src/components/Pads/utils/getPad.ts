import { Pad } from "../../../@types/padTypes";
import { PadProps } from "../../../@types/props";

function getPad(padProps: PadProps) {
  const pad: Pad = {
    __typename: padProps.__typename,
    centerX: padProps.centerX,
    centerY: padProps.centerY,
    error: padProps.error,
    fill: padProps.fill,
    padId: padProps.padId,
    radius: padProps.radius,
    selected: padProps.selected,
    stroke: padProps.stroke,
    strokeOpacity: padProps.strokeOpacity,
    visitingCowId: padProps.visitingCowId,
  };
  return pad;
}

export default getPad;
