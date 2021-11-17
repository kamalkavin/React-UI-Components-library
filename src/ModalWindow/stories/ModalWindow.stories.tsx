import React from 'react';
import { storiesOf } from '@storybook/react';
import ModalWindow from '../ModalWindow';

const props = {
	show: true,
	onHide: () => void {},
	heading: 'TroubleShoot',
};
storiesOf('ModalWindow', module)
	.addParameters({ component: ModalWindow })
	.add('default', () => (
		<ModalWindow {...props}>
			<div>Hello</div>
		</ModalWindow>
	));
