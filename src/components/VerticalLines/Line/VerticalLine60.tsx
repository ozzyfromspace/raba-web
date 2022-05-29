import React from 'react';
import { LineDirection, VerticalLineId } from '../../../@types/lineTypes';
import { LineProps } from '../../../@types/props';
import getLineOwner from '../../Lines/utils/getLineOwner';
import lineStylesFn from '../../Lines/utils/lineStylesFn';

const VerticalLine60 = (props: LineProps) => {
  const { game, styles } = props;

  const lineOwner = getLineOwner(
    VerticalLineId['VERTICAL_LINE_60'],
    LineDirection.VERTICAL,
    game
  );

  const lineStyles = lineStylesFn(
    VerticalLineId['VERTICAL_LINE_60'],
    LineDirection.VERTICAL,
    lineOwner,
    game,
    styles
  );

  return (
    <g id="VERTICAL_LINE_60" className={lineStyles.glowingClass}>
      <rect
        id="joinRect_10"
        x="536.6"
        y="492.3"
        width="10"
        height="385"
        transform="rotate(-180 536.6 492.3)"
        fill={lineStyles.lineStyle}
      />
      <path
        id="Intersect_17"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M517.75 319.579C523.163 324.165 526.599 331.012 526.599 338.662C526.599 338.708 526.599 338.754 526.599 338.8H536.599C536.599 338.754 536.599 338.708 536.599 338.662C536.599 330.871 540.163 323.912 545.75 319.327V319.3H545.713C541.696 322.052 536.836 323.662 531.599 323.662C526.477 323.662 521.715 322.122 517.75 319.479V319.579Z"
        fill={lineStyles.lineStyle}
      />
      <path
        id="Intersect_18"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M545.4 511.521C539.987 506.935 536.551 560.088 536.551 492.438C536.551 492.392 536.551 492.346 536.551 492.3H526.55C526.551 492.346 526.551 492.392 526.551 492.438C526.551 560.229 522.987 507.188 517.4 511.773V511.8H517.437C521.454 509.048 526.314 507.438 531.551 507.438C536.673 507.438 541.435 508.978 545.4 511.621V511.521Z"
        fill={lineStyles.lineStyle}
      />
      <path
        id="Intersect_19"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M517.75 280.321C523.163 275.735 526.599 268.888 526.599 261.238C526.599 261.192 526.599 261.146 526.599 261.1H536.599C536.599 261.146 536.599 261.192 536.599 261.238C536.599 269.029 540.163 275.988 545.75 280.573V280.6H545.713C541.696 277.848 536.836 276.238 531.599 276.238C526.477 276.238 521.715 277.778 517.75 280.421V280.321Z"
        fill={lineStyles.lineStyle}
      />
      <path
        id="Intersect_20"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M545.4 88.3787C539.987 92.9645 536.551 99.812 536.551 107.462C536.551 107.508 536.551 107.554 536.551 107.6H526.55C526.551 107.554 526.551 107.508 526.551 107.462C526.551 99.6708 522.987 92.712 517.4 88.1271V88.1H517.437C521.454 90.852 526.314 92.4621 531.551 92.4621C536.673 92.4621 541.435 90.9217 545.4 88.2788V88.3787Z"
        fill={lineStyles.lineStyle}
      />
    </g>
  );
};

export default VerticalLine60;
