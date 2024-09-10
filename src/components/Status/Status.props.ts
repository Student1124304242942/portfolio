import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface StatusProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
}