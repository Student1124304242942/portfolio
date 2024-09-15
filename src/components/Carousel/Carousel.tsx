'use client'
import { ReactNode, useState } from "react";
import cl from "classnames";
import Right from '@/icons/right.svg';
import Left from '@/icons/left.svg';

export default function Carousel({ children: slides }: { children: ReactNode[] }) {
    const [curr, setCurr] = useState(0);

    const prev = () => setCurr((e) => (e === 0 ? slides.length - 1 : e - 1));
    const next = () => setCurr((e) => (e === slides.length - 1 ? 0 : e + 1));

    return (
        <div className={cl("overflow-hidden relative w-full h-full")}>
            <div
                className={cl("relative transition-transform duration-500 w-full h-full flex")}
                style={{ transform: `translateX(-${curr * 100}%)` }}>
                {slides}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <div onClick={prev} className="cursor-pointer"><Left className = 'w-[2em] h-[2em]'/></div>
                <div onClick={next}  className="cursor-pointer"><Right className = 'w-[2em] h-[2em]'/></div>
            </div>
        </div>
    );
}