import { render, screen } from '@testing-library/react';
import { Player } from '../../../@types/coreTypes';
import { CowId } from '../../../@types/cowTypes';
import { PadId } from '../../../@types/padTypes';
import { CowProps } from '../../../@types/props';
import { Typename } from '../../../@types/typenames';
import SVGParent from "../../../utils/SVGParent";
import Cow from '../Cow';

const cowProps: CowProps = {
  __typename: Typename.FREE_COW,
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
  <SVGParent>
    <Cow {...cowProps} />
  </SVGParent>
);

it('renders a Cow component', () => {
  render(ui);

  const svgElement = screen.getByTestId('COW_00');
  expect(svgElement).toBeInTheDocument();
});
