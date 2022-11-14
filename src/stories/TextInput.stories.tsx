import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputField from '../components/InputField/InputField';

export default {
	title: 'InputField',
	component: InputField,
	argTypes: {},
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => <InputField {...args} />;

export const Default = Template.bind({});

Default.args = {
	placeholder: 'Enter Hostname',
	variant: 'primary',
	label: 'Default',
};

export const Active = Template.bind({});
Active.args = {
	placeholder: 'Enter Hostname',
	variant: 'primary',
	disabled: false,
	focus: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
	placeholder: 'Enter Hostname',
	variant: 'primary',
	disabled: true,
};
export const ErrorActive = Template.bind({});
ErrorActive.args = {
	placeholder: 'Enter Hostname',
	variant: 'primary',
	isInvalid: true,
	focus: true,
};
