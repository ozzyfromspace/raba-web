import React from 'react';
import { DiagonalLineId, LineDirection } from '../../../@types/lineTypes';
import { LineProps } from '../../../@types/props';
import getLineOwner from '../../Lines/utils/getLineOwner';
import lineStylesFn from '../../Lines/utils/lineStylesFn';

const DiagonalLine60 = (props: LineProps) => {
  const { game, styles } = props;

  const lineOwner = getLineOwner(
    DiagonalLineId['DIAGONAL_LINE_60'],
    LineDirection.DIAGONAL,
    game
  );

  const lineStyles = lineStylesFn(
    DiagonalLineId['DIAGONAL_LINE_60'],
    LineDirection.DIAGONAL,
    lineOwner,
    game,
    styles
  );

  return (
    <rect
      id={DiagonalLineId['DIAGONAL_LINE_60']}
      x="370"
      y="377.071"
      width="10"
      height="240"
      transform="rotate(-45 370 377.071)"
      className={lineStyles.glowingClass}
      fill={lineStyles.lineStyle}
    />
  );
};

export default DiagonalLine60;
