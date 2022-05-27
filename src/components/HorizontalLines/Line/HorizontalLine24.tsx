import React from 'react';
import { HorizontalLineId, LineDirection } from '../../../@types/lineTypes';
import { LineProps } from '../../../@types/props';
import getLineOwner from '../../Lines/utils/getLineOwner';
import lineStylesFn from '../../Lines/utils/lineStylesFn';

const HorizontalLine24 = (props: LineProps) => {
  const { game, styles } = props;

  const lineOwner = getLineOwner(
    HorizontalLineId['HORIZONTAL_LINE_24'],
    LineDirection.HORIZONTAL,
    game
  );

  const lineStyles = lineStylesFn(
    HorizontalLineId['HORIZONTAL_LINE_24'],
    LineDirection.HORIZONTAL,
    lineOwner,
    game,
    styles
  );

  return (
    <g id="HORIZONTAL_LINE_24" className={lineStyles.glowingClass}>
      <path
        id="connection50px_2"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M282.276 238.665C282.114 238.468 281.956 238.268 281.801 238.066C281.954 238.274 282.104 238.485 282.25 238.698L282.276 238.665ZM241.025 238.698C241.172 238.485 241.322 238.274 241.475 238.066C241.32 238.268 241.161 238.468 241 238.665L241.025 238.698ZM241 207.033C241.161 207.23 241.32 207.43 241.475 207.632C240.826 206.748 240.233 205.82 239.703 204.852C240.108 205.592 240.55 206.308 241.025 207L241 207.033ZM282.25 207C282.104 207.213 281.954 207.424 281.801 207.632C281.956 207.43 282.114 207.23 282.276 207.033L282.25 207ZM261.638 217.849C269.719 217.849 276.905 214.015 281.475 208.066C278.434 212.206 276.638 217.318 276.638 222.849C276.638 228.38 278.434 233.492 281.475 237.632C276.905 231.684 269.719 227.849 261.638 227.849C253.557 227.849 246.371 231.684 241.801 237.632C244.842 233.492 246.638 228.38 246.638 222.849C246.638 217.318 244.842 212.206 241.801 208.066C246.371 214.015 253.556 217.849 261.638 217.849Z"
        fill={lineStyles.lineStyle}
      />
      <path
        id="connection50px_4"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M359.276 238.665C359.114 238.468 358.956 238.268 358.801 238.066C358.954 238.274 359.104 238.485 359.25 238.698L359.276 238.665ZM318.025 238.698C318.172 238.485 318.322 238.274 318.475 238.066C318.32 238.268 318.161 238.468 318 238.665L318.025 238.698ZM318 207.033C318.161 207.23 318.32 207.43 318.475 207.632C317.826 206.748 317.233 205.82 316.703 204.852C317.108 205.592 317.55 206.308 318.025 207L318 207.033ZM359.25 207C359.104 207.213 358.954 207.424 358.801 207.632C358.956 207.43 359.114 207.23 359.276 207.033L359.25 207ZM338.638 217.849C346.719 217.849 353.905 214.015 358.475 208.066C355.434 212.206 353.638 217.318 353.638 222.849C353.638 228.38 355.434 233.492 358.475 237.632C353.905 231.684 346.719 227.849 338.638 227.849C330.556 227.849 323.371 231.684 318.801 237.632C321.842 233.492 323.638 228.38 323.638 222.849C323.638 217.318 321.842 212.206 318.801 208.066C323.371 214.015 330.556 217.849 338.638 217.849Z"
        fill={lineStyles.lineStyle}
      />
    </g>
  );
};

export default HorizontalLine24;