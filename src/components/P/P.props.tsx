import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface PProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    size?: "s" | "b" | "m",
    appearance?: 'br' | 'sw',
    children: ReactNode
}