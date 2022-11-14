import React from 'react';
import Button from '../components/Button/Button';
import Icon from '../components/Icon/Icon';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArrowLeftIcon } from '../icons';

export default {
	title: 'Icons / Icon',
	component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Icons = Template.bind({});
Icons.args = {
	width: '24px',
	height: '24px',
	svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display: inline-block; vertical-align: middle;"><title></title><title></title><path d="M18.27 2.992A2.005 2.005 0 0 0 16.543 2H7.208c-.712 0-1.37.38-1.729.992l-4.667 8a2.006 2.006 0 0 0 0 2.016l4.667 8A2.005 2.005 0 0 0 7.21 22h9.333c.712 0 1.37-.38 1.729-.992l4.666-8a2.006 2.006 0 0 0 0-2.016l-4.666-8zm3.513 9.345l-4.666 8a.671.671 0 0 1-.575.33H7.208a.661.661 0 0 1-.575-.33l-4.666-8a.666.666 0 0 1 0-.67l4.666-8a.657.657 0 0 1 .575-.334h9.334c.237 0 .458.125.575.33l4.666 8c.121.208.121.466 0 .675zm-5.958 3.259l-.354.354a.5.5 0 0 1-.709 0l-2.887-2.887-2.887 2.887a.5.5 0 0 1-.709 0l-.354-.354a.5.5 0 0 1 0-.709L10.813 12 7.925 9.112a.5.5 0 0 1 0-.708l.354-.354a.5.5 0 0 1 .709 0l2.887 2.888 2.887-2.888a.5.5 0 0 1 .709 0l.354.354a.5.5 0 0 1 0 .709L12.938 12l2.887 2.887a.508.508 0 0 1 0 .709z"></path></svg>',
	name: 'story',
	onClick: () => {
		alert('Icon clicked');
	},
	cursor: 'pointer',
};

const Template1: ComponentStory<typeof Icon> = (args) => {
	return (
		<>
			<Button name='icon button' iconBefore={<ArrowLeftIcon width='16px' height='16px' name='arrow' />}>
				Test
			</Button>
		</>
	);
};

export const IconInsideButton = Template1.bind({});
IconInsideButton.args = {
	width: '24px',
	height: '24px',
	svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display: inline-block; vertical-align: middle;"><title></title><title></title><path d="M18.27 2.992A2.005 2.005 0 0 0 16.543 2H7.208c-.712 0-1.37.38-1.729.992l-4.667 8a2.006 2.006 0 0 0 0 2.016l4.667 8A2.005 2.005 0 0 0 7.21 22h9.333c.712 0 1.37-.38 1.729-.992l4.666-8a2.006 2.006 0 0 0 0-2.016l-4.666-8zm3.513 9.345l-4.666 8a.671.671 0 0 1-.575.33H7.208a.661.661 0 0 1-.575-.33l-4.666-8a.666.666 0 0 1 0-.67l4.666-8a.657.657 0 0 1 .575-.334h9.334c.237 0 .458.125.575.33l4.666 8c.121.208.121.466 0 .675zm-5.958 3.259l-.354.354a.5.5 0 0 1-.709 0l-2.887-2.887-2.887 2.887a.5.5 0 0 1-.709 0l-.354-.354a.5.5 0 0 1 0-.709L10.813 12 7.925 9.112a.5.5 0 0 1 0-.708l.354-.354a.5.5 0 0 1 .709 0l2.887 2.888 2.887-2.888a.5.5 0 0 1 .709 0l.354.354a.5.5 0 0 1 0 .709L12.938 12l2.887 2.887a.508.508 0 0 1 0 .709z"></path></svg>',
	name: 'story',
	onClick: () => {
		alert('Icon clicked');
	},
	cursor: 'pointer',
};

const Template2: ComponentStory<typeof Icon> = (args) => {
	return (
		<>
			<Button name='icon button' iconBefore={<Icon {...args} />}>
				Test
			</Button>
		</>
	);
};

export const SVGInsideButton = Template2.bind({});
SVGInsideButton.args = {
	width: '24px',
	height: '24px',
	svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display: inline-block; vertical-align: middle;"><title></title><title></title><path d="M18.27 2.992A2.005 2.005 0 0 0 16.543 2H7.208c-.712 0-1.37.38-1.729.992l-4.667 8a2.006 2.006 0 0 0 0 2.016l4.667 8A2.005 2.005 0 0 0 7.21 22h9.333c.712 0 1.37-.38 1.729-.992l4.666-8a2.006 2.006 0 0 0 0-2.016l-4.666-8zm3.513 9.345l-4.666 8a.671.671 0 0 1-.575.33H7.208a.661.661 0 0 1-.575-.33l-4.666-8a.666.666 0 0 1 0-.67l4.666-8a.657.657 0 0 1 .575-.334h9.334c.237 0 .458.125.575.33l4.666 8c.121.208.121.466 0 .675zm-5.958 3.259l-.354.354a.5.5 0 0 1-.709 0l-2.887-2.887-2.887 2.887a.5.5 0 0 1-.709 0l-.354-.354a.5.5 0 0 1 0-.709L10.813 12 7.925 9.112a.5.5 0 0 1 0-.708l.354-.354a.5.5 0 0 1 .709 0l2.887 2.888 2.887-2.888a.5.5 0 0 1 .709 0l.354.354a.5.5 0 0 1 0 .709L12.938 12l2.887 2.887a.508.508 0 0 1 0 .709z"></path></svg>',
	name: 'story',
	onClick: () => {
		alert('Icon clicked');
	},
	cursor: 'pointer',
};
