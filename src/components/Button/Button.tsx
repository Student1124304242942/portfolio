import React from 'react';
import { Big_Shoulders_Display } from "next/font/google";
import cn from 'classnames';
import { BtnProps } from './Button.props';
import styles from './Button.styles';
 
const inter = Big_Shoulders_Display({subsets: ['latin'],weight: '800'})

const Button = ({children, appearance, size, ...props}: BtnProps): JSX.Element => {
  return (
    <button className={cn(inter.className, {
      [styles.blackBtn]: appearance === 'b',
      [styles.navigation_btn_active]: appearance === 'r',
    }, {
      [styles.flat_btn]: size === 'flat',
      [styles.blackBtn_redBtn]: size === 'normal',
      [styles.navigation_btn]: size === "navigate",
    })} {...props}>
        {children}      
    </button>
  )
}

export default Button
