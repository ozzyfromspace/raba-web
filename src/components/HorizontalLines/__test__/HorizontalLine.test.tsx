import { render, screen } from '@testing-library/react';
import HorizontalLine from '../HorizontalLines';

it('renders the HorizontalLine component', () => {
  render(<HorizontalLine />);
  const divElement = screen.getByText(/HorizontalLine/i);
  expect(divElement).toBeInTheDocument();
});
