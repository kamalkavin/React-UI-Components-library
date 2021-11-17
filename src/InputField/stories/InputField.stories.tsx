import React from 'react';
import { storiesOf } from '@storybook/react';
import InputField from '../InputField';
// import { useForm } from 'react-hook-form';

// const { register } = useForm();

storiesOf('Form/TextField', module)
	.addParameters({ component: InputField })
	.add('Text', () => <InputField name='test' size='sm' type='text' placeHolder='Sample Text Field' />)
	.add('Password', () => (
		<InputField name='test' size='sm' type='password' placeHolder='Sample Password Text Field' />
	))
	.add('ReadOnly', () => (
		<InputField
			name='test'
			size='sm'
			type='text'
			placeHolder='Sample Read only Text Field'
			readOnly={true}
			value='read only'
		/>
	))
	.add('Dsiabled', () => (
		<InputField name='test' size='sm' type='text' placeHolder='Sample Disabled Text Field' disabled={true} />
	));
