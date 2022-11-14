import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Switch from '../components/Switch/Switch';

export default {
	title: 'Switch',
	component: Switch,
	argTypes: {
		labelPosition: {
			options: ['left', 'right'],
			control: { type: 'radio' },
		},
	},
} as ComponentMeta<typeof Switch>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Default = Template.bind({});

Default.args = {
	variant: 'primary',
	label: 'Default',
};

export const Checked = Template.bind({});

Checked.args = {
	variant: 'primary',
	checked: true,
	label: 'Checked',
};

export const Disabled = Template.bind({});
Disabled.args = {
	disabled: true,
	label: 'Disabled',
};

export const CheckedDisabled = Template.bind({});
CheckedDisabled.args = {
	disabled: true,
	checked: true,
	label: 'Checked and disabled',
};

export const Small = Template.bind({});
Small.args = {
	size: 'small',
	checked: true,
	label: 'Small',
};

export const Medium = Template.bind({});
Medium.args = {
	size: 'medium',
	checked: true,
	label: 'Medium',
};
export const Large = Template.bind({});
Large.args = {
	size: 'large',
	checked: true,
	label: 'Large',
};

export const WithCheckIcon = Template.bind({});
WithCheckIcon.args = {
	hasCheckIcon: true,
	checked: true,
	label: 'With Check Icon',
};
