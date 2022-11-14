// import React from 'react';
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CheckBox from '../components/CheckBox/CheckBox';

export default {
	title: 'CheckBox',
	component: CheckBox,
	argTypes: {
		labelPosition: {
			options: ['left', 'right'],
			control: { type: 'radio' },
		},
	},
} as ComponentMeta<typeof CheckBox>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof CheckBox> = (args) => <CheckBox {...args} />;

export const DefaultChecked = Template.bind({});

DefaultChecked.args = {
	variant: 'primary',
	checked: true,
	label: 'Default checked',
};

export const DefaultUnchecked = Template.bind({});
DefaultUnchecked.args = {
	variant: 'primary',
	checked: false,
	label: 'Default unchecked',
};

export const Disabled = Template.bind({});
Disabled.args = {
	disabled: true,
	checked: false,
	label: 'Checkbox disabled',
};

export const CheckedDisabled = Template.bind({});
CheckedDisabled.args = {
	disabled: true,
	checked: true,
	label: 'Checkbox Checked and disabled',
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
	indeterminate: true,
	label: 'Checkbox indeterminate',
};

export const CheckedIndeterminate = Template.bind({});
CheckedIndeterminate.args = {
	disabled: true,
	indeterminate: true,
	label: 'Checkbox checked indeterminate',
};
