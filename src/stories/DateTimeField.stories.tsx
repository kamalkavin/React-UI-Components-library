import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DateTimeField from '../components/DateTimeField/DateTimeField';
import moment from 'moment';

export default {
	title: 'DateTimeField',
	component: DateTimeField,
	argTypes: {},
} as ComponentMeta<typeof DateTimeField>;

const Template: ComponentStory<typeof DateTimeField> = (args) => <DateTimeField {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const DateField = Template.bind({});
DateField.args = {
	dateFormat: 'MM/DD/YYYY',
	timeFormat: false,
};

export const TimeField = Template.bind({});
TimeField.args = {
	dateFormat: false,
	timeFormat: 'hh:mm A',
};

export const DateErrorField = Template.bind({});
DateErrorField.args = {
	dateFormat: 'MM/DD/YYYY',
	timeFormat: false,
	isError: true,
};

export const DisableFutureDate = Template.bind({});
DisableFutureDate.args = {
	dateFormat: 'MM/DD/YYYY',
	timeFormat: false,
	isValidDate: (current) => current.isBefore(moment()),
};

export const DisablePastDate = Template.bind({});
DisablePastDate.args = {
	dateFormat: 'MM/DD/YYYY',
	timeFormat: false,
	isValidDate: (current) => current.isAfter(moment().subtract(1, 'day')),
};
