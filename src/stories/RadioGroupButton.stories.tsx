import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import RadioGroupButton from '../components/RadioButton/RadioButton';

export default {
	title: 'RadioGroupButton',
	component: RadioGroupButton,
	argTypes: {},
} as ComponentMeta<typeof RadioGroupButton>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof RadioGroupButton> = (args) => <RadioGroupButton {...args} />;

export const DefaultChecked = Template.bind({});

DefaultChecked.args = {
	variant: 'primary',
	label: 'Radio Group Default',
	options: [
		{ label: 'Read-only', value: 'read-only' },
		{ label: 'Write', value: 'write' },
		{ label: 'Restricted', value: 'restricted' },
	],
};
