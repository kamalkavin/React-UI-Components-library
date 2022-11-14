import React from 'react';
import { storiesOf } from '@storybook/react';
import Menu from '../components/Menu/Menu';
import Button from '../components/Button/Button';
import Div from '../components/Layers/Div';
import { ChevronDownIcon } from '../icons';

storiesOf('Menu', module)
	.addParameters({ component: Menu })
	.add('default', () => (
		<Menu name='test'>
			<Menu.Group>
				<Menu.Item onSelect={() => console.log('Share')}>Action 1</Menu.Item>
				<Menu.Item onSelect={() => console.log('Move')}>Action 2</Menu.Item>
				<Menu.Item onSelect={() => console.log('Rename')}>Action 3</Menu.Item>
			</Menu.Group>
			<Menu.Divider />

			<Menu.Group>
				<Menu.Item onSelect={() => console.log('Action 4')}>Action 4</Menu.Item>
				<Menu.Item onSelect={() => console.log('Delete')}>Action 5</Menu.Item>
			</Menu.Group>
		</Menu>
	))
	.add('with Content', () => (
		<Menu name='Filter' content={<Button name='btn-click'>Click it </Button>}>
			<Menu.Group>
				<Menu.Item onSelect={() => console.log('Share')}>Action 1</Menu.Item>
				<Menu.Item onSelect={() => console.log('Move')}>Action 2</Menu.Item>
				<Menu.Item onSelect={() => console.log('Rename')}>Action 3</Menu.Item>
			</Menu.Group>
		</Menu>
	))
	.add('subMenu with Content align left', () => (
		<Menu
			name='Filter'
			overflow={'visible'}
			width={'fit-content'}
			marginLeft='300px'
			content={
				<Button name={'download'} type='button' marginLeft='300px'>
					Export <ChevronDownIcon width='12' height='12' name='acc_down_arrow' />
				</Button>
			}>
			<Menu.Group>
				<Menu.Item>
					<Menu
						name='exportAll'
						left={'-95%'}
						top={'0px'}
						width={'100%'}
						activeState={'hover'}
						content={
							<Div
								whiteSpace='pre'
								className='exportToggle'
								paddingLeft={20}
								paddingRight={20}
								marginLeft={-20}
								marginRight={-20}>
								Export All{' '}
								<ChevronDownIcon
									width='12'
									height='12'
									name='acc_down_arrow'
									transform={'rotate(-90deg)'}
									verticalAlign={'middle'}
								/>
							</Div>
						}>
						<Menu.Group>
							<Menu.Item
								onSelect={() => {
									// downloadTable('setFormat', 'csv');
									// tableRef.current.export('Export All');
								}}>
								CSV
							</Menu.Item>
							<Menu.Item
								onSelect={() => {
									// downloadTable('setFormat', 'xlsx');
									// tableRef.current.export('Export All');
								}}>
								XLSX
							</Menu.Item>
						</Menu.Group>
					</Menu>
				</Menu.Item>
				<Menu.Item
					onSelect={() => {
						// setModalShow(true)
					}}>
					Export to Server
				</Menu.Item>
			</Menu.Group>
		</Menu>
	))
	.add('subMenu with Content align right', () => (
		<Menu
			name='Filter'
			overflow={'visible'}
			width={'fit-content'}
			content={
				<Button name={'download'} type='button'>
					Export <ChevronDownIcon width='12' height='12' name='acc_down_arrow' />
				</Button>
			}>
			<Menu.Group>
				<Menu.Item>
					<Menu
						name='exportAll'
						right={'95%'}
						top={'0px'}
						width={'100%'}
						activeState={'hover'}
						content={
							<Div
								whiteSpace='pre'
								className='exportToggle'
								paddingLeft={20}
								paddingRight={20}
								marginLeft={-20}
								marginRight={-20}>
								Export All{' '}
								<ChevronDownIcon
									width='12'
									height='12'
									name='acc_down_arrow'
									transform={'rotate(-90deg)'}
									verticalAlign={'middle'}
								/>
							</Div>
						}>
						<Menu.Group>
							<Menu.Item
								onSelect={() => {
									// downloadTable('setFormat', 'csv');
									// tableRef.current.export('Export All');
								}}>
								CSV
							</Menu.Item>
							<Menu.Item
								onSelect={() => {
									// downloadTable('setFormat', 'xlsx');
									// tableRef.current.export('Export All');
								}}>
								XLSX
							</Menu.Item>
						</Menu.Group>
					</Menu>
				</Menu.Item>
				<Menu.Item
					onSelect={() => {
						// setModalShow(true)
					}}>
					Export to Server
				</Menu.Item>
			</Menu.Group>
		</Menu>
	));
