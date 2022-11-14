/**
 *
 * Accordion component
 *
 */
import React, { FC, memo, forwardRef, useCallback } from 'react';
import useInternalStyles from './styles/Accordion.style';
import Box, { BoxProps } from 'ui-box';
import { ChevronDownIcon, ChevronRightIcon } from '../../icons';
import Button from '../Button/Button';
import Div from '../Layers/Div';
import Menu from '../Menu/Menu';
import Span from '../Typography/Span';
import ClearTextIcon from '../../icons/ClearText.Icon';
import { useClickOutside, useCustomTheme, useToggle } from '../../commons';
import { getThemingStyles } from '../../utils/utils';
import FormInputField from '../InputField/FormInputField';

export interface AccordionProps extends BoxProps<any> {
	name?: string;
	header?: string;
	subHeader?: any;
	isOpen?: boolean;
	textFilter?: boolean;
	onFilter?: any;
	dropdownFilter?: boolean;
	options?: Array<any>;
	value?: string | Array<any>;
	matches?: number;
	maxHeight?: number;
	onDropdownFilterSelect?: any;
	scrollable?: boolean;
}
const Accordion: FC<AccordionProps> = memo(
	forwardRef(function Accordion(
		{
			header = '',
			subHeader = '',
			children,
			className,
			disabled,
			iconAfter,
			iconBefore,
			name = 'Accordion',
			isOpen = false,
			textFilter,
			dropdownFilter,
			onFilter = () => {},
			onDropdownFilterSelect,
			matches = 0,
			options,
			value,
			maxHeight,
			scrollable = true,
			...restProps
		}: AccordionProps,
		ref
	) {
		const classes = useInternalStyles.AccordianStyles();
		const [isFocused, setIsFocused] = React.useState(false);
		const inputRef = React.useRef<HTMLInputElement>(null);
		const contentRef = React.useRef<any>(null);
		const [toggle, setToggle] = useToggle(isOpen);

		const [filterText, setFilterText] = React.useState('');

		const _handleChange = useCallback(
			(e) => {
				onFilter(e);
				if (e.target.value) {
					setFilterText(e.target.value);
				} else {
					setFilterText('');
				}
			},
			[onFilter]
		);
		const _handleHeaderClick = useCallback((event) => {
			setToggle();
			if (toggle) {
				inputRef?.current?.focus();
				setIsFocused(true);
			}
		}, []);
		const _handleContentClick = useCallback((e) => {
			inputRef?.current?.focus();
			setIsFocused(true);
		}, []);

		const _handleClear = useCallback(
			(e) => {
				setFilterText('');
				onFilter({ target: { value: '' } });
				inputRef?.current?.focus();
				setIsFocused(true);
			},
			[inputRef]
		);

		React.useEffect(() => {
			if (toggle && isFocused) {
				inputRef?.current?.focus();
				setIsFocused(true);
			}
		}, [toggle]);

		const onEscape = function (e) {
			if (e.key === 'Escape' || e.key === 'Tab') {
				inputRef?.current?.blur();
				setIsFocused(false);
			}
		};

		React.useEffect(() => {
			document.addEventListener('keydown', onEscape, false);
			return () => {
				document.removeEventListener('keydown', onEscape, false);
			};
		}, [inputRef]);
		useClickOutside(contentRef, () => {
			setIsFocused(false);
		});

		const ToggleIcon = toggle ? ChevronDownIcon : ChevronRightIcon;
		return (
			<Box className={classes.accordion} data-cy={name} {...restProps}>
				<Box className={classes.head} borderBottomWidth={toggle ? 1 : 0}>
					<Box className={classes.stackGroup}>
						<Button
							name={`accArrowBtn-${header}`}
							variant='tertiary'
							className={classes.accButton}
							onClick={_handleHeaderClick}>
							<ToggleIcon width='16px' height='16px' name='acc_right_arrow' />
							<Box
								data-cy={`accordion-header-label-${name}`}
								className={classes.stackGroupLabel}
								padding={4}
								paddingLeft={8}>
								{header}
								<Box display={'inline'} fontWeight={300}>
									{subHeader === '' ? '' : ' (' + subHeader + ')'}
									{dropdownFilter && ':'}
								</Box>
							</Box>
						</Button>
						{dropdownFilter && (
							<Box display={'inline-flex'} data-cy={`accordion-header-${header}`}>
								<GFilterMenu
									options={options}
									selected={value}
									onFilterSelect={onDropdownFilterSelect}
								/>
							</Box>
						)}
					</Box>
					{textFilter && (filterText || toggle) && (
						<Box display='flex' className={classes.searchInputText}>
							<FormInputField
								paddingY={0}
								paddingLeft={0}
								name={`accoridon-fitler-${name}`}
								paddingRight={filterText ? 8 : 0}
								variant={'transparent'}
								className={classes.searchInput}
								ref={inputRef}
								value={filterText}
								type='text'
								onChange={_handleChange}
								placeholder={'Type to filter'}
								tabIndex={0}
								onFocus={() => setIsFocused(true)}
								onBlur={() => setIsFocused(false)}
								onKeyPress={onEscape}
								opacity={isFocused || filterText ? 1 : 0}
								pointerEvents={!isFocused ? 'none' : 'auto'}
							/>
							{filterText && (
								<Box
									className={classes.clearTextIcon}
									flexDirection='row-reverse'
									data-cy={'clear-icon'}
									onClick={_handleClear}>
									<ClearTextIcon width='16' height='16' name='gAccFilterClear' />
								</Box>
							)}
						</Box>
					)}
				</Box>
				<Box
					ref={contentRef}
					className={
						toggle
							? isFocused
								? `${classes.activeBody} ${classes.focusedBody}`
								: `${classes.body} ${classes.activeBody}`
							: classes.body
					}
					onClick={_handleContentClick}
					onScroll={_handleContentClick}
					overflow={!scrollable && toggle ? 'visible' : 'auto'}
					style={
						toggle && maxHeight
							? { maxHeight: maxHeight }
							: !scrollable && toggle
							? { maxHeight: 'initial' }
							: {}
					}>
					{children}
					{filterText && (
						<Box
							data-cy={'filter-count'}
							className={classes.itemsMatchString}>{`${matches} items match "${filterText}"`}</Box>
					)}
				</Box>
			</Box>
		);
	})
);

