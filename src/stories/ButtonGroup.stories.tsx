import React from 'react';
import { storiesOf } from '@storybook/react';
import ButtonGroup from '../components/ButtonGroup/ButtonGroup';
import Button from '../components/Button/Button';

storiesOf('ButtonGroup', module)
	.addParameters({ component: ButtonGroup })
	.add('default', () => (
		<ButtonGroup name='test'>
			<Button name='group1'>Group Left</Button>
			<Button name='group2'>Group Right</Button>
		</ButtonGroup>
	));
