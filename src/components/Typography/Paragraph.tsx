import React, { forwardRef, memo } from 'react';
import Box, { BoxProps } from 'ui-box';
import { createUseStyles } from 'react-jss';
import cx from 'classnames';
import { useCustomTheme } from '../../commons';

export interface ParagraphProps extends BoxProps<any> {
	className?: string;
	name: string;
}

interface CustomTheme {
	background: string;
}

const useStyles = createUseStyles((theme: CustomTheme) => ({
	Paragraph: (props: ParagraphProps) => ({}),
}));

const Paragraph = memo(
	forwardRef(function TextInput(props: ParagraphProps, ref) {
		const { className, name, ...restProps } = props;
		const theme = useCustomTheme();
		const classes = useStyles({ ...props, theme });
		return <Box is='p' data-cy={name} className={cx(classes.Paragraph, className)} ref={ref} {...restProps} />;
	})
);

export default Paragraph;
