import { render, screen } from '@testing-library/react';
import SVGParent from '../../../utils/SVGParent';
import Lines from '../Lines';

it('renders the Lines component', () => {
  const ui = (
    <SVGParent>
      <Lines />
    </SVGParent>
  );

  render(ui);
  const divElement = screen.getByTestId(/lines/i);
  expect(divElement).toBeInTheDocument();
});
