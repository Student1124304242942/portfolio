'use client';
import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import cl from 'classnames';
import P from '@/components/P/P';
import Image from 'next/image';
import Button from '@/components/Button/Button';
import ConnectionIcon from '@/icons/blututh.svg';
import { Iceland } from 'next/font/google';
import styles1 from './page.styles';
import Sidebar from '@/pages/Sidebar/Sidebar';
import Header from '@/pages/Header/Header';
import { ReactNode } from 'react';
import LinkElement from '@/components/Link/Link';
import { useRouter } from 'next/navigation';
import { Big_Shoulders_Display } from 'next/font/google';
import CloseIcon from '@/icons/close.svg';
import VkIcon from '@/icons/vk.svg';
import TgIcon from '@/icons/tg.svg';
import { usePathname } from 'next/navigation';
const inter = Iceland({subsets: ['latin'], weight: '400'});
const inter1 = Big_Shoulders_Display({subsets: ['latin'], weight: '800'})


export default function Layout({children}: {children: ReactNode}) {
  const router = useRouter();
  const path = usePathname();
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const [shadow, setShadow] = useState<boolean>(true);

  const handleClick1 = () => {
    setShadow(!shadow);
  };

  
  const handleButtonClick = (buttonNumber: number) => {
    if (buttonNumber === 3) {
      router.push('/about/skills');
    } else {
      router.push(buttonNumber === 1 ? '/about/project' : '/about/content')
    };
    setActiveButton(buttonNumber);
  };

  return (
  <div className="overflow-hidden w-full h-full">
    <div className={cl({
          ['left-[-100%]']: shadow,
            ['left-[0]']: !shadow
        }, 'transition-[10s]  z-[10] flex items-center justify-center gap-0 absolute min-h-[100%] md:w-[50%] w-full  bg-black bg-opacity-50 overflow-hidden')} onClick={handleClick1}>
          <div className='flex flex-col md:gap-[26px] gap-[10px]'>
            <div className='flex flex-col gap-0'>
              <div className={cl(inter1.className, 'text-[18px] tracking-[7.5%] text-white uppercase')}>connect with me</div>
              <div className={cl(inter.className, 'text-[var(--second-text)] text-[16px] uppercase tracking-[7.5%]')}>wanna chat? Or just share something cool?</div>
            </div>
            <nav className= 'bg-white flex flex-col px-[20%] py-[20%] gap-[10px] bg-[#E84A4A17] rounded-l-[10px]'>
              <ul className=' text-[var(--primary)] flex flex-col md:gap-[20px] gap-[10px]'>
                <li className='list-none flex gap-[5px] items-center'><div><VkIcon className = 'w-[2em] h-[2em]'/></div><a className='no-underline md:text-[18px] text-[16px] transition-[0.5s] border-none border-b-[var(--primary)] border-b-[2px] p-5px hover:border-solid' href="https://t.me/YunusFronted">Вконтакте</a></li>
                <li className='list-none flex gap-[5px] items-center'><div><TgIcon className = 'w-[2em] h-[2em]'/></div><a className='no-underline md:text-[18px] text-[16px]  transition-[0.5s] border-none border-b-[var(--primary)] border-b-[2px] p-5px hover:border-solid' href="">Телеграмм</a></li>
                <li className='list-none flex gap-[5px] items-center'><div><VkIcon className = 'w-[2em] h-[2em]'/></div><a className='no-underline md:text-[18px] text-[16px]' href="">Дискорд</a></li>
                <li className='list-none flex gap-[5px] items-center'><div><VkIcon className = 'w-[2em] h-[2em]'/></div><a className='no-underline md:text-[18px] text-[16px]' href="">Ватсап</a></li>
              </ul>
            </nav>
            <div className= 'text-white absolute top-[50px] right-[50px] hover:bg-[var(--second-text)] rounded-[50%] transition-[0.5s]'onClick={handleClick1}><CloseIcon className='w-[2em] h-[2em]'/></div>
          </div>
    </div>  
    <div className={cl(styles.d3, {
        [styles.rotated]: !shadow,
        [styles.notRotated]: shadow
        },'p-[40px] ')} style={{ background: "var(--bg-color)" }}>
          <div className={cl(styles.leftSide)}>
            <Sidebar/>
          </div>
          <section className={cl(styles.body, 'overflow-hidden min-h-[70vh] sm:min-h-[100vh] md:min-h-[100%]')}>
            {children}
          </section>
          <div className={cl(styles.footer)}>
            <nav className='items-center hidden  md:flex justify-center gap-[25px]'>
              <LinkElement direction = '/about/project' title = 'projects'> 
                  Suscipit est consequatur nemo voluptatem est labore saepe
              </LinkElement>
              <LinkElement direction = '/about/content' title = 'beginning'> 
                  Suscipit est consequatur nemo voluptatem est labore saepe
              </LinkElement>
              <LinkElement direction = '/about/skills' title = 'skills'> 
                  Suscipit est consequatur nemo voluptatem est labore saepe
              </LinkElement>
            </nav>
            <div className='flex md:hidden'>
              <Button
                appearance={activeButton === 1 ? 'r' : 'b'}
                size='navigate'
                onClick={() => handleButtonClick(1)}
              >
                projects
              </Button>
              <Button
                appearance={activeButton === 2 ? 'r' : 'b'}
                size='navigate'
                onClick={() => handleButtonClick(2)}
              >about</Button>
            </div>
            <div className='flex md:hidden'>
              <Button
              appearance='r'
              size='navigate'
              onClick={() => handleButtonClick(3)}
            >
              skills
            </Button>
            </div>
          </div>
          <div className={cl('relative flex flex-col  justify-between sm:w-[100%]', styles.rightSide)}>
          <div className='md:flex-col flex gap-[10px] w-[100%]'>
            <div className='relative sm:block hidden overflow-hidden bg-[#ffffff]  
              md:w-[194px] md:h-[175px] w-[124px] h-[111px]'>
                <div className='absolute inset-[3px] hidden sm:block bg-[#000000]'>
                <Image
                    src='fang-yuan.jpg'
                    layout="fill"  
                    objectFit="cover" 
                    alt='art'
                  />
                </div>
            </div>
            <div className='flex md:flex-col gap-[10px] sm:justify-start sm:items-start min-w-full items-center justify-center'>
                <div className='flex-col hidden md:flex gap-[0]'>
                  <div className={cl(styles1.smallText)}>
                    name
                  </div>
                  <div className={cl(styles1.bigText)}>
                    Pulatov Yunus
                    </div>
                </div>
                <div className='flex-col hidden md:flex gap-0'>
                  <div className={cl(styles1.smallText)}>
                    occupation
                  </div>
                  <div className={cl(styles1.bigText)}>
                      Fronted developer
                  </div>
                </div>
                <div className='hidden md:flex flex-col gap-0 min-w-full'>
                    <div className={cl(styles1.smallText)}>
                      corporation
                    </div>
                    <div className={cl(styles1.bigText)}>
                      none
                    </div>
                </div>
                <div className='hidden md:flex flex-col gap-0'>
                    <div className={cl(styles1.smallText)}>
                      social
                    </div>
                    <Button onClick={handleClick1}  size='flat' appearance='b'>
                          <div>
                              Open Connection
                          </div>
                          <div>
                              <ConnectionIcon />
                          </div>
                      </Button>
                </div>
                <div className='flex flex-col gap-[10px] w-full md:hidden'>
                  <div className='md:hidden flex sm:flex-row flex-col gap-[10px]'>  
                    <div className='md:hidden flex md:flex-col justify-between gap-[10px]'>
                      <div className='flex flex-col gap-0'>
                        <div className={cl(styles1.smallText)}>
                          name
                        </div>
                        <div className={cl(styles1.bigText)}>
                          Pulatov Yunus
                        </div>
                      </div>
                      <div className='flex flex-col gap-0'>
                        <div className={cl(styles1.smallText)}>
                          occupation
                        </div>
                        <div className={cl(styles1.bigText)}>
                          Fronted developer
                        </div>
                      </div>
                    </div>
                    <div className='md:hidden flex md:flex-col justify-between gap-[10px]'>
                      <div className='flex flex-col gap-0'>
                        <div className={cl(styles1.smallText)}>
                          corporation
                        </div>
                        <div className={cl(styles1.bigText)}>
                          none
                        </div>
                      </div>
                      <div className='hidden flex-col gap-0 sm:flex'>
                        <span className={cl(styles1.smallText)}>
                          social
                        </span>
                        <Button onClick={handleClick1}  size='flat' appearance='b'>
                              <div>
                                Open Connection
                              </div>
                              <div>
                                  <ConnectionIcon />
                              </div>
                          </Button>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col gap-0 sm:hidden w-full'>
                        <span className={cl(styles1.smallText)}>
                          social
                        </span>
                        <Button onClick={handleClick1}  size='flat' appearance='b'>
                              <div>
                                Open Connection
                              </div>
                              <div>
                                  <ConnectionIcon />
                              </div>
                          </Button>
                  </div>
              </div>
            </div>
          </div>
          <div className='hidden md:block'>
              <div className={cl(inter.className, 'uppercase text-[18px] tracking-[7.5%]  text-[var(--primary)] ')}>
                Motto
              </div>
              <div className='none md:block'>
                <P size='s' appearance='sw'>
                  whether you succeed or fail when you look back there’s nothing left
                </P>
              </div>
          </div>
         </div>
          <header className={cl(styles.header, 'sm:block hidden')}>
            <Header/>
          </header>
    </div>
 </div>
  )
}