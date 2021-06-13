import React, { FC } from 'react';
import { ButtonProps } from '../../utils/interface';
import styles from '../../utils/UI.module.scss';
import { Link } from 'react-router-dom';

const Button: FC<ButtonProps> = ({
  label,
  link,
  click,
}): React.ReactElement => {
  if (link) {
    return (
      <Link className={styles['Button']} to='/game'>
        {label}
      </Link>
    );
  }

  return (
    <div onClick={click} className={styles['Button']}>
      {label}
    </div>
  );
};

export default Button;
