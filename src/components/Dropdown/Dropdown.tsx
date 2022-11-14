/**
 *
 * Dropdown
 *
 */

import React, { FC, useRef, useEffect, useState } from 'react';
import { Button } from '..';
import cx from 'classnames';
import Box from 'ui-box';
import { useStyleConfig } from '../../commons';

interface IProps {
	className?: string;
	name: string;
	label?: string;
	items?: Array<any>;
	children?: any;
	type?: string;
	iconAfter?: any;
}
export const pseudoSelectors = {
	_active: '&:not([disabled]):active, &:not([disabled])[aria-expanded="true"], &:not([disabled])[data-active]',
	_disabled: '&[disabled]',
	_focus: '&:not([disabled]):focus',
	_focusAndActive:
		'&:not([disabled]):focus:active, &:not([disabled])[aria-expanded="true"]:focus, &:not([disabled])[data-active]:focus',
	_hover: '&:not([disabled]):hover',
};

const Dropdown: FC<IProps> = (props: IProps) => {
	const dropdownStyle = {};
	const [showMenu, setShowMenu] = useState(false);
	const uniqId = Math.random();

	const {
		// variant = 'default',
		// children,
		name,
		className,
		items,
		children,
		label = '',
		// disabled,
		// iconAfter,
		// iconBefore,
		// is = 'button',
		// isActive = false,
		// isLoading,
		...restProps
	} = props;

	const { className: themedClassName, ...boxProps } = useStyleConfig({}, pseudoSelectors, dropdownStyle);

	const wrapperRef = useRef(null);

	/**
	 * Hook that alerts clicks outside of the passed ref
	 */
	useEffect(() => {
		/**
		 * Alert if clicked on outside of element
		 */
		const handleClick = (event) => {
			if (
				showMenu &&
				event.target.getAttribute('role') !== 'menuitemoption' &&
				event.target.getAttribute('role') !== 'menu-toggle-target' + uniqId
			) {
				setShowMenu(false);
			}
		};

		// Bind the event listener
		document.addEventListener('click', handleClick);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener('click', handleClick);
		};
	}, [wrapperRef, showMenu]);

	return (
		<Box
			// is={is}
			className={cx(themedClassName, className)}
			// data-active={isActive || undefined}
			data-cy={name}
			{...boxProps}
			ref={wrapperRef}>
			<Button
				name={name + 'button'}
				onClick={(e) => {
					setShowMenu(!showMenu);
					e.stopPropagation();
				}}
				role={'menu-toggle-target' + uniqId}
				{...restProps}
				className={showMenu ? 'active-button' : ''}>
				{label}
			</Button>

			{showMenu && children}
		</Box>
	);
};

export default Dropdown;
