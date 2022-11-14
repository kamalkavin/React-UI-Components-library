import React, { memo, forwardRef, FC } from 'react';
import cx from 'classnames';
import Box, { BoxProps } from 'ui-box';
import { useStyleConfig } from '../../commons';

const pseudoSelectors = {
	_hover: '&:hover',
	_active: '&:active',
};

const internalStyles = {};

export interface DivProps extends BoxProps<any> {
	activeElevation?: 0 | 1 | 2 | 3 | 4;
	title?: string;
	className?: string;
	elevation?: 0 | 1 | 2 | 3 | 4;
	hoverElevation?: 0 | 1 | 2 | 3 | 4;
	onClick?: any;
	ref?: any;
}

const Div: FC<DivProps> = memo(
	forwardRef(({ activeElevation, className, elevation, hoverElevation, onClick, ...rest }: DivProps, ref) => {
		const { className: themedClassName, ...styleProps } = useStyleConfig(
			{
				elevation,
				hoverElevation,
				activeElevation,
			},
			pseudoSelectors,
			internalStyles
		);

		return <Box ref={ref} onClick={onClick} className={cx(className, themedClassName)} {...styleProps} {...rest} />;
	})
);

export default Div;
