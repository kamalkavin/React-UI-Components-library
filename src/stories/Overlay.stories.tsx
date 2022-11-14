import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Overlay from '../components/Overlay/Overlay';

export default {
	title: 'Overlay',
	component: Overlay,
} as ComponentMeta<typeof Overlay>;

const Template: ComponentStory<typeof Overlay> = (args) => <Overlay {...args} />;

export const Default = Template.bind({});

Default.args = {
	is: 'overlay',
	name: 'Overlay component',
	isShown: true,
};
