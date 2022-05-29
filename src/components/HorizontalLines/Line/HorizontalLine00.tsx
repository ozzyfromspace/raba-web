import React from 'react';
import { HorizontalLineId, LineDirection } from '../../../@types/lineTypes';
import { LineProps } from "../../../@types/props";
import getLineOwner from '../../Lines/utils/getLineOwner';
import lineStylesFn from '../../Lines/utils/lineStylesFn';

const HorizontalLine00 = (props: LineProps) => {
  const { game, styles } = props;

  const lineOwner = getLineOwner(
    HorizontalLineId['HORIZONTAL_LINE_00'],
    LineDirection.HORIZONTAL,
    game
  );

  const lineStyles = lineStylesFn(
    HorizontalLineId['HORIZONTAL_LINE_00'],
    LineDirection.HORIZONTAL,
    lineOwner,
    game,
    styles
  );

  return (
    <g id="HORIZONTAL_LINE_00"
      className={lineStyles.glowingClass}
    >
      <rect
        id="joinRect_8"
        x="106"
        y="536.3"
        width="10"
        height="390"
        transform="rotate(-90 106 536.3)"
        fill={lineStyles.lineStyle}
      />
      <path
        id="Intersect_13"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M87.7288 517.45C92.3146 522.863 99.1621 526.299 106.812 526.299C106.858 526.299 106.904 526.299 106.95 526.299V536.299C106.904 536.299 106.858 536.299 106.812 536.299C99.0208 536.299 92.062 539.863 87.4771 545.45H87.45V545.413C90.2021 541.396 91.8121 536.536 91.8121 531.299C91.8121 526.177 90.2717 521.415 87.6288 517.45H87.7288Z"
        fill={lineStyles.lineStyle}
      />
      <path
        id="Intersect_14"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M280.721 517.45C276.135 522.863 269.288 526.299 261.638 526.299C261.592 526.299 261.546 526.299 261.5 526.299V536.299C261.546 536.299 261.592 536.299 261.638 536.299C269.429 536.299 276.388 539.863 280.973 545.45H281V545.413C278.248 541.396 276.638 536.536 276.638 531.299C276.638 526.177 278.178 521.415 280.821 517.45H280.721Z"
        fill={lineStyles.lineStyle}
      />
      <path
        id="Intersect_15"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M319.479 517.5C324.065 522.913 330.912 526.349 338.562 526.349C338.608 526.349 338.654 526.349 338.7 526.349V536.349C338.654 536.349 338.608 536.349 338.562 536.349C330.771 536.349 323.812 539.913 319.227 545.5H319.2V545.463C321.952 541.446 323.562 536.586 323.562 531.349C323.562 526.227 322.022 521.465 319.379 517.5H319.479Z"
        fill={lineStyles.lineStyle}
      />
      <path
        id="Intersect_16"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M511.871 517.5C507.285 522.913 500.438 526.349 492.788 526.349C492.742 526.349 492.696 526.349 492.65 526.349V536.349C492.696 536.349 492.742 536.349 492.788 536.349C500.579 536.349 507.538 539.913 512.123 545.5H512.15V545.463C509.398 541.446 507.788 536.586 507.788 531.349C507.788 526.227 509.328 521.465 511.971 517.5H511.871Z"
        fill={lineStyles.lineStyle}
      />
    </g>
  );
};

export default HorizontalLine00;
