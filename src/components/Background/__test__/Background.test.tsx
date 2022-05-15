import { render, screen } from '@testing-library/react';
import SVGParent from 'utils/SVGParent';
import Background from '../Background';

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
