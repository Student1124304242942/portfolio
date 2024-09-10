 'use client';
import React, { useEffect, useState } from 'react';
import { LinkElementProps } from './Link.props';
import { Big_Shoulders_Display } from 'next/font/google';
import UnionIcon from '@/icons/union.svg';
import cl from 'classnames';
import Link from 'next/link';
import P from '../P/P';
import styles from './Link.module.css';
import {  usePathname } from 'next/navigation';  
const inter1 = Big_Shoulders_Display({ subsets: ['latin'], weight: '800' });

const LinkElement = ({ children, title, direction }: LinkElementProps) => {
    const path = usePathname();
    const [isActive, setIsActive] = useState<boolean>(false);

    useEffect(() => {
        setIsActive(path === direction);
    }, [path, direction]);

    return (
        <Link href={direction} className={cl('border-l-[2px] border-solid border-[#242425] w-[151px]', {
            [`border-[var(--primary)] ${styles.active}`]: isActive,
        })}>
            <div className={cl('flex items-center justify-between h-[23px] overflow-hidden py-[5px] pl-[10px] bg-[#242425]', styles.titleParent)}>
                <div className={cl('text-[18px] text-[var(--first-text)] tracking-[7.5%] uppercase', inter1.className)}>
                    {title}
                </div>
                <div>
                    <UnionIcon className='w-[2em] h-[2em]' />
                </div>
            </div>
            <div className='w-[100%] bg-[#333333] py-[10px] pl-[10px]'>
                <div className='w-[102px] relative'>
                    <P size='sss' appearance='wh'>
                        {children}
                    </P>
                </div>
            </div>
        </Link>
    );
}

export default LinkElement;

