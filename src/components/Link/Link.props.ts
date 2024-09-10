import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface LinkElementProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
    direction: string;
    title: string
}