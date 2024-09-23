import React, { ReactNode } from 'react';
import { Big_Shoulders_Display } from 'next/font/google';
import cl from 'classnames';
import { StatusProps } from './Status.props';
const inter = Big_Shoulders_Display({subsets: ['latin'], weight: '800'});

const Status = ({children}: StatusProps):JSX.Element => {
  return (
    <div className={cl(inter.className, 'text-[#7DFF68] md:text-[26px] sm:text-[18px] text-[16px] tracking-[7.5%] uppercase')}>{children}</div>
  )
}

export default Status