import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../../Button/Button';
import ButtonGroup from '../ButtonGroup';

storiesOf('Basics/ButtonGroup', module)
	.addParameters({ component: ButtonGroup })
	.add('With Two Children', () => (
		<ButtonGroup>
			<Button label='Save' variant='primary' name={''} />
			<Button label='Cancel' variant='secondary' name={''} />
		</ButtonGroup>
	))
	.add('With Three Children', () => (
		<ButtonGroup>
			<Button label='Save' variant='primary' name={''} />
			<Button label='Middle' variant='outline-info' name={''} />
			<Button label='Cancel' variant='secondary' name={''} />
		</ButtonGroup>
	))
	.add('With Custom Class', () => (
		<ButtonGroup className='custom-class'>
			<Button label='Save' variant='primary' name={''} />
			<Button label='Cancel' variant='secondary' name={''} />
		</ButtonGroup>
	));
