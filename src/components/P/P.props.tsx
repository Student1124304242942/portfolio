import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface PProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    size?: "s" | "b" | "m" | 'ss' | 'sss',
    appearance?: 'br' | 'sw' | 'wh',
    children: ReactNode
}