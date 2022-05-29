import React from 'react';
import { LineDirection, VerticalLineId } from '../../../@types/lineTypes';
import { LineProps } from '../../../@types/props';
import getLineOwner from '../../Lines/utils/getLineOwner';
import lineStylesFn from '../../Lines/utils/lineStylesFn';

const VerticalLine30 = (props: LineProps) => {
  const { game, styles } = props;

  const lineOwner = getLineOwner(
    VerticalLineId['VERTICAL_LINE_30'],
    LineDirection.VERTICAL,
    game
  );

  const lineStyles = lineStylesFn(
    VerticalLineId['VERTICAL_LINE_30'],
    LineDirection.VERTICAL,
    lineOwner,
    game,
    styles
  );

  return (
    <g id="VERTICAL_LINE_30" className={lineStyles.glowingClass}>
      <path
        id="connection50px_26"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M315.665 472.174C315.468 472.336 315.268 472.494 315.066 472.649C315.274 472.496 315.485 472.346 315.698 472.2L315.665 472.174ZM315.698 513.425C315.485 513.278 315.274 513.128 315.066 512.975C315.268 513.13 315.468 513.289 315.665 513.45L315.698 513.425ZM284.033 513.45C284.23 513.289 284.43 513.13 284.633 512.975C283.748 513.624 282.82 514.217 281.852 514.747C282.592 514.342 283.308 513.9 284 513.425L284.033 513.45ZM284 472.2C284.213 472.346 284.424 472.496 284.632 472.649C284.43 472.494 284.23 472.336 284.033 472.174L284 472.2ZM294.849 492.812C294.849 484.731 291.015 477.545 285.066 472.975C289.206 476.016 294.318 477.812 299.849 477.812C305.38 477.812 310.492 476.016 314.632 472.975C308.684 477.545 304.849 484.731 304.849 492.812C304.849 500.894 308.684 508.079 314.632 512.649C310.492 509.608 305.38 507.812 299.849 507.812C294.318 507.812 289.206 509.608 285.066 512.649C291.015 508.079 294.849 500.894 294.849 492.812Z"
        fill={lineStyles.lineStyle}
      />
      <path
        id="connection50px_28"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M315.665 395C315.468 395.161 315.268 395.32 315.066 395.475C315.274 395.322 315.485 395.172 315.698 395.025L315.665 395ZM315.698 436.25C315.485 436.104 315.274 435.954 315.066 435.801C315.268 435.956 315.468 436.114 315.665 436.276L315.698 436.25ZM284.033 436.276C284.23 436.114 284.43 435.956 284.633 435.801C283.748 436.45 282.82 437.043 281.852 437.573C282.592 437.168 283.308 436.726 284 436.25L284.033 436.276ZM284 395.025C284.213 395.172 284.424 395.322 284.632 395.475C284.43 395.32 284.23 395.161 284.033 395L284 395.025ZM294.849 415.638C294.849 407.556 291.015 400.371 285.066 395.801C289.206 398.842 294.318 400.638 299.849 400.638C305.38 400.638 310.492 398.842 314.632 395.801C308.684 400.371 304.849 407.557 304.849 415.638C304.849 423.719 308.684 430.905 314.632 435.475C310.492 432.434 305.38 430.638 299.849 430.638C294.318 430.638 289.206 432.434 285.066 435.475C291.015 430.905 294.849 423.719 294.849 415.638Z"
        fill={lineStyles.lineStyle}
      />
    </g>
  );
};

export default VerticalLine30;
