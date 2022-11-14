import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PillInput from '../components/PillInput/PillInput';

export default {
	title: 'PillInput',
	component: PillInput,
	argTypes: {},
} as ComponentMeta<typeof PillInput>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof PillInput> = (args) => <PillInput {...args} />;

export const Default = Template.bind({});

Default.args = {
	name: 'default',
	id: '0',
	pillDisplayCount: 2,
	userSelectedOptions: [
		{ label: 'Ascending', value: 'asc' },
		{ label: 'Descending', value: 'desc' },
	],
	unSelectedOptions: [
		{ label: 'Email', value: 'email' },
		{ label: 'Phone', value: 'phone' },
		{ label: 'State', value: 'state' },
		{ label: 'Country', value: 'country' },
	],
};

export const longText = Template.bind({});

longText.args = {
	name: 'default',
	id: '0',
	pillDisplayCount: 2,
	userSelectedOptions: [
		{ label: 'Ascending', value: 'Ascending Lorem Ipsum Alpha' },
		{ label: 'Descending', value: 'desc' },
	],
	unSelectedOptions: [
		{ label: 'Email', value: 'email' },
		{ label: 'Phone', value: 'phone' },
		{ label: 'State', value: 'state' },
		{ label: 'Country', value: 'country' },
	],
};

export const noSelectedInput = Template.bind({});

noSelectedInput.args = {
	name: 'default',
	id: '0',
	unSelectedOptions: [
		{ label: 'Email', value: 'email' },
		{ label: 'Phone', value: 'phone' },
		{ label: 'State', value: 'state' },
		{ label: 'Country', value: 'country' },
	],
};
