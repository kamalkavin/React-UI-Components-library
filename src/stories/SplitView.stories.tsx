import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SplitView from '../components/SplitView/SplitView';

export default {
	title: 'SplitView',
	component: SplitView,
	argTypes: {},
} as ComponentMeta<typeof SplitView>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof SplitView> = (args) => <SplitView {...args} />;

export const Default = Template.bind({});

Default.args = {};
