import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Grid from '../components/Grid/Grid';
import Heading from '../components/Typography/Heading';
import Paragraph from '../components/Typography/Paragraph';
import Span from '../components/Typography/Span';

export default {
	title: 'Grid',
	component: Grid,
	argTypes: {},
} as ComponentMeta<typeof Grid>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Grid> = (args) => (
	<Grid row border='1px solid #efefef' {...args}>
		<Grid column sm={12} md={4} collapse='sm' {...args}>
			<h1>Column 1</h1>
		</Grid>
		<Grid column sm={12} md={4} collapse='md' {...args}>
			<h1>Column 2</h1>
		</Grid>
		<Grid column sm={12} md={4} collapse='lg' {...args}>
			<h1>Column 3</h1>
		</Grid>
	</Grid>
);

export const Default = Template.bind({});

Default.args = {};

const Template1: ComponentStory<typeof Grid> = (args) => (
	<>
		<Heading name='test' variant='h1'>
			{' '}
			Example of a Grid component and useMediaQuery hook
		</Heading>
		<Grid row border='1px solid #efefef' {...args}>
			<Grid column md={6} lg={4} collapse='sm' {...args}>
				<Paragraph>
					use useMediaQuery hook to check isMobile
					<br />
					Example code: <br />
					<Span fontStyle='italic' fontSize='12px'>
						const isMobile = useMediaQuery('(min-width: 100px) and (max-width:600px)');
					</Span>
				</Paragraph>
			</Grid>
			<Grid column sm={12} lg={4} collapse='md' {...args}>
				<Paragraph>
					use useMediaQuery hook to check isTablet
					<br />
					Example code: <br />
					<Span fontStyle='italic' fontSize='12px'>
						const isTablet = useMediaQuery('(min-width: 600px) and (max-width:960px)');
					</Span>
				</Paragraph>
			</Grid>
			<Grid column sm={12} md={6} lg={4} {...args}>
				<Paragraph>
					use useMediaQuery hook to check isDesktop
					<br />
					Example code: <br />
					<Span fontStyle='italic' fontSize='12px'>
						const isDesktop = useMediaQuery('(min-width:960px)');
					</Span>
				</Paragraph>
			</Grid>
		</Grid>
	</>
);

export const ThreeColumn = Template1.bind({});

ThreeColumn.args = {
	justify: 'center',
	align: 'center',
	expanded: false,
};
