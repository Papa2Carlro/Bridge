import React, { FC } from 'react';
import { HeaderProps } from '../../utils/interface';
import styles from './Header.module.scss';

import Language from './Language';

const Index: FC<HeaderProps> = ({}): React.ReactElement => {
  return (
    <header className={styles['Header']}>
      <h1 className={styles['Header__title']}>Bridge</h1>

      <Language />
    </header>
  );
};

export default Index;
