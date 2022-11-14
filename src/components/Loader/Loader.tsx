import React, { FC } from 'react';
import Box from 'ui-box';
import useInternalStyles from './styles/Loader.style';

export const pseudoSelectors = {
	_active: '&:not([disabled]):active, &:not([disabled])[aria-expanded="true"], &:not([disabled])[data-active]',
	_disabled: '&[disabled]',
	_focus: '&:not([disabled]):focus',
	_focusAndActive:
		'&:not([disabled]):focus:active, &:not([disabled])[aria-expanded="true"]:focus, &:not([disabled])[data-active]:focus',
	_hover: '&:not([disabled]):hover',
};

interface Loader {
	variant?: string;
	size?: string;
	isLoading?: boolean;
	disabled?: boolean;
}

const Loader: FC<Loader> = (props: Loader) => {
	const { variant = 'default', isLoading = true, ...restProps } = props;
	const classes = useInternalStyles.LoaderStyles();
	return (
		<Box is={'div'} {...restProps} className={classes.container}>
			{isLoading && (
				<>
					<Box className={classes.dotOne}></Box>
					<Box className={classes.dotTwo}></Box>
					<Box className={classes.dotThree}></Box>
				</>
			)}
		</Box>
	);
};

export default Loader;
