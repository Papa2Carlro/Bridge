import React, { FC } from 'react';
import { AppProps } from './utils/interface';
import styles from './App.module.scss';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App: FC<AppProps> = ({}): React.ReactElement => {
  return (
    <div className={styles['App']}>
      <Header />

      <Main />

      <Footer />
    </div>
  );
};

export default App;
