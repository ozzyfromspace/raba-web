import { render, screen } from '@testing-library/react';
import { CowProps } from 'utils/props';
import SvgParent from 'utils/SVGParent';
import { CowId, CowTypeName, PadId, Player } from 'utils/types';
import Cow from '../Cow';

const cowProps: CowProps = {
  __typename: CowTypeName.FREE_COW,
  centerX: 0,
  centerY: 0,
  radius: 24,
  cowId: CowId.COW_00,
  selected: false,
  error: false,
  owner: Player.ONE,
  padId: PadId.PAD_00,
  fill: '#fff',
  stroke: '#808080',
  strokeOpacity: 0.5,
};

const ui = (
  <SvgParent>
    <Cow {...cowProps} />
  </SvgParent>
);

it('renders a Cow component', () => {
  render(ui);

  const svgElement = screen.getByTestId('COW_00');
  expect(svgElement).toBeInTheDocument();
});
