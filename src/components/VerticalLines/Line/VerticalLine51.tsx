import React from 'react';
import { LineDirection, VerticalLineId } from '../../../@types/lineTypes';
import { LineProps } from '../../../@types/props';
import getLineOwner from '../../Lines/utils/getLineOwner';
import lineStylesFn from '../../Lines/utils/lineStylesFn';

const VerticalLine51 = (props: LineProps) => {
  const { game, styles } = props;

  const lineOwner = getLineOwner(
    VerticalLineId['VERTICAL_LINE_51'],
    LineDirection.VERTICAL,
    game
  );

  const lineStyles = lineStylesFn(
    VerticalLineId['VERTICAL_LINE_51'],
    LineDirection.VERTICAL,
    lineOwner,
    game,
    styles
  );

  return (
    <g id="VERTICAL_LINE_51" className={lineStyles.glowingClass}>
      <rect
        id="joinRect_12"
        x="449"
        y="180"
        width="10"
        height="250"
        fill={lineStyles.lineStyle}
      />
      <path
        id="Intersect_21"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M440.15 319.599C445.563 324.185 448.999 331.032 448.999 338.682C448.999 338.728 448.999 338.774 448.999 338.82H458.999C458.999 338.774 458.999 338.728 458.999 338.682C458.999 330.891 462.563 323.932 468.15 319.347V319.32H468.113C464.096 322.072 459.236 323.682 453.999 323.682C448.877 323.682 444.115 322.142 440.15 319.499V319.599Z"
        fill={lineStyles.lineStyle}
      />
      <path
        id="Intersect_22"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M440.15 280.341C445.563 275.755 448.999 268.908 448.999 261.258C448.999 261.212 448.999 261.166 448.999 261.12H458.999C458.999 261.166 458.999 261.212 458.999 261.258C458.999 269.049 462.563 276.518 468.15 280.593V280.62H468.113C464.096 277.868 459.236 276.258 453.999 276.258C448.877 276.258 444.115 277.798 440.15 280.441V280.341Z"
        fill={lineStyles.lineStyle}
      />
      <path
        id="Intersect_23"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M467.85 434.371C462.437 429.785 459.511 422.938 459.511 415.288C459.511 415.242 459.511 415.196 459.511 415.15H449.511C449.511 415.196 449.511 415.242 449.511 415.288C449.511 423.079 445.437 430.038 439.85 434.623V434.65H439.887C443.904 431.898 448.764 430.288 454.511 430.288C459.123 430.288 463.885 431.828 467.85 434.471V434.371Z"
        fill={lineStyles.lineStyle}
      />
      <path
        id="Intersect_24"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M467.85 165.779C462.437 170.365 459.511 177.212 459.511 184.862C459.511 184.908 459.511 184.954 459.511 185H449.511C449.511 184.954 449.511 184.908 449.511 184.862C449.511 177.071 445.437 170.112 439.85 165.527V165.5H439.887C443.904 168.252 448.764 169.862 454.511 169.862C459.123 169.862 463.886 168.322 467.85 165.679V165.779Z"
        fill={lineStyles.lineStyle}
      />
    </g>
  );
};

export default VerticalLine51;
