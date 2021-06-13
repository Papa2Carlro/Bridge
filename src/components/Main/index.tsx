import React, { FC } from 'react';
import { MainProps } from '../../utils/interface';
import styles from './Main.module.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../../pages/Home';
import Game from '../../pages/Game';

const Main: FC<MainProps> = ({}): React.ReactElement => {
  return (
    <Router>
      <section className={styles['Main']}>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/game'>
          <Game />
        </Route>
      </section>
    </Router>
  );
};

export default Main;
