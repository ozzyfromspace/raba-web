// import styles from './Pads.module.scss';
import { useEffect, useMemo, useState } from 'react';
import allPadsFilter from '../../reducers/gameReducer/utils/allPadsFilter';
import { useGame } from '../GameProvider/GameProvider';
import Pad from '../Pad';
import createPadPropsArray from './utils/createPadPropsArray';

const Pads = () => {
  const { game } = useGame();
  const pads = useMemo(
    () => Object.values(game.pads).filter(allPadsFilter),
    [game.pads]
  );

  const [padPropsArray, setPadPropsArray] = useState(() => {
    return pads.filter(allPadsFilter).map(createPadPropsArray(game));
  });

  useEffect(() => {
    setPadPropsArray(() =>
      pads.filter(allPadsFilter).map(createPadPropsArray(game))
    );
  }, [pads, game]);

  return (
    <g id="PADS" data-testid="PADS">
      {padPropsArray.map((props) => (
        <Pad
          {...props}
          currentPlayer={game.currentPlayer}
          key={props.padId}
        />
      ))}
    </g>
  );
};

export default Pads;
