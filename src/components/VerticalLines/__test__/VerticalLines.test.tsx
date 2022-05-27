import { render, screen } from '@testing-library/react';
import VerticalLines from '../VerticalLines';

it('renders the VerticalLines component', () => {
  render(<VerticalLines />);
  const divElement = screen.getByText(/VerticalLines/i);
  expect(divElement).toBeInTheDocument();
});
