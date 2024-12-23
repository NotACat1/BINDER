import React from 'react';

import { ReactComponent as LeftArrow } from '@assets/icons/arrows/left.svg';
import { ReactComponent as RightArrow } from '@assets/icons/arrows/right.svg';
import styles from './index.module.scss';

interface ICustomArrowProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  direction: 'left' | 'right';
}

const CustomArrow: React.FC<ICustomArrowProps> = ({ direction, ...props }) => {
  const arrowClass =
    direction === 'left' ? styles.arrow_left : styles.arrow_right;

  return (
    <button
      {...props}
      className={`${styles.arrow} ${arrowClass}`}
      aria-label={`Scroll ${direction}`}
    >
      {direction === 'left' ? <LeftArrow /> : <RightArrow />}
    </button>
  );
};

export default CustomArrow;
