import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Paragraph from '../components/Typography/Paragraph';

export default {
	title: 'Typography / Paragraph',
	component: Paragraph,
} as ComponentMeta<typeof Paragraph>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Paragraph> = (args) => <Paragraph {...args} />;

export const Default = Template.bind({});

Default.args = {
	name: 'test',
	children:
		'There is a foundational visibility gap in today’s digital and hybrid infrastructure that leads to poor customer experience, security blind spots, and out-of-control costs. It provides the industry’s first elastic visibility and analytics fabric that closes this gap by enabling your cloud tools to see the network and your network tools to see the cloud. With visibility across their entire hybrid cloud network, organizations can improve customer experience, eliminate security blind spots, and reduce cost and complexity.',
};
