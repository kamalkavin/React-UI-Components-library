import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Import from '../components/Import/Import';

export default {
	title: 'Import',
	component: Import,
	argTypes: {},
} as ComponentMeta<typeof Import>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Import> = (args) => <Import {...args} />;

export const Default = Template.bind({});

export const WithChooseFileLink = Template.bind({});

const handleFileError = (e: any) => {
	console.log(e);
};

const handleFileData = (data: any) => {
	console.log(data);
};

Default.args = {
	fileType: 'CSV',
	onError: handleFileError,
	getData: handleFileData,
	dropAreaText: 'Drag & drop a file here',
};
WithChooseFileLink.args = {
	fileType: 'CSV & XLS',
	onError: handleFileError,
	getData: handleFileData,
	showChooseLink: {
		isShown: true,
		value: 'choose file',
	},
	dropAreaText: 'Drag & drop a file here or',
};
