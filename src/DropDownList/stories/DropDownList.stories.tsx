import React from 'react';
import { storiesOf } from '@storybook/react';
import DropDownList from '../DropDownList';

const select = () => {
	console.log('Slected');
};
storiesOf('Basics/DropDownList', module)
	.addParameters({ component: DropDownList })
	.add('default', () => (
		<DropDownList label='Action' list={[{ value: 'test', label: 'Test' }]} onSelect={() => select()} />
	));
