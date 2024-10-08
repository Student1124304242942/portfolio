import {  DetailedHTMLProps, ReactNode } from "react";

export interface BtnProps extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    appearance?: 'b' | 'r';
    size?: 'flat' | 'normal' | 'navigate';
    children: ReactNode;
}
