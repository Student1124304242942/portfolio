import React from 'react';
import {PProps} from './P.props'
import { Iceland} from "next/font/google";
import cn from 'classnames';
import styles from './P.styles';

const inter = Iceland({subsets: ['latin'], weight: '400'});


const P = ({children, size, appearance}: PProps): JSX.Element => {
  return (
    <p className={cn(inter.className, {
        [styles.medium]: size == 'm',
        [styles.big]: size == 'b',
    }, {
      [styles.bright]: appearance == 'br',
      [styles.swarthy]: appearance == 'sw',
    })}>
        {children}
    </p>
  )
}

export default P
