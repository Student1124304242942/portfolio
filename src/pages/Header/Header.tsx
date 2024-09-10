import React from 'react';
import Status from '@/components/Status/Status';
import StatusIdentity from '@/components/StatusIdentity/StatusIdentity';
import cl from 'classnames';
import { Iceberg } from 'next/font/google';
import { Iceland } from 'next/font/google';

const inter = Iceberg({subsets: ['latin'], weight: '400'});
const inset1 = Iceland({subsets: ['latin'], weight: '400'})

const Header = ({className}: {className?: string}) => {
  return (
    <div className={cl('flex justify-between items-center', {className})}>
        <div className="flex gap-[10px]">
            <div className="flex items-center  gap-[5px]">
                <Status>
                    16
                </Status>
                <StatusIdentity>
                    age
                </StatusIdentity>
            </div>
            <div className="flex items-center gap-[5px]">
                <Status>
                    junior
                </Status>
                <StatusIdentity>
                    level
                </StatusIdentity>
            </div>
        </div>
        <div className={cl("flex gap-[10px] items-center")}>
            <div className={cl("text-[12px] text-[var(--first-text)] tracking-[7.5%] uppercase", inter.className)}>credits</div>
            <div className={cl('text-[14px] tracking-[7.5%] flex uppercase', inset1.className)}>
                <div className="text-[--second-text]">in fronted:</div>
                <div className="text-[--first-text]">10 months</div>
            </div>
            <div className={cl('text-[14px] tracking-[7.5%] flex uppercase', inset1.className)}>
                <div className="text-[--second-text]">work experience:</div>
                <div className="text-[--first-text]">0</div>
            </div>
        </div>
    </div>
  )
}

export default Header