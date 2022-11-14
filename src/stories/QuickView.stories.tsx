import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import QuickView from '../components/QuickView/QuickView';

export default {
	title: 'QuickView',
	component: QuickView,
	argTypes: {},
} as ComponentMeta<typeof QuickView>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof QuickView> = (args) => <QuickView {...args} />;

export const Default = Template.bind({});

Default.args = {};
