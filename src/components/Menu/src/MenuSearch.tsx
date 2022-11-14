import { FormInputField } from '../../../components';
import React, { useState, memo, forwardRef } from 'react';
import { MenuSearchStyles } from '../styles/Menu.style';
import Box, { BoxProps } from 'ui-box';
import cx from 'classnames';
import { SearchIcon } from '../../../icons';

export interface MenuSearchProps extends BoxProps<any> {
	searchFilter: any;
	customClass?: string;
	placeholder?: string;
}

const MenuSearch = memo(
	forwardRef(function MenuSearch(props: MenuSearchProps, ref) {
		const { searchFilter, placeholder, customClass } = props;
		const [filterValue, setFilterValue] = useState('');
		const classes = MenuSearchStyles();

		const updateSearchValue = (value) => {
			setFilterValue(value);
			searchFilter(value);
		};

		return (
			<Box className={classes.searchContainer}>
				<Box is={'div'} className={classes.searchIcon}>
					<SearchIcon width='22px' height='22px' name='search_icon' />
				</Box>
				<FormInputField
					variant={'transparent'}
					name={'menu-search'}
					role='menusearch'
					onFocus={(event) => event.target.select()}
					className={cx(classes.searchInput, customClass)}
					autoFocus
					placeholder={placeholder}
					value={filterValue}
					onChange={(e) => updateSearchValue(e.target.value)}></FormInputField>
			</Box>
		);
	})
);

export default MenuSearch;
