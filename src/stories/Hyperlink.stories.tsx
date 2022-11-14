import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Hyperlink from '../components/Hyperlink/Hyperlink';

export default {
	title: 'Typography / Hyperlink',
	component: Hyperlink,
	argTypes: {
		variant: { control: 'select', options: ['primary'] },
	},
} as ComponentMeta<typeof Hyperlink>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Hyperlink> = (args) => <Hyperlink {...args} />;

export const Normal = Template.bind({});

Normal.args = {
	url: 'https://www.google.com',
	label: 'Hyperlink',
	target: '_blank',
	name: 'g-hyperlink',
};
