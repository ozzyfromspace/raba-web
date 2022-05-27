import React from 'react';
import { HorizontalLineId, LineDirection } from '../../../@types/lineTypes';
import { LineProps } from '../../../@types/props';
import getLineOwner from '../../Lines/utils/getLineOwner';
import lineStylesFn from '../../Lines/utils/lineStylesFn';

const HorizontalLine15 = (props: LineProps) => {
  const { game, styles } = props;

  const lineOwner = getLineOwner(
    HorizontalLineId['HORIZONTAL_LINE_15'],
    LineDirection.HORIZONTAL,
    game
  );

  const lineStyles = lineStylesFn(
    HorizontalLineId['HORIZONTAL_LINE_15'],
    LineDirection.HORIZONTAL,
    lineOwner,
    game,
    styles
  );

  return (
    <g id="HORIZONTAL_LINE_15" className={lineStyles.glowingClass}>
      <rect
        id="joinRect_4"
        x="167"
        y="150.95"
        width="10"
        height="250"
        transform="rotate(-90 167 150.95)"
        fill={lineStyles.lineStyle}
      />
      <path
        id="Intersect_5"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M319.629 159.8C324.215 154.387 331.062 150.951 338.712 150.951C338.758 150.951 338.804 150.951 338.85 150.951V140.951C338.804 140.951 338.758 140.951 338.712 140.951C330.921 140.951 323.962 137.387 319.377 131.8H319.35V131.837C322.102 135.854 323.712 140.714 323.712 145.951C323.712 151.073 322.172 155.835 319.529 159.8H319.629Z"
        fill={lineStyles.lineStyle}
      />
      <path
        id="Intersect_6"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M280.371 159.8C275.785 154.387 268.938 150.951 261.288 150.951C261.242 150.951 261.196 150.951 261.15 150.951V140.951C261.196 140.951 261.242 140.951 261.288 140.951C269.079 140.951 276.038 137.387 280.623 131.8H280.65V131.837C277.898 135.854 276.288 140.714 276.288 145.951C276.288 151.073 277.828 155.835 280.471 159.8H280.371Z"
        fill={lineStyles.lineStyle}
      />
      <path
        id="Intersect_7"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M434.371 132.15C429.785 137.563 422.938 140.999 415.288 140.999C415.242 140.999 415.196 140.999 415.15 140.999V150.999C415.196 150.999 415.242 150.999 415.288 150.999C423.079 150.999 430.038 154.563 434.623 160.15H434.65V160.113C431.898 156.096 430.288 151.236 430.288 145.999C430.288 140.877 431.828 136.115 434.471 132.15H434.371Z"
        fill={lineStyles.lineStyle}
      />
      <path
        id="Intersect_8"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M165.779 132.1C170.365 137.513 177.212 140.949 184.862 140.949C184.908 140.949 184.954 140.949 185 140.949V150.949C184.954 150.949 184.908 150.949 184.862 150.949C177.071 150.949 170.112 154.513 165.527 160.1H165.5V160.063C168.252 156.046 169.862 151.186 169.862 145.949C169.862 140.827 168.322 136.065 165.679 132.1H165.779Z"
        fill={lineStyles.lineStyle}
      />
    </g>
  );
};

export default HorizontalLine15;
