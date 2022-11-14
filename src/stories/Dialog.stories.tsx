import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dialog from '../components/Dialog/Dialog';
import Select from '../components/Select/Select';
import Span from '../components/Typography/Span';
import Button from '../components/Button/Button';

export default {
	title: 'Dialog',
	component: Dialog,
	argTypes: {
		variant: { control: 'select', options: ['primary'] },
	},
} as ComponentMeta<typeof Dialog>;

//👇 We create a “template” of how args map to rendering
const containerStyle = { fontFamily: 'Nunito Sans, sans-serif' };
const Template: ComponentStory<typeof Dialog> = (args) => {
	return (
		<div id='container' style={containerStyle}>
			<Dialog {...args} />
		</div>
	);
};

export const defaultDialog = Template.bind({});

defaultDialog.args = {
	showDialog: true,
	description: <div>Deleting this cannot be undone, you might want to do a backup before continuing.</div>,
	heading: 'Dialog Title',
};

export const Small = Template.bind({});
const footerStyle = { display: 'flex', alignItems: 'center', flexGrow: 1, justifyContent: 'flex-end' };

Small.args = {
	size: 'small',
	showDialog: true,
	description: <div>Deleting this cannot be undone, you might want to do a backup before continuing.</div>,
	heading: 'Dialog Title',
	showSeparator: true,
	footer: (
		<div style={footerStyle}>
			<Button name='submit' variant='secondary' style={{ marginRight: 16 + 'px' }}>
				Cancel
			</Button>
			<Button name='submit' variant='primary'>
				Delete
			</Button>
		</div>
	),
};

export const Medium = Template.bind({});
Medium.args = {
	size: 'medium',
	showDialog: true,
	description: 'Deleting this cannot be undone, you might want to do a backup before continuing. ',
	heading: 'Dialog Title',
	textOnly: true,
	footer: (
		<Button name='submit' type={'submit'} color={'primary'}>
			Submit
		</Button>
	),
};
export const Large = Template.bind({});
Large.args = {
	size: 'large',
	showDialog: true,
	description: 'Deleting this cannot be undone, you might want to do a backup before continuing. ',
	heading: 'Dialog Title',
	footer: (
		<Button name='submit' type={'submit'} color={'tertiary'}>
			Submit
		</Button>
	),
};
export const withScrolling = Template.bind({});
withScrolling.args = {
	enableScrolling: true,
	size: 'large',
	showDialog: true,
	textOnly: false,
	description:
		'Deleting this cannot be undone, you might wantasasasasasasasasasaas to do a backup before continuing. ',
	heading: 'Dialog Title',
	footer: (
		<Button name='submit' type={'submit'} color={'primary'}>
			Submit
		</Button>
	),
};

export const scrollWithLargeContent = Template.bind({});
const multiSelectOptions = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' },
];
scrollWithLargeContent.args = {
	enableScrolling: true,
	size: 'large',
	showDialog: true,
	textOnly: false,
	description: (
		<div>
			<Span>
				Deleting this cannot be undone, you might wantasasasasasasasasasaas to do a backup before continuing.
			</Span>
			<Select name='MultiSelect' isMulti='true' options={multiSelectOptions}></Select>
		</div>
	),
	heading: 'Dialog Title',
	footer: (
		<Button name='submit' type={'submit'} color={'primary'}>
			Submit
		</Button>
	),
};

