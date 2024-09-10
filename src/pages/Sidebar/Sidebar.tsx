import React from 'react';
import cl from 'classnames';
import { Big_Shoulders_Display } from 'next/font/google';
import { Iceland } from 'next/font/google';
import UnionIcon from '@/icons/union.svg';
import styles from './Sidebar.module.css'
const inter2 = Iceland({subsets: ['latin'], weight: '400'});
const inter1 = Big_Shoulders_Display({subsets: ['latin'], weight: '800'});
import P from '@/components/P/P';

const Sidebar = ({className}: {className?: string}) => {
  return (
    <div className={cl('transition-[0.5s]  border-solid border-l-2 border-[var(--primary)]  flex flex-col gap-[23px]', styles.nth, {className})}>
        <div>
            <div className={cl(inter1.className, ' overflow-hidden flex max-h-[23px] justify-between px-[5px] py-[0] items-center bg-[var(--primary)] text-[var(--first-text)] uppercase text-[18px] tracking-[7.5%]')}>
                <div>
                   active guest
                </div>
                <div>
                    <UnionIcon className = 'w-[2em] h-[2em]'/>
                </div>
            </div>
            <div className={cl('bg-[#e84a4a1a]  text-[var(--second-text)] text-center text-[14px]  tracking-[7.5%]', inter2.className)}>
              the react skill-up line
            </div>
        </div>
        <div>
          <div className={cl('text-[14px] mb-0 ml-[8px]  tracking-[7.5%] uppercase text-[var(--first-text)]', inter2.className)}>
            quest name 
          </div>
          <div className={cl('text-[18px] mt-0 tracking-[7.5%]  uppercase text-[var(--primary)]', inter1.className)}>
            Social media
          </div>
        </div>
        <div>
          <div>
            goal
          </div>
          <div className=''>
            <P size='ss' appearance='sw'>
              Build this website. Implement a full react website with multiple routers, UI elements and tricky styling. Make it all work great!
            </P>
          </div>
        </div>
    </div>
  )
}

export default Sidebar