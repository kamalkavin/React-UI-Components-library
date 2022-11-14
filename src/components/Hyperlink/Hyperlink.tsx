/**
 *
 * Hyperlink component
 *
 */
import React, { FC, memo, forwardRef } from 'react';
import useInternalStyles from './styles/Hyperlink.style';
import Box from 'ui-box';
import cx from 'classnames';
import { useStyleConfig } from '../../commons';

const pseudoSelectors = {
	_base: '&',
	_hover: '&:hover,&:not([disabled]):hover',
	_active: '&:active,&:not([disabled]):active',
};

export interface HyperlinkProps {
	target?: string;
	url?: string;
	label?: string;
	variant?: 'primary';
	children?: string;
	name: string;
	id?: string;
}
const Hyperlink: FC<HyperlinkProps> = memo(
	forwardRef(function Hyperlink(props: HyperlinkProps, ref) {
		const {
			is = 'Hyperlink',
			url,
			target,
			className,
			children,
			label,
			variant = 'primary',
			name,
			id,
			...restProps
		}: any = props;

		const internalStyles = useInternalStyles();
		const { className: themedClassName, ...boxProps } = useStyleConfig(
			{ variant },
			pseudoSelectors,
			internalStyles
		);

		return (
			<Box is={is} ref={ref} {...boxProps} {...restProps} data-cy={name} id={id}>
				<Box is='a' href={url} target={target} className={cx(themedClassName, className)}>
					{children || label}
				</Box>
			</Box>
		);
	})
);

export default Hyperlink;
