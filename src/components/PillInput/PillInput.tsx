/**
 *
 * PillInput component
 *
 */

import React, { FC, memo, forwardRef, useState, useRef, useEffect } from 'react';
import useInternalStyles from './styles/PillInput.style';
import Box, { BoxProps } from 'ui-box';
import { ChevronDownIcon } from '../../icons';
import { useStyleConfig } from '../../commons';
import { Div, Span } from '..';
import DropdownList from './components/Dropdown';
import SelectedPills from './components/SelectedPills';
import { pillConstants } from './constants/PillInputConstants';
import { IPillList } from './interfaces/IPill';

export interface PillInputProps extends BoxProps<any> {
	name: string;
	id?: string;
	unSelectedOptions: IPillList[];
}

export const pseudoSelectors = {
	_active: '&:not([disabled]):active, &:not([disabled])[aria-expanded="true"], &:not([disabled])[data-active]',
	_disabled: '&[disabled]',
	_focus: '&:not([disabled]):focus',
	_hover: '&:not([disabled]):hover',
};

const PillInput: FC<PillInputProps> = memo(
	forwardRef(function PillInput(props: PillInputProps, forwardedRef) {
		const {
			name = 'Tags',
			id,
			className,
			userSelectedOptions,
			unSelectedOptions,
			selectedItems,
			isDisabled,
			defaultPillwidth = 122,
			...restProps
		} = props;
		const classes = useInternalStyles.PillInputLayoutStyles();
		const internalStyles = useInternalStyles.PillInputStyles();
		const { className: themedClassName, ...boxProps } = useStyleConfig({}, pseudoSelectors, internalStyles);

		const [showMenu, setShowMenu] = useState(false);
		const [selectedList, setSelectedList] = useState<IPillList[]>(userSelectedOptions || []);
		const [unSelectedList, setUnSelectedList] = useState<IPillList[]>(unSelectedOptions || []);
		const [pillContainerSize, setPillContainerSize] = useState(280);
		const [displayToTop, setDisplayToTop] = useState(false);
		const [count, setCount] = useState(0);

		const wrapperRef = useRef(null) as any;
		const pillRowRef = useRef(null) as any;
		const { placeholderText, dropDownMaxHeight, countAndChevronWidth, menusListArray } = pillConstants;

		const onOptionSelection = (selected) => {
			const updateSelectedItems = selectedList;
			const updateDeselectedItems = [] as IPillList[];
			unSelectedList.forEach((item) => {
				if (selected === item.value) {
					updateSelectedItems.push(item);
				} else {
					updateDeselectedItems.push(item);
				}
			});
			setSelectedList(updateSelectedItems);
			setUnSelectedList(updateDeselectedItems);
			selectedItems(updateSelectedItems);
		};

		const onOptionUnSelection = (selected) => {
			const updateDeselectedItems = unSelectedList;
			const updateSelectedItems = [] as IPillList[];
			selectedList.forEach((item) => {
				if (selected === item.value) {
					updateDeselectedItems.push(item);
				} else {
					updateSelectedItems.push(item);
				}
			});
			setUnSelectedList(updateDeselectedItems);
			setSelectedList(updateSelectedItems);
			selectedItems(updateSelectedItems);
		};

		const removeSelection = (value) => {
			onOptionUnSelection(value);
		};

		useEffect(() => {
			if (wrapperRef && wrapperRef.current) {
				const { bottom, width } = wrapperRef.current.getBoundingClientRect();

				if (width !== 0) {
					setPillContainerSize(width - countAndChevronWidth);
				}
				if (window.innerHeight - bottom <= dropDownMaxHeight) {
					setDisplayToTop(true);
				}
			}
		}, []);

		useEffect(() => {
			const handleClickEventOnMenu = (event) => {
				if (
					showMenu &&
					!menusListArray.includes(event.target.getAttribute('role')) &&
					(!event.target.getAttribute('class') ||
						!event.target.getAttribute('class').includes('exportToggle'))
				) {
					setShowMenu(false);
				}
			};

			// Bind the event listener
			document.addEventListener('click', handleClickEventOnMenu);
			return () => {
				// Unbind the event listener on clean up
				document.removeEventListener('click', handleClickEventOnMenu);
			};
		}, [wrapperRef, showMenu]);
		return (
			<Box
				name={`${name}-pill-input`}
				is='div'
				className={classes.container}
				data-cy='g-pill-input'
				ref={wrapperRef}
				{...restProps}
				{...boxProps}>
				<Box is='div' className={classes.multiselection}>
					<div className={classes.row} ref={pillRowRef} onClick={() => setShowMenu(!showMenu)}>
						{selectedList && selectedList.length === 0 && (
							<Span className={classes.placeHolder}>{placeholderText}</Span>
						)}
						{selectedList && selectedList.length > 0 && (
							<SelectedPills
								selectedList={selectedList}
								disable={isDisabled}
								name='tag-values-selected-pills'
								pillContainerSize={pillContainerSize}
								defaultPillwidth={defaultPillwidth}
								removeSelection={removeSelection}
								remainingPillsCount={(value) => setCount(value)}
							/>
						)}
						<Box is='div' className={classes.moreCount}>
							{count > 0 && `+ ${count}`}
						</Box>
					</div>

					{!isDisabled && (
						<Box is='div' onClick={() => setShowMenu(!showMenu)} className={classes.chevron}>
							<ChevronDownIcon width='14' height='14' name='acc_down_arrow' />
						</Box>
					)}
				</Box>
				<Div className={classes.dropdown}>
					{!isDisabled && showMenu && (
						<DropdownList
							positionFlag={displayToTop}
							name='PillInput'
							selectedList={selectedList}
							unSelectedList={unSelectedList}
							id={'g-pill-input-dropdown'}
							onOptionUnSelection={onOptionUnSelection}
							onOptionSelection={onOptionSelection}
						/>
					)}
				</Div>
			</Box>
		);
	})
);

export default PillInput;
