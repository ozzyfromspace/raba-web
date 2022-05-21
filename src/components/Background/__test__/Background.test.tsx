import { render, screen } from '@testing-library/react';
import Background from '../Background';
import SVGParent from "../../../utils/SVGParent";

it('renders the Background component', () => {
  const ui = (
    <SVGParent>
      <Background />
    </SVGParent>
  );

  render(ui);
  const svgElement = screen.getByTestId(/background/i);
  expect(svgElement).toBeInTheDocument();
});