export const withHeader = Template.bind({});
const FMLogoSpecial = () => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='356' height='60'>
			<g transform='translate(2 2.354)'>
				<g>
					<g>
						<g>
							<g>
								<g>
									<path
										d='M 0 27.52 C 0 12.321 12.147 0 27.132 0 C 42.117 0 54.264 12.321 54.264 27.52 C 54.264 42.718 42.117 55.039 27.132 55.039 C 12.147 55.039 0 42.718 0 27.52 Z'
										fill='transparent'
										strokeWidth='3.8'
										stroke='rgb(250,158,108)'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeDasharray=''></path>
									<path
										d='M 21.85 27.203 C 21.85 24.317 24.189 21.978 27.075 21.978 C 29.961 21.978 32.3 24.317 32.3 27.203 C 32.3 30.088 29.961 32.428 27.075 32.428 C 24.189 32.428 21.85 30.088 21.85 27.203 Z'
										fill='transparent'
										strokeWidth='3.8'
										stroke='rgb(250,158,108)'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeDasharray=''></path>
									<path
										d='M 27.132 0 C 19.14 0 12.662 10.298 12.662 27.52 C 12.662 44.741 19.14 55.039 27.132 55.039 L 27.132 55.039'
										fill='transparent'
										strokeWidth='3.8'
										stroke='rgb(250,158,108)'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeDasharray=''></path>
									<path
										d='M 27.132 0 C 35.124 0 41.602 12.321 41.602 27.52 C 41.602 42.718 35.124 55.039 27.132 55.039 L 27.132 55.039'
										fill='transparent'
										strokeWidth='3.8'
										stroke='rgb(250,158,108)'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeDasharray=''></path>
									<path
										d='M 7.235 9.173 C 7.235 13.226 16.143 16.512 27.132 16.512 C 38.121 16.512 47.029 13.226 47.029 9.173 L 47.029 9.173'
										fill='transparent'
										strokeWidth='3.8'
										stroke='rgb(250,158,108)'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeDasharray=''></path>
									<path
										d='M 7.235 45.866 C 7.235 41.813 16.143 38.527 27.132 38.527 C 38.121 38.527 47.029 41.813 47.029 45.866 L 47.029 45.866'
										fill='transparent'
										strokeWidth='3.8'
										stroke='rgb(250,158,108)'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeDasharray=''></path>
									<path
										d='M 0 27.33 L 21.032 27.33'
										fill='transparent'
										strokeWidth='3.8'
										stroke='rgb(250,158,108)'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeDasharray=''></path>
									<path
										d='M 32.3 27.33 L 53.332 27.33'
										fill='transparent'
										strokeWidth='3.8'
										stroke='rgb(250,158,108)'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeDasharray=''></path>
									<path
										d='M 27.132 1.31 L 27.132 21.978'
										fill='transparent'
										strokeWidth='3.8'
										stroke='rgb(250,158,108)'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeDasharray=''></path>
									<path
										d='M 27.132 34.072 L 27.132 55.039'
										fill='transparent'
										strokeWidth='3.8'
										stroke='rgb(250,158,108)'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeDasharray=''></path>
								</g>
								<path
									d='M 92.348 42.922 C 96.816 42.922 101.24 41.554 104.432 38.863 L 104.432 26.415 L 100.054 26.415 L 100.054 36.811 C 97.774 38.271 95.266 38.863 92.576 38.863 C 85.234 38.863 79.899 33.619 79.899 26.597 C 79.899 19.483 85.234 14.331 92.621 14.331 C 96.224 14.331 99.233 15.471 101.878 18.024 L 104.705 15.197 C 101.787 11.959 97.5 10.272 92.439 10.272 C 82.544 10.272 75.339 17.158 75.339 26.597 C 75.339 36.036 82.544 42.922 92.348 42.922 Z M 113.655 13.738 C 115.388 13.738 116.619 12.461 116.619 10.819 C 116.619 9.269 115.342 8.038 113.655 8.038 C 111.968 8.038 110.691 9.315 110.691 10.911 C 110.691 12.507 111.968 13.738 113.655 13.738 Z M 115.844 42.557 L 115.844 18.389 L 111.466 18.389 L 111.466 42.557 Z M 133.732 51.677 C 141.94 51.677 146.272 47.801 146.272 39.274 L 146.272 18.389 L 142.122 18.389 L 142.122 22.128 C 140.07 19.483 136.787 18.161 133.184 18.161 C 126.208 18.161 120.918 22.858 120.918 29.835 C 120.918 36.811 126.208 41.554 133.184 41.554 C 136.65 41.554 139.796 40.323 141.894 37.815 L 141.894 39.73 C 141.894 45.202 139.295 47.847 133.595 47.847 C 130.038 47.847 126.527 46.615 124.292 44.7 L 122.195 48.075 C 124.84 50.446 129.308 51.677 133.732 51.677 Z M 133.686 37.723 C 128.807 37.723 125.341 34.486 125.341 29.835 C 125.341 25.138 128.807 21.991 133.686 21.991 C 138.52 21.991 141.985 25.138 141.985 29.835 C 141.985 34.486 138.52 37.723 133.686 37.723 Z M 160.648 42.831 C 164.433 42.831 167.123 41.554 168.583 39.365 L 168.583 42.557 L 172.732 42.557 L 172.732 27.965 C 172.732 21.353 168.993 18.161 162.381 18.161 C 158.505 18.161 154.903 19.255 152.395 21.262 L 154.219 24.545 C 156.088 22.949 159.007 21.946 161.879 21.946 C 166.211 21.946 168.355 24.089 168.355 27.783 L 168.355 28.649 L 161.423 28.649 C 154.219 28.649 151.711 31.841 151.711 35.717 C 151.711 39.912 155.176 42.831 160.648 42.831 Z M 161.378 39.456 C 158.049 39.456 156.043 37.951 156.043 35.535 C 156.043 33.483 157.274 31.795 161.606 31.795 L 168.355 31.795 L 168.355 35.17 C 167.26 37.951 164.661 39.456 161.378 39.456 Z M 194.177 42.557 L 208.176 10.637 L 203.616 10.637 L 192.033 36.857 L 180.542 10.637 L 175.617 10.637 L 189.662 42.557 Z M 225.106 42.922 C 233.542 42.922 238.603 38.043 238.603 28.786 L 238.603 10.637 L 234.18 10.637 L 234.18 28.603 C 234.18 35.671 230.897 38.863 225.151 38.863 C 219.406 38.863 216.168 35.671 216.168 28.603 L 216.168 10.637 L 211.608 10.637 L 211.608 28.786 C 211.608 38.043 216.715 42.922 225.106 42.922 Z M 270.08 42.557 L 270.08 38.59 L 251.475 38.59 L 251.475 28.284 L 267.481 28.284 L 267.481 24.408 L 251.475 24.408 L 251.475 14.604 L 269.441 14.604 L 269.441 10.637 L 246.915 10.637 L 246.915 42.557 Z M 285.596 31.932 L 285.596 28.147 L 273.33 28.147 L 273.33 31.932 Z M 296.507 42.557 L 296.507 29.652 L 312.513 29.652 L 312.513 25.731 L 296.507 25.731 L 296.507 14.604 L 314.473 14.604 L 314.473 10.637 L 291.947 10.637 L 291.947 42.557 Z M 324.244 42.557 L 324.244 19.438 L 335.781 38.681 L 337.879 38.681 L 349.416 19.301 L 349.461 42.557 L 353.839 42.557 L 353.793 10.637 L 350.054 10.637 L 336.921 33.072 L 323.606 10.637 L 319.867 10.637 L 319.867 42.557 Z'
									fill='rgb(255,255,255)'></path>
							</g>
						</g>
					</g>
				</g>
			</g>
		</svg>
	);
};

