import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextArea from '../components/TextArea/TextArea';

export default {
	title: 'TextArea',
	component: TextArea,
	argTypes: {},
} as ComponentMeta<typeof TextArea>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;

export const Default = Template.bind({});

Default.args = {
	placeholder: 'Placeholder',
	variant: 'primary',
	label: 'Default',
};
export const Active = Template.bind({});
Active.args = {
	placeholder: 'Placeholder',
	variant: 'primary',
	disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
	placeholder: 'Placeholder',
	variant: 'primary',
	disabled: true,
};
export const ErrorActive = Template.bind({});
ErrorActive.args = {
	placeholder: 'Placeholder',
	variant: 'primary',
	isInvalid: true,
};
