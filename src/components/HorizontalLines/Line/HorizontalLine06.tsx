import React from 'react';
import { HorizontalLineId, LineDirection } from '../../../@types/lineTypes';
import { LineProps } from '../../../@types/props';
import getLineOwner from '../../Lines/utils/getLineOwner';
import lineStylesFn from '../../Lines/utils/lineStylesFn';

const HorizontalLine06 = (props: LineProps) => {
  const { game, styles } = props;

  const lineOwner = getLineOwner(
    HorizontalLineId['HORIZONTAL_LINE_06'],
    LineDirection.HORIZONTAL,
    game
  );

  const lineStyles = lineStylesFn(
    HorizontalLineId['HORIZONTAL_LINE_06'],
    LineDirection.HORIZONTAL,
    lineOwner,
    game,
    styles
  );

  return (
    <g id="HORIZONTAL_LINE_06" className={lineStyles.glowingClass}>
      <rect
        id="joinRect_2"
        x="105.95"
        y="74.4"
        width="10"
        height="390"
        transform="rotate(-90 105.95 74.4)"
        fill={lineStyles.lineStyle}
      />
      <path
        id="Intersect"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M87.5787 83.25C92.1645 77.837 99.012 74.4009 106.662 74.4009C106.708 74.4009 106.754 74.401 106.8 74.4013V64.4005C106.754 64.4008 106.708 64.4009 106.662 64.4009C98.8708 64.4009 91.912 60.8368 87.3271 55.25H87.3V55.2872C90.0521 59.3037 91.6621 64.1643 91.6621 69.4009C91.6621 74.523 90.1217 79.2854 87.4788 83.25H87.5787Z"
        fill={lineStyles.lineStyle}
      />
      <path
        id="Intersect_2"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M279.721 55.55C275.135 60.963 268.288 64.3991 260.638 64.3991C260.592 64.3991 260.546 64.399 260.5 64.3987V74.3995C260.546 74.3992 260.592 74.3991 260.638 74.3991C268.429 74.3991 275.388 77.9632 279.973 83.55H280V83.5128C277.248 79.4963 275.638 74.6357 275.638 69.3991C275.638 64.277 277.178 59.5146 279.821 55.55L279.721 55.55Z"
        fill={lineStyles.lineStyle}
      />
      <path
        id="Intersect_3"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M318.979 55.55C323.565 60.963 330.412 64.3991 338.062 64.3991C338.108 64.3991 338.154 64.399 338.2 64.3987V74.3995C338.154 74.3992 338.108 74.3991 338.062 74.3991C330.271 74.3991 323.312 77.9632 318.727 83.55H318.7V83.5128C321.452 79.4963 323.062 74.6357 323.062 69.3991C323.062 64.277 321.522 59.5146 318.879 55.55L318.979 55.55Z"
        fill={lineStyles.lineStyle}
      />
      <path
        id="Intersect_4"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M512.021 83.25C507.435 77.837 500.588 74.4009 492.938 74.4009C492.892 74.4009 492.846 74.401 492.8 74.4013V64.4005C492.846 64.4008 492.892 64.4009 492.938 64.4009C500.729 64.4009 507.688 60.8368 512.273 55.25H512.3V55.2872C509.548 59.3037 507.938 64.1643 507.938 69.4009C507.938 74.523 509.478 79.2854 512.121 83.25H512.021Z"
        fill={lineStyles.lineStyle}
      />
    </g>
  );
};

export default HorizontalLine06;
