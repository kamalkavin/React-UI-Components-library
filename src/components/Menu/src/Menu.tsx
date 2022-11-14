import React, { ReactNode, useEffect, useRef, useState } from 'react';
import MenuDivider from './MenuDivider';
import MenuGroup from './MenuGroup';
import MenuItem from './MenuItem';
import MenuOption from './MenuOption';
import MenuOptionsGroup from './MenuOptionsGroup';
import { MenuContainerStyles } from '../styles/Menu.style';

import { useCustomTheme } from '../../../commons';
import cx from 'classnames';
import Box, { BoxProps } from 'ui-box';
import { useStyleConfig } from '../../../commons';
import MenuSearch from './MenuSearch';
const pseudoSelectors = {
	_active: '&:not([disabled]):active, &:not([disabled])[aria-expanded="true"], &:not([disabled])[data-active]',
	_disabled: '&[disabled]',
	_focus: '&:not([disabled]):focus',
	_focusAndActive:
		'&:not([disabled]):focus:active, &:not([disabled])[aria-expanded="true"]:focus, &:not([disabled])[data-active]:focus',
	_hover: '&:not([disabled]):hover',
};

interface MenuProps extends BoxProps<any> {
	name: string;
	children: any;
	align?: 'start' | 'end' | 'center';
	Group?: ReactNode;
	Item?: ReactNode;
	content?: ReactNode | string;
	customClass?: string;
	activeState?: string;
}

const Menu = ({ children, name, content, activeState = 'click', align = 'start', customClass, ...rest }: MenuProps) => {
	const menuRef = useRef(null);
	const firstItem: any = useRef();
	const lastItem: any = useRef();

	const menuItems: any = useRef([]);

	const theme: any = useCustomTheme();
	const containerStyle = MenuContainerStyles(theme);
	const { className: containerClassName, ...containerBoxProps } = useStyleConfig({}, pseudoSelectors, containerStyle);

	useEffect(() => {
		if (!menuRef.current) return;
		const currentMenuRef: any = menuRef.current;
		menuItems.current = [
			...currentMenuRef.querySelectorAll(
				'[role="menuitemradio"]:not([disabled]), [role="menuitem"]:not([disabled])'
			),
		];

		firstItem.current = menuItems.current[0];
		lastItem.current = menuItems.current[menuItems.current.length - 1];

		// Go to next/previous item if it exists
		// or loop around
		const focusNext = (currentItem, startItem) => {
			// Determine which item is the startItem (first or last)
			const goingDown = startItem === firstItem.current;

			// Helper function for getting next legitimate element
			const move = (elem) => {
				const indexOfItem = menuItems.current.indexOf(elem);

				if (goingDown) {
					if (indexOfItem < menuItems.current.length - 1) {
						return menuItems.current[indexOfItem + 1];
					}

					return startItem;
				}

				if (indexOfItem - 1 > -1) {
					return menuItems.current[indexOfItem - 1];
				}

				return startItem;
			};

			// Make first move
			const nextItem = move(currentItem);

			// Focus the first one that's not disabled
			nextItem.focus();
		};

		function onKeyPressListener(e) {
			const { target } = e;
			const menuItem = menuItems.current && menuItems.current.find((item) => item === target);

			if (!menuItem) {
				return;
			}

			if (e.key === 'ArrowDown') {
				e.preventDefault();
				focusNext(menuItem, firstItem.current);
			}

			if (e.key === 'ArrowUp') {
				e.preventDefault();
				focusNext(menuItem, lastItem.current);
			}

			if (e.key === 'Home') {
				e.preventDefault();
				firstItem.current.focus();
			}

			if (e.key === 'End') {
				e.preventDefault();
				lastItem.current.focus();
			}
		}

		currentMenuRef.addEventListener('keydown', onKeyPressListener);

		return () => {
			currentMenuRef.removeEventListener('keydown', onKeyPressListener);
		};
	}, [menuRef]);

	const [show, setShow] = useState(content ? false : true);
	const wrapperRef = useRef(null);
	const uniqId = Math.random();

	/**
	 * Hook that alerts clicks outside of the passed ref
	 */
	useEffect(() => {
		/**
		 * Alert if clicked on outside of element
		 */
		const handleClickEventOnMenu = (event) => {
			if (
				show &&
				!['menusearch', 'menuitemoption', `menu-toggle-target${uniqId}`].includes(
					event.target.getAttribute('role')
				) &&
				(!event.target.getAttribute('class') || !event.target.getAttribute('class').includes('exportToggle'))
			) {
				setShow(false);
			}
		};

		// Bind the event listener
		document.addEventListener('click', handleClickEventOnMenu);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener('click', handleClickEventOnMenu);
		};
	}, [wrapperRef, show]);

	const handleMouseEnter = () => {
		if (activeState === 'hover') {
			setShow(true);
		}
	};

	const handleMouseLeave = () => {
		if (activeState === 'hover') {
			show && setShow(false);
		}
	};

	const toggleShow = () => {
		setShow(!show);
	};
	return (
		<Box
			data-cy={name}
			ref={wrapperRef}
			onMouseEnter={() => handleMouseEnter()}
			onMouseLeave={() => handleMouseLeave()}>
			{content && (
				<Box onClick={toggleShow} role={'menu-toggle-target' + uniqId} {...rest}>
					{content}
				</Box>
			)}
			{show && (
				<Box display='flex' justifyContent={align} position={activeState === 'hover' ? 'relative' : 'initial'}>
					<Box className={cx(containerClassName, customClass)} ref={menuRef} {...containerBoxProps} {...rest}>
						{children}
					</Box>
				</Box>
			)}
		</Box>
	);
};

const Item = ({ children, ...rest }) => <MenuItem {...rest}>{children}</MenuItem>;
const Group = ({ children, ...rest }) => <MenuGroup>{children}</MenuGroup>;
const Divider = (props) => <MenuDivider {...props}></MenuDivider>;
const Search = (props) => <MenuSearch {...props}></MenuSearch>;
const Option = ({ children, ...rest }) => (
	<MenuOption id='menuOption' {...rest}>
		{children}
	</MenuOption>
);
const OptionsGroup = ({ children, customClassItem, ...rest }) => (
	<MenuOptionsGroup {...rest} customClassItem={customClassItem}>
		{children}
	</MenuOptionsGroup>
);

Menu.Item = Item;
Menu.Divider = Divider;
Menu.Group = Group;
Menu.Option = Option;
Menu.OptionsGroup = OptionsGroup;
Menu.Search = Search;

export default Menu;
