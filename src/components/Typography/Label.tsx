import React, { forwardRef, memo } from 'react';
import Box, { BoxProps } from 'ui-box';
import { createUseStyles } from 'react-jss';
import cx from 'classnames';
import { useCustomTheme } from '../../commons';

interface LabelProps extends BoxProps<any> {
	className?: string;
	disabled?: boolean;
	name: string;
	forId?: any;
}

interface CustomTheme {
	background: string;
}

const useStyles = createUseStyles((theme: CustomTheme) => ({
	Label: (props: LabelProps) => ({}),
}));

const Label = memo(
	forwardRef(function Label(props: LabelProps, ref) {
		const { className, name, forId, ...restProps } = props;
		const theme = useCustomTheme();
		const classes = useStyles({ ...props, theme });
		return (
			<Box
				is='label'
				data-cy={name}
				className={cx(classes.Label, className)}
				ref={ref}
				color={props.disabled ? '#aab1b9' : '#3c4850'}
				htmlFor={forId}
				{...restProps}
			/>
		);
	})
);

export default Label;
