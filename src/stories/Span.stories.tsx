import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Span from '../components/Typography/Span';

export default {
	title: 'Typography / Span',
	component: Span,
} as ComponentMeta<typeof Span>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Span> = (args) => <Span {...args} />;

export const Default = Template.bind({});

Default.args = {
	children: 'There is a foundational',
};
