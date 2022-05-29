import { render, screen } from '@testing-library/react';
import { PadProps } from '../../../@types/props';
import SVGParent from '../../../utils/SVGParent';
import { padPropsData } from "../../Pads/padPropsData";
import Pad from '../Pad';

it('renders the Pad component', () => {
  const testPropData: PadProps = padPropsData[0];

  const MockPad = () => (<SVGParent><Pad {...testPropData}  /></SVGParent>)

  render(<MockPad/>);
  const divElement = screen.getByTestId(testPropData.padId);
  expect(divElement).toBeInTheDocument();
});
