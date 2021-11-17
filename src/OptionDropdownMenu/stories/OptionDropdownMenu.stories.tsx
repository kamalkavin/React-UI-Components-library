import React from 'react';
import { storiesOf } from '@storybook/react';
import OptionDropdownMenu from '../OptionDropdownMenu';

const optionDropdown = [
	{
		name: 'Add',
		actionCallback: () => {
			document.body.innerHTML = "<span data-cy='options'>Test</span>";
		},
		isDisable: false,
		hide: false,
		customClass: '',
	},
	{
		name: 'Remove',
		actionCallback: () => {},
		isDisable: true,
		customClass: 'remove-class',
	},
];

storiesOf('OptionDropdownMenu', module)
	.addParameters({ component: OptionDropdownMenu })
	.add('default', () => <OptionDropdownMenu dropdownList={optionDropdown} name='dropdown-options' />);
