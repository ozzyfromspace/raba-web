import { render, screen } from '@testing-library/react';
import Cows from '../Cows';

it('renders the Cows component', () => {
  render(<Cows />);
  const divElement = screen.getByText(/Cows/i);
  expect(divElement).toBeInTheDocument();
});
