import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Tooltip from '../components/Tooltip/Tooltip';
import Span from '../components/Typography/Span';

export default {
	title: 'Tooltip',
	component: Tooltip,
	argTypes: {
		variant: { control: 'select', options: ['primary', 'secondary', 'tertiary'] },
	},
} as ComponentMeta<typeof Tooltip>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Tooltip> = (args) => (
	<Tooltip {...args}>
		<Span marginTop='50px' display='inline-block'>
			This is a test message
		</Span>
	</Tooltip>
);

export const PositionTop = Template.bind({});

PositionTop.args = {
	appearance: 'default',
	position: 'top',
	content: 'Tooltip for the test message',
};

export const PositionBottom = Template.bind({});

PositionBottom.args = {
	appearance: 'default',
	position: 'bottom',
	content: 'Tooltip for the test message',
};

export const PositionRight = Template.bind({});

PositionRight.args = {
	appearance: 'default',
	position: 'right',
	content: 'Tooltip for the test message',
};
