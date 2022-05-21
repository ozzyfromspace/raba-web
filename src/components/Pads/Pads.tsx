// import styles from './Pads.module.scss';
import Pad from '../Pad';
import { padPropsData } from './padPropsData';

const Pads = () => {
  return (
    <g id="PADS" data-testid="PADS">
      {padPropsData.map((props) => (
        <Pad {...props} key={props.padId} />
      ))}
    </g>
  );
};

export default Pads;
