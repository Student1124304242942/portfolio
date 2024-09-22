import { HtagProps } from './Htag.props';
import { Big_Shoulders_Display } from 'next/font/google';
import styles from './Htag.styles';
import cl from 'classnames';

const bigShoulders = Big_Shoulders_Display({ subsets: ['latin'], weight: '800' });

export const Htag = ({ tag, children, appearance }: HtagProps): JSX.Element => {
	switch (tag) {
		case 'h1':
			return <h1 className={cl(styles.h1, bigShoulders.className, {
				[styles.black]: appearance === 'bl',
				[styles.primary]: appearance === 'pr'
			})}>{children}</h1>;
		case 'h2':
			return <h2 className={cl(styles.h2, bigShoulders.className,{
				[styles.black]: appearance === 'bl',
				[styles.primary]: appearance === 'pr'
			})}>{children}</h2>;
		case 'h3':
			return <h3 className={cl(styles.h3, bigShoulders.className,{
				[styles.black]: appearance === 'bl',
				[styles.primary]: appearance === 'pr'
			})}>{children}</h3>;
		default:
			return <></>;
	}
};
