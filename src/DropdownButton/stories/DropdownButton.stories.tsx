import React from 'react';
import { storiesOf } from '@storybook/react';
import DropdownButton from '../DropdownButton';

const callback = (name) => alert(name);

storiesOf('Basics/DropdownButton', module)
	.addParameters({ component: DropdownButton })
	.add('default', () => (
		<DropdownButton
			id='alarmAction'
			title='Action'
			dropdownList={[
				{
					name: 'Add',
					customClass: 'add-dynamic',
					actionCallback: (name) => callback(name),
				},
				{
					name: 'Remove',
					customClass: 'add-remove',
					actionCallback: (name) => callback(name),
				},
			]}
		/>
	))
	.add('With Disable Option', () => (
		<DropdownButton
			id='alarmAction'
			title='Action'
			dropdownList={[
				{
					name: 'Add',
					isDisable: true,
					customClass: 'add-dynamic',
					actionCallback: (name) => callback(name),
				},
				{
					name: 'Remove',
					customClass: 'add-remove',
					actionCallback: (name) => callback(name),
				},
			]}
		/>
	));
