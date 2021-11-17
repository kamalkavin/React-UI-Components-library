import React, { FC, useState } from 'react';
import { storiesOf } from '@storybook/react';
import SelectField from '../SelectField';
import { Checkbox } from 'components';
// import { useForm } from 'react-hook-form';
const colourOptions: readonly ColourOption[] = [
	{ value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
	{ value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
	{ value: 'purple', label: 'Purple', color: '#5243AA' },
	{ value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
	{ value: 'orange', label: 'Orange', color: '#FF8B00' },
	{ value: 'yellow', label: 'Yellow', color: '#FFC400' },
	{ value: 'green', label: 'Green', color: '#36B37E' },
	{ value: 'forest', label: 'Forest', color: '#00875A' },
	{ value: 'slate', label: 'Slate', color: '#253858' },
	{ value: 'silver', label: 'Silver', color: '#666666' },
];
export const SingleSelectStory: FC = () => {
	const [isClearable, setIsClearable] = useState(true);
	const [isSearchable, setIsSearchable] = useState(true);
	const [isDisabled, setIsDisabled] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isRtl, setIsRtl] = useState(false);

	return (
		<>
			<SelectField
				className='basic-single'
				classNamePrefix='select'
				defaultValue={colourOptions[0]}
				isDisabled={isDisabled}
				isLoading={isLoading}
				isClearable={isClearable}
				isRtl={isRtl}
				isSearchable={isSearchable}
				name='color'
				options={colourOptions}
			/>
			<div style={{ display: 'flex' }}>
				<div style={{ display: 'flex', flexDirection: 'row' }}>
					<Checkbox
						name=''
						checked={isClearable}
						onChange={() => setIsClearable(!isClearable)}
						id='cypress-single__clearable-checkbox'
					/>
					Clearable
				</div>
				<div style={{ marginLeft: '1em', display: 'flex', flexDirection: 'row' }}>
					<Checkbox
						name=''
						checked={isSearchable}
						onChange={() => setIsSearchable(!isSearchable)}
						id='cypress-single__searchable-checkbox'
					/>
					Searchable
				</div>
				<div style={{ marginLeft: '1em', display: 'flex', flexDirection: 'row' }}>
					<Checkbox
						name=''
						checked={isDisabled}
						onChange={() => setIsDisabled(!isDisabled)}
						id='cypress-single__disabled-checkbox'
					/>
					Disabled
				</div>
				<div style={{ marginLeft: '1em', display: 'flex', flexDirection: 'row' }}>
					<Checkbox
						name=''
						checked={isLoading}
						onChange={() => setIsLoading(!isLoading)}
						id='cypress-single__loading-checkbox'
					/>
					Loading
				</div>
				<div style={{ marginLeft: '1em', display: 'flex', flexDirection: 'row' }}>
					<Checkbox
						name=''
						type='checkbox'
						checked={isRtl}
						onChange={() => setIsRtl(!isRtl)}
						id='cypress-single__rtl-checkbox'
					/>
					RTL
				</div>
			</div>
		</>
	);
};
export interface ColourOption {
	readonly value: string;
	readonly label: string;
	readonly color: string;
	readonly isFixed?: boolean;
	readonly isDisabled?: boolean;
}
// const { register } = useForm();

storiesOf('Form/SelectField', module)
	.addParameters({ component: SelectField })
	.add('Single', () => <SingleSelectStory />)
	.add('Multiselect', () => (
		<SelectField
			defaultValue={[colourOptions[2], colourOptions[3]]}
			isMulti
			name='colors'
			options={colourOptions}
			className='basic-multi-select'
			classNamePrefix='select'
		/>
	));
