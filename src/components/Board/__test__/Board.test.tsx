import { render, screen } from '@testing-library/react';
import Board from '../Board';

describe('Board', () => {
  it('should render a board', () => {
    render(<Board />);
    const boardEl = screen.getByRole('main');
    expect(boardEl).toBeInTheDocument();
    expect(boardEl).toBeVisible();
  });

  it('should render a board with 24 pads', () => {
    render(<Board />);
    const padArray = screen.getAllByTestId(/^PAD_\d\d$/i);
    expect(padArray.length).toBe(24);
  });

  it('should not contain any cows', () => {
    render(<Board />);
    const cowArray = screen.queryAllByTestId(/COW_/);
    expect(cowArray.length).toBe(0);
  });
});
