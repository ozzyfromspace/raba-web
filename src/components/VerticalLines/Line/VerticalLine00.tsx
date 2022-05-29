import React from 'react';
import { LineDirection, VerticalLineId } from '../../../@types/lineTypes';
import { LineProps } from '../../../@types/props';
import getLineOwner from '../../Lines/utils/getLineOwner';
import lineStylesFn from '../../Lines/utils/lineStylesFn';

const VerticalLine00 = (props: LineProps) => {
  const { game, styles } = props;

  const lineOwner = getLineOwner(
    VerticalLineId['VERTICAL_LINE_00'],
    LineDirection.VERTICAL,
    game
  );

  const lineStyles = lineStylesFn(
    VerticalLineId['VERTICAL_LINE_00'],
    LineDirection.VERTICAL,
    lineOwner,
    game,
    styles
  );

  return (
    <g id="VERTICAL_LINE_00" className={lineStyles.glowingClass} >
      <rect
        id="joinRect_16"
        width="10"
        height="390"
        transform="matrix(1 0 0 -1 63 493.7)"
        fill={lineStyles.lineStyle}
      />
      <path
        id="Intersect_29"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M81.85 280.721C76.437 276.135 73.0009 269.288 73.0009 261.638C73.0009 261.592 73.001 261.546 73.0012 261.5H63.0005C63.0007 261.546 63.0009 261.592 63.0009 261.638C63.0009 269.429 59.4368 276.388 53.85 280.973V281H53.8872C57.9037 278.248 62.7643 276.638 68.0009 276.638C73.123 276.638 77.8854 278.178 81.85 280.821V280.721Z"
        fill={lineStyles.lineStyle}
      />
      <path
        id="Intersect_30"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M81.85 319.979C76.437 324.565 73.0009 331.412 73.0009 339.062C73.0009 339.108 73.001 339.154 73.0012 339.2H63.0005C63.0007 339.154 63.0009 339.108 63.0009 339.062C63.0009 331.271 59.4368 324.312 53.85 319.727V319.7H53.8872C57.9037 322.452 62.7643 324.062 68.0009 324.062C73.123 324.062 77.8854 322.522 81.85 319.879V319.979Z"
        fill={lineStyles.lineStyle}
      />
      <path
        id="Intersect_31"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M54.2 511.921C59.613 507.335 63.0491 500.488 63.0491 492.838C63.0491 492.792 63.049 492.746 63.0487 492.7H73.0495C73.0492 492.746 73.0491 492.792 73.0491 492.838C73.0491 500.629 76.6132 507.588 82.2 512.173V512.2H82.1628C78.1463 509.448 73.2857 507.838 68.0491 507.838C62.927 507.838 58.1646 509.378 54.2 512.021V511.921Z"
        fill={lineStyles.lineStyle}
      />
      <path
        id="Intersect_32"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M54.2 88.7787C59.613 93.3646 63.0491 100.212 63.0491 107.862C63.0491 107.908 63.049 107.954 63.0487 108H73.0495C73.0492 107.954 73.0491 107.908 73.0491 107.862C73.0491 100.071 76.6132 93.112 82.2 88.5271V88.5H82.1628C78.1463 91.2521 73.2857 92.8621 68.0491 92.8621C62.927 92.8621 58.1646 91.3217 54.2 88.6788V88.7787Z"
        fill={lineStyles.lineStyle}
      />
    </g>
  );
};

export default VerticalLine00;
