// Define a default UI for filtering
import React from 'react';

import InputField from '../../InputField/InputField';

export const DefaultColumnFilter = ({ column: { filterValue, preFilteredRows, setFilter, Header } }) => {
	return (
		<InputField
			name='test'
			width={'100%'}
			type='text'
			placeHolder={`Filter ${Header}...`}
			onChange={(e) => {
				setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
			}}
		/>
	);
};
