import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Select from '../components/Select/Select';

export default {
	title: 'Select',
	component: Select,
	argTypes: {},
} as ComponentMeta<typeof Select>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const SingleSelect = Template.bind({});

SingleSelect.args = {
	options: [
		{ value: 'chocolate', label: 'Chocolate' },
		{ value: 'strawberry', label: 'Strawberry' },
		{ value: 'vanilla', label: 'Vanilla' },
	],
};

export const MultiSelect = Template.bind({});

MultiSelect.args = {
	isMulti: true,
	options: [
		{ value: 'chocolate', label: 'Chocolate' },
		{ value: 'strawberry', label: 'Strawberry' },
		{ value: 'vanilla', label: 'Vanilla' },
	],
};

export const Creatable = Template.bind({});

Creatable.args = {
	creatable: true,
	options: [
		{ value: 'chocolate', label: 'Chocolate' },
		{ value: 'strawberry', label: 'Strawberry' },
		{ value: 'vanilla', label: 'Vanilla' },
	],
};
