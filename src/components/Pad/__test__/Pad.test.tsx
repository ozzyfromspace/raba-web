import { render, screen } from '@testing-library/react';
import { PadProps } from 'utils/props';
import { PadId, ResourceTypeName } from 'utils/types';
import Pad from '../Pad';

it('renders the Pad component', () => {
  const testPropData: PadProps = {
    __typename: ResourceTypeName.PAD,
    centerX: 531.6,
    centerY: 69.05,
    radius: 24,
    error: false,
    fill: '#ffffff',
    stroke: '#808080',
    strokeOpacity: 0.5,
    padId: PadId.PAD_66,
    visitingCow: null,
    selected: false,
  };

  render(<Pad {...testPropData} />);
  const divElement = screen.getByText(/Pad/i);
  expect(divElement).toBeInTheDocument();
});
