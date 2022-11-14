import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Heading from '../components/Typography/Heading';

export default {
	title: 'Typography / Heading',
	component: Heading,
} as ComponentMeta<typeof Heading>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

export const h1 = Template.bind({});

h1.args = {
	children: 'Heading 1 (h1)',
	variant: 'h1',
};

export const h2 = Template.bind({});
h2.args = {
	children: 'Heading 2 (h2)',
	variant: 'h2',
};

export const h3 = Template.bind({});
h3.args = {
	children: 'Heading 3 (h3)',
	variant: 'h3',
};

export const h4 = Template.bind({});
h4.args = {
	children: 'Heading 4 (h4)',
	variant: 'h4',
};

export const h5 = Template.bind({});
h5.args = {
	children: 'Heading 5 (h5)',
	variant: 'h5',
};

export const h6 = Template.bind({});
h6.args = {
	children: 'Heading 6 (h6)',
	variant: 'h6',
};
