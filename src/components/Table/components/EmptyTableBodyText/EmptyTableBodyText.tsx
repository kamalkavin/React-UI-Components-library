import React from 'react';
import { useCustomTheme } from '../../../../commons';
import Styles from './styles/TableBodyText.style';
export const EmptyTableBodyText = ({ text }) => {
	const theme = useCustomTheme();
	const classes = Styles({ theme: theme as any });
	return (
		<tbody>
			<tr>
				<td>
					<div data-cy='empty-table' className={classes.emptyTable}>
						{text}
					</div>
				</td>
			</tr>
		</tbody>
	);
};
