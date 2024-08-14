import React from 'react';
import Image from 'next/image';
import styles from './Sidebar.styles';
import cl from 'classnames';
import Button from '@/components/Button/Button';
import ConnectionIcon from '@/icons/blututh.svg';
import P from '@/components/P/P';
import { Iceland } from 'next/font/google';

const inter = Iceland({subsets: ['latin'], weight: '400'});

const Sidebar = () => {
  return (
    <div className='relative'>
      <div>
        <div className='relative overflow-hidden bg-[#000000]  after:absolute after:top-[-50%] after:left-[-50%] after:bg-red-500 after:animate-spin
        after:origin-bottom-right after:delay-[-1.5s]  after:w-[194px] after:h-[175px] after:z-[-1] 
        before:content-[""]  before:absolute before:top-[-50%] before:left-[-50%] before:bg-red-500 before:animate-spin 
        before:origin-bottom-right before:delay-[-3s]  before:w-[194px] before:h-[175px]
        w-[194px] h-[175px]'>
          <div className='absolute inset-[3px]  bg-[#000000]'>
          <Image
              src='Fang-yuan.svg'
              layout="fill"  
              objectFit="cover" 
              alt='art'
            />
          </div>
        </div>
        <div>
          <div className='flex flex-col gap-0'>
            <div className={cl(styles.smallText)}>
              name
            </div>
            <div className={cl(styles.bigText)}>
              Pulatov Yunus
            </div>
          </div>
          <div className='flex flex-col gap-0'>
            <div className={cl(styles.smallText)}>
              occupation
            </div>
            <div className={cl(styles.bigText)}>
              Fronted developer
            </div>
          </div>
          <div className='flex flex-col gap-0'>
            <div className={cl(styles.smallText)}>
              corporation
            </div>
            <div className={cl(styles.bigText)}>
              none
            </div>
          </div>
          <div>
            <div className={cl(styles.smallText)}>
              social
            </div>
            <Button size='flat' appearance='b'>
              <div>
                Open Connection
              </div>
              <div>
                <ConnectionIcon/>
              </div>
            </Button>
          </div>
        </div>
      </div>
      <div>
        <div className={cl(inter.className, 'uppercase text-[18px] tracking-[7.5%]  text-[var(--primary)] ')}>
          Motto
        </div>
        <P size='s' appearance='sw'>
          whether you succeed or fail when you look back there’s nothing left
        </P>
      </div>
    </div>
  );
};

export default Sidebar;

/*   */
