/**
 *
 * TagsInput component
 *
 */

import React from 'react';
import cx from 'classnames';
import TagsInputStyles from './styles/TagsInput.style';
import { useCustomTheme } from '../../commons';
import Span from '../Typography/Span';
import Div from '../Layers/Div';
import { CloseIcon } from '../../icons';
import InputField from '../InputField/InputField';
import FormFieldValidationMessage from '../FormField/FormFieldValidationMessage';

interface TagProps {
	tagName: string;
	remove: (tagName: string) => void;
	disabled?: boolean;
}

function Tag({ tagName, remove }: TagProps) {
	const theme = useCustomTheme();
	const classes = TagsInputStyles({ theme: theme as any });
	const handleOnRemove = (e) => {
		e.stopPropagation();
		remove(tagName);
	};

	return (
		<Div className={cx(classes.tag)}>
			<Span className={classes.tagText}>{tagName}</Span>
			<Span className={classes.crossIcon} onClick={handleOnRemove} data-cy={`remove-${tagName}`}>
				<CloseIcon width={'14'} height={'14'} color={'#1f3c75'} name={'close-icon'} />
			</Span>
		</Div>
	);
}

export interface TagsInputProps {
	name?: string;
	placeHolder?: string;
	value: string[];
	tagValue: string;
	onChange: (tags: string) => void;
	onBlur?: (tag: string) => void;
	seprators?: string[];
	onRemoved?: (tag?: string) => void;
	isInvalid?: boolean;
	validationMessage?: string;
	onInputChange?: any;
}

const defaultSeprators = [','];

const TagsInput = ({
	name,
	placeHolder,
	value,
	onChange,
	tagValue,
	onBlur,
	seprators,
	onRemoved,
	isInvalid,
	onInputChange,
	validationMessage,
}: TagsInputProps) => {
	const theme = useCustomTheme();
	const classes = TagsInputStyles({ theme: theme as any });

	const handleOnKeyDown = (e) => {
		e.stopPropagation();
		const tagName = e.target.value;
		if (e.key === 'Backspace' && value.length && !tagName) {
			if (onRemoved) {
				onRemoved();
			}
		}
		if (tagName && (seprators || defaultSeprators).includes(e.key)) {
			onChange(tagValue);
			// onInputChange('');
			e.preventDefault();
		}
	};

	const handleOnChange = (e) => {
		onInputChange(e.target.value);
	};

	const onTagRemove = (tagName) => {
		if (onRemoved) {
			onRemoved(tagName);
		}
	};

	return (
		<>
			<Div
				aria-labelledby={name}
				className={cx(classes.container, isInvalid ? classes.error : '')}
				data-cy='TagsInput'>
				{value.map((tag) => (
					<Tag key={tag} tagName={tag} remove={onTagRemove} />
				))}
				<InputField
					type='text'
					name={name}
					onBlur={onBlur}
					value={tagValue}
					variant={'transparent'}
					onChange={handleOnChange}
					onKeyDown={handleOnKeyDown}
					placeholder={value.length == 0 ? placeHolder : ''}
					className={cx(classes.inputField, value.length == 0 ? classes.widInherit : classes.widAuto)}
				/>
			</Div>
			<Div className={classes.errorText} height={37}>
				{validationMessage && <FormFieldValidationMessage>{validationMessage}</FormFieldValidationMessage>}
			</Div>
		</>
	);
};
export default TagsInput;
