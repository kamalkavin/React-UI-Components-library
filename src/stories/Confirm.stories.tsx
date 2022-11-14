// import React from 'react';
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Confirm from '../components/Confirm/Confirm';

export default {
	title: 'Confirm',
	component: Confirm,
} as ComponentMeta<typeof Confirm>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Confirm> = (args) => <Confirm {...args} />;

export const DefaultConfirm = Template.bind({});

DefaultConfirm.args = {
	isShow: true,
	confirmAction: () => {},
	cancelAction: () => {},
	message: 'Are you want to leave the unsaved changes?',
	heading: 'Unsaved Changes',
	name: 'confirm-dialog',
};