withHeader.args = {
	size: 'large',
	showDialog: true,
	description:
		'Deleting this cannot be undone, you might wantasasasasasasasasasaas to do a backup before continuing. ',
	heading: <FMLogoSpecial />,
	footer: (
		<Button name='submit' type={'submit'} color={'primary'}>
			Submit
		</Button>
	),
};

export const adjustableWidth = Template.bind({});
adjustableWidth.args = {
	size: 'large',
	showDialog: true,
	initialWidth: 600,
	description:
		'Deleting this cannot be undone, you might wantasasasasasasasasasaas to do a backup before continuing. ',
	heading: <FMLogoSpecial />,
	footer: (
		<Button name='submit' type={'submit'} color={'primary'}>
			Submit
		</Button>
	),
};

export const withoutSeparator = Template.bind({});
withoutSeparator.args = {
	bgColor: 'var(--token-f7eac14f-facd-4341-8e19-b37348c6ee9f, #3c4850)',
	variant: 'login',
	size: 'large',
	showDialog: true,
	description:
		'Deleting this cannot be undone, you might wantasasasasasasasasasaas to do a backup before continuing. ',
	heading: <FMLogoSpecial />,
	showSeparator: true,
	showCloseIcon: false,
	footer: (
		<Button name='submit' type={'submit'} color={'primary'}>
			Submit
		</Button>
	),
};

export const enableDragging = Template.bind({});
enableDragging.args = {
	size: 'large',
	showDialog: true,
	description:
		'Deleting this cannot be undone, you might wantasasasasasasasasasaas to do a backup before continuing. ',
	heading: <FMLogoSpecial />,

	isDraggingDisabled: false,
	footer: (
		<Button variant='secondary' name='submit'>
			Submit
		</Button>
	),
};

export const withTextOnly = Template.bind({});
withTextOnly.args = {
	size: 'medium',
	showDialog: true,
	description: 'Deleting this cannot be undone, you might want to do a backup before continuing. ',
	heading: 'Dialog Title',
	textOnly: true,
	footer: (
		<Button name='submit' type={'submit'} color={'primary'}>
			Submit
		</Button>
	),
};
