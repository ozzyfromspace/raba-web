import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PlayerColor } from '../../../@types/coreTypes';
import { PadId } from '../../../@types/padTypes';
import App from '../App';

describe("the game's initial phase", () => {
  it('should have a background', () => {
    render(<App />);
    const bg = screen.getByTestId('background');
    expect(bg).toBeInTheDocument();
  });

  it('should have a visible background', () => {
    render(<App />);
    const bg = screen.getByTestId('background');
    expect(bg).toBeVisible();
  });

  it('should not have any cows on the board', () => {
    render(<App />);
    const cows = screen.queryAllByTestId(/^COW_[\d]{2}$/);
    expect(cows.length).toBe(0);
  });

  it('should have 24 pads on the board', () => {
    render(<App />);
    const pads = screen.getAllByTestId(/^PAD_[\d]{2}$/);
    expect(pads.length).toBe(24);
    pads.forEach((pad) => {
      expect(pad).toBeVisible();
    });
  });

  it('should only have visible pads', () => {
    render(<App />);
    const pads = screen.getAllByTestId(/^PAD_[\d]{2}$/);
    pads.forEach((pad) => {
      expect(pad).toBeVisible();
    });
    console.log(pads[0].getAttribute('fill'));
  });

  it('should only render unvisited pads', () => {
    render(<App />);
    const cows = screen.queryAllByTestId(/^COW_[\d]{2}$/);
    expect(cows.length).toBe(0);
  });
});
