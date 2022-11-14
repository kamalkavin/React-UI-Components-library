import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Accordion from '../components/Accordion/Accordion';
import CheckBox from '../components/CheckBox/CheckBox';
export default {
	title: 'Accordion',
	component: Accordion,
	argTypes: {},
} as ComponentMeta<typeof Accordion>;
//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;
export const Default = Template.bind({});
Default.args = {
	header: 'Accordion',
	subHeader: 12,
	isOpen: true,
	children: `This is an Accordion`,
};

export const TextFilter = Template.bind({});
const list = [
	{
		label: 'Text 1',
		value: 'text1',
	},
	{
		label: 'Text 2',
		value: 'text2',
	},
	{
		label: 'Text 3',
		value: 'text3',
	},
	{
		label: 'Text 4',
		value: 'text4',
	},
	{
		label: 'Text 5',
		value: 'text5',
	},
	{
		label: 'Text 6',
		value: 'text6',
	},
	{
		label: 'Text 7',
		value: 'text7',
	},
	{
		label: 'Text 8',
		value: 'text8',
	},
];
let matches = 0;
TextFilter.args = {
	header: 'Accordion with Text Filter',
	subHeader: 12,
	isOpen: true,
	textFilter: true,
	matches: matches,
	maxHeight: 280,
	scrollable: true,
	children: (
		<>
			{list.map((el, i) => {
				return <CheckBox name={el.label} label={el.label} labelPosition='right' key={i} />;
			})}
		</>
	),
};
export const DropdownFilter = Template.bind({});
DropdownFilter.args = {
	header: 'Accordion with Dropdown Filter',
	subHeader: 12,
	isOpen: true,
	textFilter: true,
	dropdownFilter: true,
	value: ['All'],
	options: [
		{ label: 'All', value: 'All' },
		{ label: 'Physical', value: 'physical' },
		{ label: 'Virtual', value: 'virtual' },
		{ label: 'Cloud', value: 'cloud' },
	],
	matches: matches,
	maxHeight: 280,
	children: (
		<>
			{list.map((el, i) => {
				return <CheckBox name={el.label} label={el.label} labelPosition='right' key={i} />;
			})}
		</>
	),
};
