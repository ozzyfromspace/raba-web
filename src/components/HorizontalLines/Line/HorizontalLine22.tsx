import React from 'react';
import { HorizontalLineId, LineDirection } from '../../../@types/lineTypes';
import { LineProps } from '../../../@types/props';
import getLineOwner from '../../Lines/utils/getLineOwner';
import lineStylesFn from '../../Lines/utils/lineStylesFn';

const HorizontalLine22 = (props: LineProps) => {
  const { game, styles } = props;

  const lineOwner = getLineOwner(
    HorizontalLineId['HORIZONTAL_LINE_22'],
    LineDirection.HORIZONTAL,
    game
  );

  const lineStyles = lineStylesFn(
    HorizontalLineId['HORIZONTAL_LINE_22'],
    LineDirection.HORIZONTAL,
    lineOwner,
    game,
    styles
  );

  return (
    <g id="HORIZONTAL_LINE_22" className={lineStyles.glowingClass}>
      <path
        id="connection50px_14"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M282.276 392.665C282.114 392.468 281.956 392.268 281.801 392.066C281.954 392.274 282.104 392.485 282.25 392.698L282.276 392.665ZM241.025 392.698C241.172 392.485 241.322 392.274 241.475 392.066C241.32 392.268 241.161 392.468 241 392.665L241.025 392.698ZM241 361.033C241.161 361.23 241.32 361.43 241.475 361.633C240.826 360.748 240.233 359.82 239.703 358.852C240.108 359.592 240.55 360.308 241.025 361L241 361.033ZM282.25 361C282.104 361.213 281.954 361.424 281.801 361.632C281.956 361.43 282.114 361.23 282.276 361.033L282.25 361ZM261.638 371.849C269.719 371.849 276.905 368.015 281.475 362.066C278.434 366.206 276.638 371.318 276.638 376.849C276.638 382.38 278.434 387.492 281.475 391.632C276.905 385.684 269.719 381.849 261.638 381.849C253.557 381.849 246.371 385.684 241.801 391.632C244.842 387.492 246.638 382.38 246.638 376.849C246.638 371.318 244.842 366.206 241.801 362.066C246.371 368.015 253.556 371.849 261.638 371.849Z"
        fill={lineStyles.lineStyle}
      />
      <path
        id="connection50px_16"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M359.276 392.665C359.114 392.468 358.956 392.268 358.801 392.066C358.954 392.274 359.104 392.485 359.25 392.698L359.276 392.665ZM318.025 392.698C318.172 392.485 318.322 392.274 318.475 392.066C318.32 392.268 318.161 392.468 318 392.665L318.025 392.698ZM318 361.033C318.161 361.23 318.32 361.43 318.475 361.633C317.826 360.748 317.233 359.82 316.703 358.852C317.108 359.592 317.55 360.308 318.025 361L318 361.033ZM359.25 361C359.104 361.213 358.954 361.424 358.801 361.632C358.956 361.43 359.114 361.23 359.276 361.033L359.25 361ZM338.638 371.849C346.719 371.849 353.905 368.015 358.475 362.066C355.434 366.206 353.638 371.318 353.638 376.849C353.638 382.38 355.434 387.492 358.475 391.632C353.905 385.684 346.719 381.849 338.638 381.849C330.556 381.849 323.371 385.684 318.801 391.632C321.842 387.492 323.638 382.38 323.638 376.849C323.638 371.318 321.842 366.206 318.801 362.066C323.371 368.015 330.556 371.849 338.638 371.849Z"
        fill={lineStyles.lineStyle}
      />
    </g>
  );
};

export default HorizontalLine22;
