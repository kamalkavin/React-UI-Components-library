import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../components/Button/Button';

export default {
	title: 'Button',
	component: Button,
	argTypes: {
		variant: { control: 'select', options: ['primary', 'secondary', 'tertiary'] },
	},
} as ComponentMeta<typeof Button>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	children: 'Button',
	variant: 'primary',
};

export const PrimaryDisabled = Template.bind({});

PrimaryDisabled.args = {
	children: 'Button',
	variant: 'primary',
	disabled: true,
};

export const Loading = Template.bind({});

Loading.args = {
	children: 'Button',
	variant: 'primary',
	isLoading: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
	children: 'Button',
	variant: 'secondary',
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
	children: 'Button',
	variant: 'secondary',
	disabled: true,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
	children: 'Button',
	variant: 'tertiary',
};

export const TertiaryDisabled = Template.bind({});
TertiaryDisabled.args = {
	children: 'Button',
	variant: 'tertiary',
	disabled: true,
};
