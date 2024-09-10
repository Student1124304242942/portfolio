'use client';
import React, { useState } from 'react';
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
const inter = Iceland({subsets: ['latin'], weight: '400'});
const inter1 = Big_Shoulders_Display({subsets: ['latin'], weight: '800'})


export default function Layout({children}: {children: ReactNode}) {
  const router = useRouter();
  const [isActive, setIsActive] = useState<boolean>(false);
  const onClick1  = () => {
    router.push('/about/project');
    setIsActive(!isActive);
  }
  const onClick2  = () => {
    router.push('/about/content');
    setIsActive(!isActive);
  }
  const [shadow, setShadow] = useState<boolean>(true);
  const handleClick1 = () => {
    setShadow(!shadow);
    document.querySelector(`.${styles.d3}`)?.classList.toggle(`${styles.rotated}`);
  }
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
          <section className={cl(styles.body, 'overflow-hidden min-h-[70vh] sm:min-h-[80vh] md:min-h-[0] ')}>
            {children}
          </section>
          <div className={cl(styles.footer, '')}>
            <nav className='items-center hidden  md:flex justify-center gap-[25px]'>
              <LinkElement direction = '/about/project' title = 'projects'> 
                  Suscipit est consequatur nemo voluptatem est labore saepe
              </LinkElement>
              <LinkElement direction = '/about/content' title = 'beginning'> 
                  Suscipit est consequatur nemo voluptatem est labore saepe
              </LinkElement>
            </nav>
            <div className='flex md:hidden'>
              <Button appearance={isActive ? 'r': 'b'} size='navigate' onClick={onClick1}>projects</Button>
              <Button appearance={!isActive ? 'r': 'b'} size='navigate' onClick={onClick2}>about</Button>
            </div>
          </div>
          <div className={cl('relative flex flex-col  justify-between w-[100%]', styles.rightSide)}>
            <div className='md:flex-col flex justify-between  w-[100%] '>
              <div className='relative overflow-hidden bg-[#000000]  
              after:absolute after:top-[-50%] after:left-[-50%] after:bg-red-500 after:animate-spin
              after:origin-bottom-right after:delay-[-1.5s]  md:after:w-[194px] md:after:h-[175px] after:w-[124px] after:h-[111px] after:z-[-1] 
              before:content-[""]  before:absolute before:top-[-50%] before:left-[-50%] before:bg-red-500 before:animate-spin 
              before:origin-bottom-right before:delay-[-3s]  md:before:w-[194px] md:before:h-[175px] before:w-[124px] before:h-[111px]
              md:w-[194px] md:h-[175px] w-[124px] h-[111px] hidden sm:block'>
                <div className='absolute inset-[3px] hidden sm:block bg-[#000000]'>
                <Image
                    src='fang-yuan.jpg'
                    layout="fill"  
                    objectFit="cover" 
                    alt='art'
                  />
                </div>
              </div>
              <div className='flex md:flex-col gap-[10px] sm:justify-start sm:items-start items-center justify-center'>
                <div className='flex-col hidden md:flex gap-[0]'>
                  <div className={cl(styles1.smallText)}>
                    name
                  </div>
                  <div className={cl(styles1.bigText)}>
                    Pulatov Yunus
                    </div>
                </div>
                <div className='flex-col  hidden md:flex gap-0'>
                  <div className={cl(styles1.smallText)}>
                    occupation
                  </div>
                  <div className={cl(styles1.bigText)}>
                      Fronted developer
                  </div>
                </div>
                  <div className='hidden md:flex flex-col gap-0'>
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
                <div className='md:hidden flex flex-col justify-between gap-[10px] [&>*]:flex'>
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
                <div className='md:hidden flex flex-col justify-between gap-[10px] [&>*]:flex'>
                  <div className='flex flex-col gap-0'>
                    <div className={cl(styles1.smallText)}>
                      corporation
                    </div>
                    <div className={cl(styles1.bigText)}>
                      none
                    </div>
                  </div>
                  <div className='flex flex-col gap-0'>
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
          <header className={cl(styles.header, 'hidden sm:block')}>
            <Header/>
          </header>
      </div>
  </div>
  )
}