import React, { FC } from 'react';
import { LanguageProps } from '../../utils/interface';
import styles from './Language.module.scss';

const Language: FC<LanguageProps> = ({}): React.ReactElement => {
  return <div className={styles['Language']}>Language</div>;
};

export default Language;
