import { Big_Shoulders_Display } from "next/font/google";
import { Iceland } from "next/font/google";
 

const inter0 = Big_Shoulders_Display({subsets: ['latin'], weight: '800'});
const inter1 = Iceland({subsets: ['latin'], weight: '400'});

const styles = {
    smallText: [
        'text-[14px]', 'tracking-[7.5%]', 'uppercase', 'text-[var(--first-text)]', inter1.className,
    ],
    bigText: [
        'text-[18px]', 'tracking-[7.5%]', 'uppercase', 'text-[var(--primary)]', inter0.className
    ]
}

export default styles;