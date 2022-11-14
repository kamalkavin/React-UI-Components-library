import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Alerts from '../components/Alert/Alert';
import Box from 'ui-box';

export default {
	title: 'Alerts',
	component: Alerts,
	argTypes: {},
	parameters: {
		//layout: 'centered',
	},
} as ComponentMeta<typeof Alerts>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Alerts> = (args) => <Alerts {...args} />;

export const Info = Template.bind({});
export const Warning = Template.bind({});

Info.args = {
	variant: 'info',
	alertTitle: 'Alert Title',
	children: 'More than one Stacklink/Gigastream cannot be created between a pair of node(s)',
	actionLabel: 'OK',
	showAlert: false,
	name: 'Alert_Info',
};

Warning.args = {
	variant: 'warning',
	alertTitle: 'Image Install Failed',
	children: (
		<Box>
			Please go to{' '}
			<Box is='a' href=''>
				Administration &gt; System
			</Box>{' '}
			and click on the Images tab to setup the Internal Image files or External Image Server for your FM Image
			Upgrade to install the Image
		</Box>
	),
	actionLabel: 'OK',
	showAlert: false,
	name: 'Alert_Warning',
};
