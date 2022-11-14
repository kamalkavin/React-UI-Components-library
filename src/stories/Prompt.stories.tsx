import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Prompt from '../components/Prompt/Prompt';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
	title: 'Prompt',
	component: Prompt,
	argTypes: {},
	decorators: [withRouter],
} as ComponentMeta<typeof Prompt>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Prompt> = (args) => (
	<div>Use this component to prompt user to take action before leaving the page.</div>
);
Template.story = {
	parameters: {
		reactRouter: {
			routePath: '/users/:userId',
			routeParams: { userId: '42' },
			searchParams: { tab: 'activityLog' },
			routeState: { fromPage: 'homePage' },
		},
	},
};
export const Default = Template.bind({});

Default.args = {};
