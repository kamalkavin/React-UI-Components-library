import React, { memo } from 'react';
import Box, { BoxProps } from 'ui-box';
import { MenuHeaderStyles } from '../styles/Menu.style';
import cx from 'classnames';
import { useStyleConfig, useCustomTheme } from '../../../commons';

export interface MenuGroupsProps extends BoxProps<any> {
	title?: string;
	children?: any[];
}
const MenuGroup = memo(function MenuGroup(props: MenuGroupsProps) {
	const { children, title } = props;
	const theme: any = useCustomTheme();
	const MenuHeaderStyle = MenuHeaderStyles(theme);

	const { className: menuHeaderClassName, ...menuHeaderProps } = useStyleConfig({}, {}, MenuHeaderStyle);

	return (
		<Box paddingY={8} width='100%' paddingBottom={0}>
			{title && (
				<Box {...menuHeaderProps} role='menuHeader' className={cx(menuHeaderClassName)}>
					{title}
				</Box>
			)}
			{children}
		</Box>
	);
});

export default MenuGroup;
