import React, { memo, forwardRef } from 'react';
import MenuOption from './MenuOption';
import Box, { BoxProps } from 'ui-box';
import { MenuHeaderStyles } from '../styles/Menu.style';
import cx from 'classnames';
import { useStyleConfig, useCustomTheme } from '../../../commons';
import MenuDivider from './MenuDivider';

export interface MenuOptionsGroupProps extends BoxProps<any> {
	title: string;
	selected: any;
	onChange?: any;
	options: Array<any>;
	customClassItem?: string;
	showDivider?: boolean;
	showSelectedStyle?: boolean;
}
const MenuOptionsGroup = memo(
	forwardRef(function MenuOptionsGroup(props: MenuOptionsGroupProps, ref) {
		const {
			onChange,
			options,
			selected,
			title,
			customClassItem,
			searchFilter = '',
			showDivider = false,
			showSelectedStyle = false,
		} = props;

		const theme: any = useCustomTheme();
		const MenuHeaderStyle = MenuHeaderStyles(theme);
		const { className: menuHeaderClassName, ...menuHeaderProps } = useStyleConfig({}, {}, MenuHeaderStyle);

		const checkIsSelected = (value) => {
			return (selected || []).filter((item: any) => item === value).length > 0;
		};
		const optionsList = options.filter((menu) => {
			if (searchFilter === '') {
				return menu;
			} else {
				return menu.label.toUpperCase().includes(searchFilter.toUpperCase());
			}
		});

		return (
			<Box width='100%'>
				{showDivider && optionsList.length > 0 && <MenuDivider />}
				<Box paddingY={8}>
					{title && (
						<Box {...menuHeaderProps} role='menuHeader' className={cx(menuHeaderClassName)}>
							{title}
						</Box>
					)}
					<Box>
						{optionsList.map((option) => {
							return (
								<MenuOption
									id={option.value}
									customClass={customClassItem}
									isSelected={checkIsSelected(option.value)}
									onSelect={() => onChange(option.value)}
									showSelectedStyle={showSelectedStyle}>
									{option.label}
								</MenuOption>
							);
						})}
					</Box>
				</Box>
			</Box>
		);
	})
);

export default MenuOptionsGroup;
