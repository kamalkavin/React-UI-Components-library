import React, { forwardRef, memo, ReactNode } from 'react';
import cx from 'classnames';
import Box, { BoxProps } from 'ui-box';
import { useStyleConfig, useCustomTheme } from '../../commons';
import useInternalStyles from './styles/CriteriaPill.style';
import { Div, Menu, Span, Tooltip } from '..';
import { CloseIcon, ChevronDownIcon, ChevronRightIcon } from '../../icons';
import { criteriaPillConstants } from './constants/CriteriaPillConstants';
import { getThemingStyles } from '../../utils/utils';

type CriteriaPillVariants = 'primary' | 'critical' | 'major' | 'minor' | 'warning' | 'info' | 'validated';
type PillType = 'filter' | 'text';

export interface CriteriaPillPros extends BoxProps<any> {
	variant?: CriteriaPillVariants;
	isActive?: boolean;
	icon?: ReactNode;
	isRemovable?: boolean;
	disabled?: boolean;
	className?: string;
	is?: any;
	type: PillType;
	label?: string;
	value: string | Array<any>;
	name: string;
	count?: string;
	options?: Array<any>;
	onPillChange: () => void;
	onPillRemove: () => void;
	multiValue?: Array<any>;
}

const pseudoSelectors = {
	_base: '& + button',
	_disabled: '&[disabled]',
};

const CriteriaPill = memo(
	forwardRef(function CriteriaPill(props: CriteriaPillPros, ref) {
		const { pillTextMaxWidth } = criteriaPillConstants;
		const {
			variant = 'primary',
			className,
			disabled = false,
			label = '',
			value,
			count = '',
			type = 'text',
			isRemovable = false,
			icon,
			is = 'div',
			isActive = true,
			onPillChange,
			options,
			onPillRemove,
			multiValue = [],
			textMaxWidth = pillTextMaxWidth,
			...restProps
		}: any = props;

		const Icon = icon;
		const theme = useCustomTheme();
		const themingStyles = getThemingStyles(theme, `components.CriteriaPill`) || {};
		const internalStyles = useInternalStyles();
		const { className: themedClassName, ...boxProps } = useStyleConfig(
			{ variant },
			pseudoSelectors,
			internalStyles
		);

		return (
			<Box
				is={is}
				ref={ref}
				className={cx(themedClassName, className)}
				data-active={isActive || undefined}
				{...boxProps}
				{...restProps}
				disabled={disabled}
				onClick={onPillChange}
				id='g-criteria-pill'>
				<Div display={'flex'} alignItems={'center'} flexWrap={'nowrap'}>
					{/* {icon && <Icon name="filter-icon" width={"16px"} height={"14px"} svg={icon} style={{ display: 'flex', marginRight: '8px' }} />} */}
					{icon && (
						<Div marginRight={8} display={'flex'}>
							<Icon
								color={
									props.disabled
										? themingStyles.variants[variant]._disabled.color
										: themingStyles.variants[variant]._base.color
								}
								width='18px'
								height='18px'
							/>
						</Div>
					)}
					<Div
						width={!multiValue ? '90%' : 'auto'}
						textOverflow={'ellipsis'}
						whiteSpace={'nowrap'}
						flexWrap={'nowrap'}
						overflow={'hidden'}
						display={'flex'}
						alignItems={'center'}>
						{label && (
							<Div
								data-cy={`filter-type`}
								textTransform={'capitalize'}
								marginRight={8}
								color={
									props.disabled
										? themingStyles.variants[variant]._disabled.color
										: themingStyles.variants[variant]._base.color
								}>
								{label}:
							</Div>
						)}
						{type === 'filter' && <GFilterMenu variant={variant} options={options} selected={value} />}
						{type === 'text' && value && (
							<Div
								maxWidth={textMaxWidth}
								data-cy={`filter-value`}
								overflow={'hidden'}
								textOverflow={'ellipsis'}
								marginRight={8}
								display={'flex'}
								alignItems={'center'}
								color={
									props.disabled
										? themingStyles.variants[variant]._disabled.color
										: themingStyles.variants[variant]._base.color
								}>
								<Tooltip position={'bottom'} content={value}>
									<Div>{value}</Div>
								</Tooltip>
								{multiValue &&
									multiValue.length > 0 &&
									multiValue.map((list: any) => (
										<Tooltip position={'bottom'} content={list}>
											<Div display={'flex'}>
												<ChevronRightIcon name={'pill-right'} width={'16px'} height={'16px'} />
												<Div>{list}</Div>
											</Div>
										</Tooltip>
									))}
							</Div>
						)}
					</Div>
					{count && (
						<Div
							marginRight={8}
							color={
								props.disabled
									? themingStyles.variants[variant]._disabled.color
									: themingStyles.variants[variant]._base.color
							}>
							({count})
						</Div>
					)}
					{isRemovable && (
						<Box display={'flex'} cursor={'pointer'} onClick={onPillRemove}>
							<CloseIcon
								color={
									props.disabled
										? themingStyles.variants[variant]._disabled.color
										: themingStyles.variants[variant]._base.color
								}
								name={'close'}
								width={'14px'}
								height={'14px'}
							/>
						</Box>
					)}
				</Div>
			</Box>
		);
	})
);

const GFilterMenu = ({ options, selected, variant }) => {
	const theme = useCustomTheme();
	const themingStyles = getThemingStyles(theme, `components.CriteriaPill`) || {};
	return (
		<Box
			background={themingStyles.variants[variant]._base.filterBackGround}
			display={'flex'}
			alignItems={'center'}
			justifyContent={'center'}
			paddingTop={'4px'}
			paddingBottom={'4px'}
			paddingLeft={'4px'}
			minWidth={'90px'}
			borderRadius={'3px'}
			maxWidth={'250px'}
			marginRight={'8px'}
			paddingRight={'4px'}>
			<Menu
				name='filter'
				content={
					<Div paddingLeft={4} paddingRight={4}>
						<Span paddingLeft={4} paddingRight={4}>
							{selected.length && selected[0]}
						</Span>
						{selected.length > 1 && (
							<Span color={'#7f929e'} paddingLeft={2}>{`+${selected.length - 1} more`}</Span>
						)}
					</Div>
				}>
				<Menu.OptionsGroup
					onChange={(event) => {
						alert(event);
					}}
					customClassItem={''}
					children={''}
					options={options}
					selected={selected}></Menu.OptionsGroup>
			</Menu>
			<Div display={'flex'} paddingLeft={4} paddingRight={4}>
				<ChevronDownIcon name={'filter-pill'} width='16px' height='16px' />
			</Div>
		</Box>
	);
};

export default CriteriaPill;
