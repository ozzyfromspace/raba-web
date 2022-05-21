// import styles from './App.module.scss';

import Board from "../Board";
import GameProvider from '../GameProvider';

const App = () => {
  return (
    <GameProvider>
      <div>
        App
        <Board />
      </div>
    </GameProvider>
  );
};

export default App;
