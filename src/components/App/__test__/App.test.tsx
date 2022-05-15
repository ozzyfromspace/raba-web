import { render, screen } from '@testing-library/react';
import App from '../App';

it('renders the App component', () => {
  render(<App />);
  const divElement = screen.getByText(/App/i);
  expect(divElement).toBeInTheDocument();
});
