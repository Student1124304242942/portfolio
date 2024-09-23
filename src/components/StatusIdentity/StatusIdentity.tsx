import React, { ReactNode } from 'react';
import { Big_Shoulders_Display } from 'next/font/google';
import cl from 'classnames';
import { StatusIdentityProps } from './StatusIdentity.props';
const inter = Big_Shoulders_Display({subsets: ['latin'], weight: '800'});

const Status = ({children}: StatusIdentityProps): JSX.Element => {
  return (
    <div className={cl(inter.className, 'text-[var(--first-text)] opacity-[0.6] md:text-[16px] sm:text-[14px] text-[12px] tracking-[7.5%] uppercase')}>{children}</div>
  )
}

export default Status