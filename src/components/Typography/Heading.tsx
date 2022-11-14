import { useStyleConfig } from '../../commons';
import React, { forwardRef, memo, FC } from 'react';
import Box, { BoxProps } from 'ui-box';
import useInternalStyles from './styles/Heading.style';
import cx from 'classnames';

const pseudoSelectors = {};

export interface HeadingProps extends BoxProps<any> {
	name: string;
	variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	size?: 'light' | 'bold';
	className?: string;
	fontWeight?: 200 | 300 | 400 | 600 | 700;
}

const Heading: FC<HeadingProps> = memo(
	forwardRef(({ fontWeight, className, size = 'light', variant, name, ...rest }: HeadingProps, ref) => {
		const internalStyles = useInternalStyles();

		const { className: themedClassName, ...boxProps } = useStyleConfig(
			{ variant, size },
			pseudoSelectors,
			internalStyles
		);
		boxProps.fontWeight = fontWeight || boxProps.fontWeight;

		return (
			<Box
				is={variant}
				data-cy={name}
				className={cx(themedClassName, className)}
				ref={ref}
				{...boxProps}
				{...rest}
			/>
		);
	})
);

export default Heading;
