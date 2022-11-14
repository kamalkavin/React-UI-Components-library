import React, { FC, useState } from 'react';

import useInternalStyles from '../styles/PillInput.style';
import { Menu } from '../../../components';
import Box from 'ui-box';
import cx from 'classnames';
interface IDropdownListProps {
	selectedList: any;
	unSelectedList: any;
	id: any;
	name: any;
	onOptionUnSelection: any;
	onOptionSelection: any;
	positionFlag: boolean;
}
const DropdownList: FC<IDropdownListProps> = (props: IDropdownListProps) => {
	const { name, selectedList, unSelectedList, onOptionUnSelection, onOptionSelection, positionFlag } = props;
	const updatedUnSelectedList = unSelectedList.slice(0, unSelectedList.length - 1);
	const [filterValue, setFilterValue] = useState('');
	const classes = useInternalStyles.PillInputLayoutStyles();

	return (
		<Box is='div' role='tagsMenuList'>
			<Menu
				name={`${name}-selectDropdown`}
				className={cx(classes.dropdownMenu, positionFlag ? classes.DropdownToTop : '')}>
				<Menu.Search placeholder='Filter Values...' searchFilter={(value) => setFilterValue(value)} />
				<Menu.Divider />
				<Box is='div' className={classes.optionsGroup}>
					{selectedList.length > 0 && (
						<Menu.OptionsGroup
							options={selectedList}
							selected={selectedList.map((item) => item.value)}
							customClassItem={''}
							onChange={(selected) => onOptionUnSelection(selected)}
							searchFilter={filterValue}>
							{}
						</Menu.OptionsGroup>
					)}

					{updatedUnSelectedList.length > 0 && (
						<Menu.OptionsGroup
							options={updatedUnSelectedList}
							selected={[]}
							customClassItem={''}
							onChange={(selected) => onOptionSelection(selected)}
							searchFilter={filterValue}
							showDivider>
							{}
						</Menu.OptionsGroup>
					)}
				</Box>
			</Menu>
		</Box>
	);
};
export default DropdownList;
