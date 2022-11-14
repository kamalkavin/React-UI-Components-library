import React, { useEffect, useState } from 'react';
import Dialog from '../components/Dialog/Dialog';
import Heading from '../components/Typography/Heading';
import Icon from '../components/Icon/Icon';
import InputField from '../components/InputField/InputField';
import { ComponentStory } from '@storybook/react';
import * as icons from '../icons';

export default {
	title: 'Icons / Custom Icons',
};

const Template: ComponentStory<typeof Icon> = (args) => {
	const [filterValue, setFilterValue] = useState<any>();
	const [filteredValue, setFilteredValue] = useState<any>([]);

	/* Copy text to clipboard */
	const copyToClipBoard = (code) => {
		navigator.clipboard.writeText(code);
		const successDiv = document.getElementById('copyCode');
		if (successDiv) successDiv.style.display = 'block';
		setTimeout(function () {
			if (successDiv) successDiv.style.display = 'none';
		}, 1000);
	};

	const IconList: any = [];
	Object.keys(icons).forEach((iconName) => {
		const Icon = icons[iconName];
		// <Icon />
		let newValue = {
			name: iconName.replace(/[A-Z]/g, (m) => ' ' + m),
			component: <Icon {...args} />,
			code: `<${iconName} width='42' height='42' />`,
		};
		IconList.push(newValue);
	});

	useEffect(() => {
		setFilteredValue(
			IconList.filter((item: any) => {
				if (!filterValue) return true;
				let itemName = item.name.toLowerCase();
				let matchValue = filterValue.toLowerCase();
				if (itemName.includes(matchValue)) {
					return true;
				} else {
					return false;
				}
			})
		);
	}, [filterValue]);

	const [showModal, setShowModal] = useState<any>();
	const [currentIcon, setCurrentIcon] = useState<any>();

	return (
		<>
			<div style={{ width: '95%', padding: '2.5%', backgroundColor: '#f0f1f3' }}>
				<Heading name='gIcons' variant='h5' marginBottom='10px' marginTop='0'>
					Custom Icons
				</Heading>
				<div style={{ width: '100%', paddingBottom: '10px' }}>
					<InputField
						width='99%'
						placeholder='Filter Icons'
						value={filterValue}
						onChange={(e) => setFilterValue(e.target.value)}
					/>
				</div>

				<div
					id='icons-results'
					className='compact icon-listing margin-top-lg margin-bottom-4xl'
					style={{
						display: 'grid',
						gridGap: '1em 1em',
						gridAutoFlow: 'row dense',
						gridTemplateColumns: 'repeat(auto-fill, minmax(7.5em, 1fr))',
						justifyItems: 'center',
					}}>
					{filteredValue.map((icon, index) => (
						<article
							id='icon-classic-closed-captioning-solid'
							className='wrap-icon with-top-tag'
							icon-style='solid'
							style={{ width: '100%', position: 'relative', marginTop: 0, cursor: 'pointer' }}
							onClick={() => {
								setShowModal(true);
								setCurrentIcon(icon);
							}}
							key={index}>
							<div
								className='icon subtle'
								style={{
									background: '#ffffff',
									padding: '10px',
									border: 0,
									borderRadius: '0.5em',
									display: 'flex',
									flexDirection: 'column',
									textAlign: 'center',
									alignItems: 'center',
									height: '75px',
									justifyContent: 'space-around',
								}}>
								<div>{icon.component}</div>

								<div
									className='icon-name'
									style={{
										width: '100%',
										overflow: 'hidden',
										textOverflow: 'ellipsis',
										fontSize: '12px',
										padding: '5px 0',
									}}>
									{icon.name}
								</div>
							</div>
						</article>
					))}
				</div>

				{showModal && (
					<Dialog
						name='FontAwesomeIcon'
						showDialog={showModal}
						closeModal={() => {
							setShowModal(false);
						}}
						closeCallback={() => {
							setShowModal(false);
						}}
						description={
							<div style={{ display: 'flex', width: '100%' }}>
								<div
									style={{
										padding: '15px',
										border: '1px solid #dadada',
										borderRadius: '10px',
										margin: '0 10px 0 0',
									}}>
									{currentIcon.component}
								</div>
								<div
									style={{
										fontSize: '13px',
										fontStyle: 'italic',
										border: '1px solid #dadada',
										borderRadius: '10px',
										padding: '10px',
										cursor: 'pointer',
										position: 'relative',
										width: '100%',
									}}
									onClick={() => copyToClipBoard(currentIcon.code)}>
									<div
										id='copyCode'
										style={{
											width: '95%',
											padding: '2px',
											background: '#62994d',
											color: '#fff',
											textAlign: 'center',
											position: 'absolute',
											bottom: '2px',
											display: 'none',
											borderRadius: '5px',
											opacity: 0.8,
										}}>
										Code copied successfully!
									</div>
									{currentIcon.code}

									<span
										style={{ display: 'inline-block', position: 'absolute', right: '10px' }}
										title='Click to copy code'>
										<svg
											aria-hidden='true'
											focusable='false'
											data-prefix='far'
											width='15px'
											height='15px'
											data-icon='copy'
											role='img'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 448 512'>
											<path d='M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z'></path>
										</svg>
									</span>
								</div>
							</div>
						}
						heading={'Custom icons'}
					/>
				)}
			</div>
		</>
	);
};

export const Icons = Template.bind({});
Icons.args = {
	width: '24px',
	height: '24px',
	name: 'story',
};
