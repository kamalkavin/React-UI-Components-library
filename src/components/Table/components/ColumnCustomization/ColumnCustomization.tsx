import React, { useState, useRef } from 'react';

import { useCustomTheme } from '../../../../commons';
import { CustomizeSettingsIcon } from '../../../../icons';
import useClickOutside from '../../../../commons/hooks/useClickOutside';

import Button from '../../../Button/Button';
import { ColumnCustomizationList } from './ColumnCustomizationList';

import Styles from './styles/ColumnCustomization.style';

export const ColumnCustomization = ({ allColumns, resetColumns }: any) => {
	const theme = useCustomTheme();
	const classes = Styles({ theme: theme as any });
	const [toggleCustomizeList, setToggleCustomizeList] = useState<boolean>(false);
	const ref = useRef(null);
	useClickOutside(ref, () => {
		setToggleCustomizeList(false);
	});
	return (
		<div id='column-customization' ref={ref}>
			<Button
				name='column-cust'
				onClick={(e) => {
					e.preventDefault();
					setToggleCustomizeList(!toggleCustomizeList);
				}}
				isActive={toggleCustomizeList}
				className={classes.customizeSettings}
				iconBefore={<CustomizeSettingsIcon width='14' height='14' name='cust-settings' />}
			/>
			{toggleCustomizeList && (
				<ul id='customizingFlyingMenu' className={classes.customizingFlyingMenu}>
					<li className={classes.flyingMenuHeader}>
						Columns
						<Button
							name='column-cust-reset'
							variant='secondary'
							className={classes.floatRight}
							onClick={(e) => {
								e.preventDefault();
								resetColumns();
							}}>
							Reset
						</Button>
					</li>
					<ul className={classes.flyingMenuItemStack}>
						<ColumnCustomizationList allColumns={allColumns} />
					</ul>
				</ul>
			)}
		</div>
	);
};
