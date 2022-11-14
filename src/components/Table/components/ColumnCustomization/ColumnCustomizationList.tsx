import React from 'react';

import { useCustomTheme } from '../../../../commons';
import CheckBox from '../../../CheckBox/CheckBox';

import Styles from './styles/ColumnCustomization.style';

const isCheckboxDisabled = function (allColumns, currentCol) {
	const ignoredFields = ['selection', 'expander', 'headerMenu'];
	return (
		currentCol.isVisible &&
		allColumns.filter((column) => column.isVisible && !ignoredFields.includes(column.id)).length == 1
	);
};

export const ColumnCustomizationList = ({ allColumns }: any) => {
	const theme = useCustomTheme();
	const classes = Styles({ theme: theme as any });
	const list: any = [];
	allColumns.map(
		(column, i) =>
			!column.disableResizing &&
			!column['disableHiding'] &&
			list.push(
				<li className={classes.flyingMenuItem} key={i}>
					<CheckBox
						label={typeof column.Header !== 'function' ? ' ' + column.Header : ' ' + column.id}
						labelPosition='right'
						variant='primary'
						marginX={0}
						marginY={0}
						disabled={isCheckboxDisabled(allColumns, column)}
						{...column.getToggleHiddenProps({ title: '' })}
					/>
				</li>
			)
	);

	return list;
};
