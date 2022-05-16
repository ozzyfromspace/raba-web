import { render, screen } from '@testing-library/react';
import Pad from '../Pad';

it('renders the Pad component', () => {
  render(<Pad />);
  const divElement = screen.getByText(/Pad/i);
  expect(divElement).toBeInTheDocument();
});
