import { render, screen } from '@testing-library/react';
import DiagonalLines from '../DiagonalLines';

it('renders the DiagonalLines component', () => {
  render(<DiagonalLines />);
  const divElement = screen.getByText(/DiagonalLines/i);
  expect(divElement).toBeInTheDocument();
});
