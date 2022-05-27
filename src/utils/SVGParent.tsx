import React from 'react';
import { SVGParentProps } from '../@types/props';

const SVGParent = (props: SVGParentProps) => {
  const { children } = props;

  return (
    <React.Fragment>
      <svg>{children}</svg>
    </React.Fragment>
  );
};

export default SVGParent;
