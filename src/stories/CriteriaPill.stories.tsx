import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CriteriaPill from '../components/CriteriaPill/CriteriaPill';
import { CriticalIcon, MajorIcon, MinorIcon, WarningIcon, InfoIcon, ValidatedIcon } from '../icons';

export default {
	title: 'CriteriaPill',
	component: CriteriaPill,
	argTypes: {
		variant: {
			control: 'select',
			options: ['primary', 'critical', 'major', 'minor', 'warning', 'info', 'validated'],
		},
	},
} as ComponentMeta<typeof CriteriaPill>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof CriteriaPill> = (args) => <CriteriaPill {...args} />;

export const On = Template.bind({});

On.args = {
	variant: 'primary',
	label: 'Filter On',
	value: 'Value',
	count: 10,
	disabled: false,
	isRemovable: false,
};

export const Off = Template.bind({});
Off.args = {
	variant: 'primary',
	label: 'Filter On',
	value: 'Value',
	count: 10,
	disabled: true,
	isRemovable: true,
};

export const CriticalOn = Template.bind({});
CriticalOn.args = {
	variant: 'critical',
	label: 'Filter On',
	value: 'Value',
	count: 10,
	disabled: false,
	icon: CriticalIcon,
	isRemovable: true,
};

export const CriticalOff = Template.bind({});
CriticalOff.args = {
	variant: 'critical',
	label: 'Filter On',
	value: 'Value',
	count: 10,
	disabled: true,
	icon: CriticalIcon,
	isRemovable: true,
};

export const MajorOn = Template.bind({});
MajorOn.args = {
	variant: 'major',
	label: 'Filter On',
	value: 'Value',
	count: 10,
	disabled: false,
	icon: MajorIcon,
	isRemovable: true,
};

export const MajorOff = Template.bind({});
MajorOff.args = {
	variant: 'major',
	label: 'Filter On',
	value: 'Value',
	count: 10,
	disabled: true,
	icon: MajorIcon,
	isRemovable: true,
};

export const MinorOn = Template.bind({});
MinorOn.args = {
	variant: 'minor',
	label: 'Filter On',
	value: 'Value',
	count: 10,
	disabled: false,
	icon: MinorIcon,
	isRemovable: true,
};

export const MinorOff = Template.bind({});
MinorOff.args = {
	variant: 'minor',
	label: 'Filter On',
	value: 'Value',
	count: 10,
	disabled: true,
	icon: MinorIcon,
	isRemovable: true,
};

export const WarningOn = Template.bind({});
WarningOn.args = {
	variant: 'warning',
	label: 'Filter On',
	value: 'Value',
	count: 10,
	disabled: false,
	icon: WarningIcon,
	isRemovable: true,
};

export const WarningOff = Template.bind({});
WarningOff.args = {
	variant: 'warning',
	label: 'Filter On',
	value: 'Value',
	count: 10,
	disabled: true,
	icon: WarningIcon,
	isRemovable: true,
};

export const InfoOn = Template.bind({});
InfoOn.args = {
	variant: 'info',
	label: 'Filter On',
	value: 'Value',
	count: 10,
	disabled: false,
	icon: InfoIcon,
	isRemovable: true,
};

export const InfoOff = Template.bind({});
InfoOff.args = {
	variant: 'info',
	label: 'Filter On',
	value: 'Value',
	count: 10,
	disabled: true,
	icon: InfoIcon,
	isRemovable: true,
};

export const ValidatedOn = Template.bind({});
ValidatedOn.args = {
	variant: 'validated',
	label: 'Filter On',
	value: 'Value',
	count: 10,
	disabled: false,
	icon: ValidatedIcon,
	isRemovable: true,
};

export const ValidatedOff = Template.bind({});
ValidatedOff.args = {
	variant: 'validated',
	label: 'Filter On',
	value: 'Value',
	disabled: true,
	icon: ValidatedIcon,
	isRemovable: true,
};

export const Filter = Template.bind({});
Filter.args = {
	variant: 'primary',
	label: 'Filter',
	value: ['Email', 'Phone'],
	isRemovable: true,
	type: 'filter',
	options: [
		{ label: 'Email', value: 'email' },
		{ label: 'Phone', value: 'phone' },
		{ label: 'State', value: 'state' },
		{ label: 'Country', value: 'country' },
		{ label: 'Type', value: 'type' },
	],
};

export const MultiValue = Template.bind({});
MultiValue.args = {
	variant: 'primary',
	label: 'Country',
	value: 'test',
	multiValue: ['level1', 'level2'],
	isRemovable: true,
};
