import React from 'react';
import { HorizontalLineId, LineDirection } from '../../../@types/lineTypes';
import { LineProps } from '../../../@types/props';
import getLineOwner from '../../Lines/utils/getLineOwner';
import lineStylesFn from '../../Lines/utils/lineStylesFn';

const HorizontalLine11 = (props: LineProps) => {
  const { game, styles } = props;

  const lineOwner = getLineOwner(
    HorizontalLineId['HORIZONTAL_LINE_11'],
    LineDirection.HORIZONTAL,
    game
  );

  const lineStyles = lineStylesFn(
    HorizontalLineId['HORIZONTAL_LINE_11'],
    LineDirection.HORIZONTAL,
    lineOwner,
    game,
    styles
  );

  return (
    <g id="HORIZONTAL_LINE_11" className={lineStyles.glowingClass}>
      <rect
        id="joinRect_6"
        x="180"
        y="459"
        width="10"
        height="250"
        transform="rotate(-90 180 459)"
        fill={lineStyles.lineStyle}
      />
      <path
        id="Intersect_9"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M319.479 467.85C324.065 462.437 330.912 459.001 338.562 459.001C338.608 459.001 338.654 459.001 338.7 459.001V449.001C338.654 449.001 338.608 449.001 338.562 449.001C330.771 449.001 323.812 445.437 319.227 439.85H319.2V439.887C321.952 443.904 323.562 448.764 323.562 454.001C323.562 459.123 322.022 463.885 319.379 467.85H319.479Z"
        fill={lineStyles.lineStyle}
      />
      <path
        id="Intersect_10"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M280.221 467.85C275.635 462.437 268.788 459.001 261.138 459.001C261.092 459.001 261.046 459.001 261 459.001V449.001C261.046 449.001 261.092 449.001 261.138 449.001C268.929 449.001 275.888 445.437 280.473 439.85H280.5V439.887C277.748 443.904 276.138 448.764 276.138 454.001C276.138 459.123 277.678 463.885 280.321 467.85H280.221Z"
        fill={lineStyles.lineStyle}
      />
      <path
        id="Intersect_11"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M165.579 467.85C170.165 462.437 177.012 459.001 184.662 459.001C184.708 459.001 184.754 459.001 184.8 459.001V449.001C184.754 449.001 184.708 449.001 184.662 449.001C176.871 449.001 169.912 445.437 165.327 439.85H165.3V439.887C168.052 443.904 169.662 448.764 169.662 454.001C169.662 459.123 168.122 463.885 165.479 467.85H165.579Z"
        fill={lineStyles.lineStyle}
      />
      <path
        id="Intersect_12"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M434.221 467.85C429.635 462.437 422.788 459.001 415.138 459.001C415.092 459.001 415.046 459.001 415 459.001V449.001C415.046 449.001 415.092 449.001 415.138 449.001C422.929 449.001 429.888 445.437 434.473 439.85H434.5V439.887C431.748 443.904 430.138 448.764 430.138 454.001C430.138 459.123 431.678 463.885 434.321 467.85H434.221Z"
        fill={lineStyles.lineStyle}
      />
    </g>
  );
};

export default HorizontalLine11;
