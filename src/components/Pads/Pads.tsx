// import styles from './Pads.module.scss';
import Pad from '../Pad';
import { padsPropData } from './padPropData';

const Pads = () => {
  return (
    <g id="PADS" data-testid="PADS">
      {padsPropData.map((props) => (
        <Pad {...props} key={props.padId} />
      ))}
    </g>
  );
};

export default Pads;
