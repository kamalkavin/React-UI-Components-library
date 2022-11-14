import React from 'react';
import { storiesOf } from '@storybook/react';
import Dropdown from '../components/Dropdown/Dropdown';
import Menu from '../components/Menu/Menu';
import { ChevronDownIcon } from '../icons';

storiesOf('Dropdown', module)
	.addParameters({ component: Dropdown })
	.add('default', () => (
		<Dropdown
			type={'button'}
			name={'Dropdown'}
			label={'Dropdown'}
			iconAfter={<ChevronDownIcon width='12px' height='12px' name='arrow' />}>
			<Menu name={'selectDropdown'}>
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
		</Dropdown>
	));
// .add('default', () => (
//     <Dropdown type={'button'} name={'Dropdown'} label={'Dropdown'} iconAfter={'down-arrow'}>

//     <Menu name={'selectDropdown'}>
//         <Menu.OptionsGroup
//             title="Order"
//             options={[
//                 { label: 'Ascending', value: 'asc' },
//                 { label: 'Descending', value: 'desc' },
//             ]}
//             selected={'asc'}
//         // onChange={selected => setSelectedOrder(selected)}
//         >
//         </Menu.OptionsGroup>
//         <Menu.Divider />
//         <Menu.OptionsGroup
//             title="Show"
//             options={[
//                 { label: 'Email', value: 'email' },
//                 { label: 'Phone', value: 'phone' },
//                 { label: 'State', value: 'state' },
//                 { label: 'Country', value: 'country' },
//                 { label: 'Type', value: 'type' },
//             ]}
//             selected={'type'}
//         // onChange={selected => setSelectedField(selected)}
//         >
//         </Menu.OptionsGroup>
//     </Menu>
// </Dropdown>
