import { render, screen } from '@testing-library/react';
import SVGParent from '../../../utils/SVGParent';
import Pads from '../Pads';

it('renders the Pads component', () => {
  const ui = (
    <SVGParent>
      <Pads />
    </SVGParent>
  );

  render(ui);
  const svgElement = screen.getByTestId(/pads/i);
  expect(svgElement).toBeInTheDocument();
});