const GFilterMenu = ({ options, selected, onFilterSelect }) => {
	const theme = useCustomTheme();
	const themingStyles = getThemingStyles(theme, `components.Accordian`) || {};
	const classes = useInternalStyles.AccordianStyles();
	return (
		<Box
			background={themingStyles.baseStyle.backgroundColor}
			display={'flex'}
			minWidth={'90px'}
			borderRadius={'3px'}
			maxWidth={'250px'}
			paddingLeft={12}>
			<Menu
				name='filter'
				content={
					<Button name='dropDownbtn' variant={'tertiary'} className={classes.accButton}>
						<Div paddingLeft={4} paddingRight={4} display={'flex'} alignItems={'center'}>
							<Span paddingRight={4} color={themingStyles.baseStyle.color}>
								{selected.length && selected[0]}
							</Span>
							{selected.length > 1 && (
								<Span color={'#7f929e'} paddingLeft={2}>{`+${selected.length - 1} more`}</Span>
							)}
							<Span paddingLeft={4} color={themingStyles.baseStyle.color}>
								<ChevronDownIcon name={'filter-dropdown'} width='16' height='16' />
							</Span>
						</Div>
					</Button>
				}>
				<Menu.OptionsGroup
					onChange={(event) => {
						onFilterSelect(event);
					}}
					customClassItem={''}
					children={''}
					options={options}
					selected={selected}></Menu.OptionsGroup>
			</Menu>
		</Box>
	);
};
export default Accordion;
