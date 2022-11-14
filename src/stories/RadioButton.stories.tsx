import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import RadioButton from '../components/RadioButton/RadioButton';

export default {
	title: 'RadioButton',
	component: RadioButton,
	argTypes: {},
} as ComponentMeta<typeof RadioButton>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof RadioButton> = (args) => <RadioButton {...args} />;

export const DefaultChecked = Template.bind({});

DefaultChecked.args = {
	variant: 'primary',
	label: 'Radio Default',
};

export const DefaultUnchecked = Template.bind({});
DefaultUnchecked.args = {
	variant: 'primary',
	checked: true,
	label: 'Radio Default checked',
};

export const Disabled = Template.bind({});
Disabled.args = {
	disabled: true,
	checked: false,
	label: 'Radio disabled',
};

export const CheckedDisabled = Template.bind({});
CheckedDisabled.args = {
	disabled: true,
	checked: true,
	label: 'Radio Checked and disabled',
};

export const Large = Template.bind({});
Large.args = {
	size: 'large',
	checked: true,
	label: 'Radio Checked Large',
};
