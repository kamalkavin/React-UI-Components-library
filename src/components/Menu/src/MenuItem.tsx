import React, { memo, forwardRef, useCallback } from 'react';
import cx from 'classnames';
import Box, { BoxProps } from 'ui-box';
import { useStyleConfig, useCustomTheme } from '../../../commons';
import { MenuItemStyles } from '../styles/Menu.style';
// import { IconList } from '../../SvgIcon/SVIconLibrary';

const noop = () => {};

const pseudoSelectors = {
	_hover: '&[data-isselectable="true"]:not([aria-current="true"]):not([aria-checked="true"]):not(:focus):not(:active):hover,&[aria-current="true"], &[data-isselectable="true"]:active,&[data-isselectable="true"]:not([aria-current="true"]):not([aria-checked="true"]):focus, &[aria-selected="true"]',
	_current: '&[aria-current="true"], &[aria-checked="true"]',
	_isSelectable: '&[data-isselectable="true"]',
	_disabled: '&:disabled, &[aria-disabled="true"]',
};

export interface MenuItemProps extends BoxProps<any> {
	is?: any;
	className: string;
	onSelect: any;
	icon: any;
	children: Node;
	secondaryText: any;
	disabled: Boolean;
}

const MenuItem = memo(
	forwardRef(function MenuItem(props: MenuItemProps, ref) {
		const {
			is = 'div',
			children,
			className,
			appearance = 'default',
			disabled,
			secondaryText,
			intent = 'none',
			icon,
			onSelect = noop,
			...passthroughProps
		} = props;

		const theme: any = useCustomTheme();
		const menuItemStyle = MenuItemStyles(theme);

		const { className: menuItemClassName, ...menuItemProps } = useStyleConfig({}, pseudoSelectors, menuItemStyle);

		const handleClick = useCallback(
			(event) => {
				if (disabled) return;
				onSelect(event);
			},
			[disabled, onSelect]
		);

		return (
			<Box
				{...menuItemProps}
				is={is}
				role='menuitem'
				data-isselectable='true'
				tabIndex='0'
				className={cx(menuItemClassName, className)}
				onClick={handleClick}
				aria-disabled={disabled}
				ref={ref}
				// height={icon ? 40 : 32}
				{...menuItemProps}
				{...passthroughProps}>
				{children}
				{secondaryText && <span>{secondaryText}</span>}
			</Box>
		);
	})
);

export default MenuItem;
