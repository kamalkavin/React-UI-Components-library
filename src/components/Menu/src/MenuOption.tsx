import React, { memo, useCallback } from 'react';
import { useStyleConfig, useCustomTheme } from '../../../commons';
import cx from 'classnames';
import Box, { BoxProps } from 'ui-box';
import { MenuStyles, MenuItemStyles } from '../styles/Menu.style';
import { SelectedIcon } from '../../../icons';
const noop = () => {};

export interface MenuOptionProps extends BoxProps<any> {
	id: string;
	onSelect?: any;
	children: Node;
	secondaryText?: Node;
	isSelected?: any;
	varient?: string;
	customClass?: string;
}

const pseudoSelectors = {
	_hover: '&[data-isselectable="true"]:not([aria-current="true"]):not([aria-checked="true"]):not(:focus):not(:active):hover,&[aria-current="true"], &[data-isselectable="true"]:active,&[data-isselectable="true"]:not([aria-current="true"]):not([aria-checked="true"]):focus, &[aria-checked="true"]',
	_current: '&[aria-current="true"], &[aria-checked="true"]',
	_isSelectable: '&[data-isselectable="true"]',
	_disabled: '&:disabled, &[aria-disabled="true"]',
};

const MenuOption = memo(function MenuOption({
	id,
	children,
	height = 40,
	varient = 'default',
	onSelect = noop,
	secondaryText,
	isSelected = false,
	customClass,
	showSelectedStyle = false,
	...rest
}: MenuOptionProps) {
	// const { id, children, height = 40, varient = 'default', onSelect = noop, secondaryText, isSelected = false } = props;

	const theme: any = useCustomTheme();
	const menuItemStyle = MenuItemStyles(theme);
	const classes = MenuStyles();
	const { className: menuItemClassName, ...menuItemProps } = useStyleConfig({}, pseudoSelectors, menuItemStyle);

	const handleClick = useCallback((e) => onSelect(e), [onSelect]);

	// const { onKeyDown, tabIndex } = useClickable()

	return (
		<Box
			id={id}
			{...menuItemProps}
			role='menuitemoption'
			// tabIndex={tabIndex}
			className={cx(menuItemClassName, customClass, 'menu123')}
			// className={themedClassName}
			onClick={handleClick}
			// onKeyDown={onKeyDown}
			data-isselectable='true'
			aria-checked={isSelected && showSelectedStyle}
			// height={height}
		>
			{isSelected && (
				// <i class="fa-solid fa-clock-five"></i>
				<Box display={'contents'}>
					<SelectedIcon className={classes.selectedIcon} width='12px' height='10px' name='menu_selected' />
				</Box>
			)}
			{/* <Text {...textProps} marginRight={16} flex={1}> */}
			{children}
			{/* </Text> */}
			{
				secondaryText && { secondaryText } // <Text marginRight={16} color="muted">
				// </Text>
			}
		</Box>
	);
});

export default MenuOption;
