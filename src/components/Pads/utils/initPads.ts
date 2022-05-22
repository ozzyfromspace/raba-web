import { PadProps } from "../../../utils/props";
import { InitPads, Pad, Pads, ResourceTypeName } from "../../../utils/types";

const initPads: InitPads = (padPropsData) => {
  const pads: Pad[] = padPropsData.map(getPads);
  const initPadsObject: Pads = pads.reduce((finObj, pad) => ({
    ...finObj,
    __typename: ResourceTypeName.PADS,
    [pad.padId]: pad,
  }), {} as Pads);
  return initPadsObject;
}

function getPads(padProps: PadProps) {
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

export default initPads;
