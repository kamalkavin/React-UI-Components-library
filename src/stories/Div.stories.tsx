import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Div from '../components/Layers/Div';

export default {
	title: 'Layers / Div',
	component: Div,
} as ComponentMeta<typeof Div>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Div> = (args) => <Div {...args} />;

export const withBorder = Template.bind({});

withBorder.args = {
	children: 'Button',
	height: 120,
	width: 240,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	border: 1,
	borderStyle: 'solid',
};

export const example = Template.bind({});
example.args = {
	children: 'Example div',
};
