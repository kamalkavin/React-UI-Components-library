import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TagsInput from '../components/TagsInput/TagsInput';

export default {
	title: 'TagsInput',
	component: TagsInput,
	argTypes: {},
} as ComponentMeta<typeof TagsInput>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof TagsInput> = (args) => <TagsInput {...args} />;

export const Default = Template.bind({});

Default.args = {
	value: ['test', 'test1', 'test2'],
};
