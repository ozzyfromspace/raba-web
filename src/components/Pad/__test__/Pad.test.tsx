import { render, screen } from '@testing-library/react';
import { PadProps } from '../../../utils/props';
import SVGParent from '../../../utils/SVGParent';
import { PadId, ResourceTypeName } from '../../../utils/types';
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
    visitingCowId: null,
    selected: false,
  };

  const MockPad = () => (<SVGParent><Pad {...testPropData}  /></SVGParent>)

  render(<MockPad/>);
  const divElement = screen.getByTestId(testPropData.padId);
  expect(divElement).toBeInTheDocument();
});
