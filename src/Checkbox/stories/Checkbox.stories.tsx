import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from '../Checkbox';

storiesOf('Form/Checkbox', module)
	.addParameters({ component: Checkbox })
	.add('CheckBox', () => <Checkbox name='story1' label='Label for Checkbox' type='checkbox' />)
	.add('Radio', () => <Checkbox name='story2' label='Label for Radio' type='radio' />)
	.add('Switch', () => <Checkbox name='story3' label='Label for Switch' type='switch' />);
