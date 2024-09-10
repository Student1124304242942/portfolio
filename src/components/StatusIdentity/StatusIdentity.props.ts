import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface StatusIdentityProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
}