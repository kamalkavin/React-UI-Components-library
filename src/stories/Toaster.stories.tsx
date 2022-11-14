import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Toaster from '../components/Toaster/Toaster';

export default {
	title: 'Toaster',
	component: Toaster,
	argTypes: {},
} as ComponentMeta<typeof Toaster>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Toaster> = (args) => <Toaster {...args} />;

export const Danger = Template.bind({});
export const Success = Template.bind({});

Danger.args = {
	name: 'Toaster',
	variant: 'danger',
	children: 'Traffic path cannot be set to monitoring unless SSL monitoring mode is enabled',
	label: 'OK',
	showToaster: true,
	styles: {},
};

Success.args = {
	name: 'Toaster',
	variant: 'success',
	children: 'The selected report(s) were deleted successfully',
	label: 'OK',
	showToaster: true,
	styles: {
		position: 'fixed',
		top: '80%',
		left: '80%',
		transform: 'translate(-50%, -50%)',
	},
};
