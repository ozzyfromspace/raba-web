import React from 'react';
import { LineDirection, VerticalLineId } from '../../../@types/lineTypes';
import { LineProps } from '../../../@types/props';
import getLineOwner from '../../Lines/utils/getLineOwner';
import lineStylesFn from '../../Lines/utils/lineStylesFn';

const VerticalLine11 = (props: LineProps) => {
  const { game, styles } = props;

  const lineOwner = getLineOwner(
    VerticalLineId['VERTICAL_LINE_11'],
    LineDirection.VERTICAL,
    game
  );

  const lineStyles = lineStylesFn(
    VerticalLineId['VERTICAL_LINE_11'],
    LineDirection.VERTICAL,
    lineOwner,
    game,
    styles
  );

  return (
    <g id="VERTICAL_LINE_11" className={lineStyles.glowingClass} >
      <rect
        id="joinRect_14"
        x="141"
        y="180"
        width="10"
        height="250"
        fill={lineStyles.lineStyle}
      />
      <path
        id="Intersect_25"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M131.95 320.079C137.363 324.665 140.799 331.512 140.799 339.162C140.799 339.208 140.799 339.254 140.799 339.3H150.799C150.799 339.254 150.799 339.208 150.799 339.162C150.799 331.371 154.363 324.412 159.95 319.827V319.8H159.913C155.896 322.552 151.036 324.162 145.799 324.162C140.677 324.162 135.915 322.622 131.95 319.979V320.079Z"
        fill={lineStyles.lineStyle}
      />
      <path
        id="Intersect_26"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M131.95 280.821C137.363 276.235 140.799 269.388 140.799 261.738C140.799 261.692 140.799 261.646 140.799 261.6H150.799C150.799 261.646 150.799 261.692 150.799 261.738C150.799 269.529 154.363 276.488 159.95 281.073V281.1H159.913C155.896 278.348 151.036 276.738 145.799 276.738C140.677 276.738 135.915 278.278 131.95 280.921V280.821Z"
        fill={lineStyles.lineStyle}
      />
      <path
        id="Intersect_27"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M132.1 434.221C137.513 429.635 140.949 422.788 140.949 415.138C140.949 415.092 140.949 415.046 140.949 415H150.949C150.949 415.046 150.949 415.092 150.949 415.138C150.949 422.929 154.513 429.888 160.1 434.473V434.5H160.063C156.046 431.748 151.186 430.138 145.949 430.138C140.827 430.138 136.065 431.678 132.1 434.321V434.221Z"
        fill={lineStyles.lineStyle}
      />
      <path
        id="Intersect_28"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M132.15 165.579C137.563 170.165 140.999 177.012 140.999 184.662C140.999 184.708 140.999 184.754 140.999 184.8H150.999C150.999 184.754 150.999 184.708 150.999 184.662C150.999 176.871 154.563 169.912 160.15 165.327V165.3H160.113C156.096 168.052 151.236 169.662 145.999 169.662C140.877 169.662 136.115 168.122 132.15 165.479V165.579Z"
        fill={lineStyles.lineStyle}
      />
    </g>
  );
};

export default VerticalLine11;
