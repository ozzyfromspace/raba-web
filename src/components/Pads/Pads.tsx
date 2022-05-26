// import styles from './Pads.module.scss';
import { useState } from 'react';
import allPadsFilter from '../../reducers/gameReducer/utils/allPadsFilter';
import { useGame } from '../GameProvider/GameProvider';
import Pad from '../Pad';
import createPadPropsArray from './utils/createPadPropsArray';

const Pads = () => {
  const { game } = useGame();
  const pads = Object.values(game.pads).filter(allPadsFilter);

  const [padPropsArray] = useState(() => {
    return pads.filter(allPadsFilter).map(createPadPropsArray(game));
  });

  return (
    <g id="PADS" data-testid="PADS">
      {padPropsArray.map((props) => (
        <Pad {...props} key={props.padId} />
      ))}
    </g>
  );
};

export default Pads;
