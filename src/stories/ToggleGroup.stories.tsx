import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ToggleGroup from '../components/ToggleGroup/ToggleGroup';
import Button from '../components/Button/Button';

export default {
	title: 'ToggleGroup',
	component: ToggleGroup,
} as ComponentMeta<typeof ToggleGroup>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => (
	<ToggleGroup {...args}>
		<Button name='group1'>Group Left</Button>
		<Button name='group2'>Group Right</Button>
	</ToggleGroup>
);

export const Default = Template.bind({});

Default.args = {
	name: 'test',
};

const Template1: ComponentStory<typeof Button> = (args) => (
	<ToggleGroup {...args}>
		<Button name='group1'>Group Left</Button>
		<Button name='group2' disabled>
			Group Right
		</Button>
	</ToggleGroup>
);

export const WithDisabledButton = Template1.bind({});

WithDisabledButton.args = {
	name: 'test',
};
