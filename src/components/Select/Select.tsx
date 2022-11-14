/**
 *
 * Select component
 *
 */

import React, { FC, memo, forwardRef, useContext, createContext } from 'react';
import MultiSelect, { Props as MultiSelectProps, components } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import useInternalStyles, { colourStyles } from './styles/Select.style';
import Box, { BoxProps } from 'ui-box';
import cx from 'classnames';
import { useStyleConfig } from '../../commons';
import { CloseIcon } from '../../icons';
interface ICustomContext {
	name: string;
	isDisabled: boolean;
	onRemove: any;
}

const { Input, MultiValueRemove } = components;

const CustomContext = createContext<ICustomContext>({} as ICustomContext);

const CustomInput = React.memo((inputProps: any) => {
	const { name } = useContext(CustomContext);
	return <Input {...inputProps} data-cy={name} />;
});

const CustomValueRemove = (inputProps) => {
	const { isDisabled, onRemove } = useContext(CustomContext);
	return (
		<>
			{!isDisabled && (
				<MultiValueRemove {...inputProps}>
					<CloseIcon
						onClick={() => onRemove && onRemove(inputProps.data)}
						height={'16px'}
						width={'16px'}
						name={'close'}
					/>{' '}
				</MultiValueRemove>
			)}
		</>
	);
};

let customComponents: any = {
	Input: CustomInput,
	ValueRemove: CustomValueRemove,
};

export interface SelectProps extends Omit<MultiSelectProps, ''>, Omit<BoxProps<any>, ''> {
	onChange?: any;
	onRemove?: any;
	onFocus?: any;
	name: string;
	options: Array<any>;
	customOptions?: any;
	className?: string;
	placeHolder?: string;
	variant?: 'primary';
	ref?: any;
	error?: any;
	creatable?: boolean;
	menuPlacement?: any;
}

const Select: FC<SelectProps> = memo(
	forwardRef((props: SelectProps, ref) => {
		// convert options from {a:1} to [{label=a,value=1}]
		const optionsComputed: any = [];
		for (const [value, label] of Object.entries(props.options)) optionsComputed.push({ label, value });

		// let defaultValueComputed;

		if (props.customOptions) {
			customComponents.Option = props.customOptions;
		}

		const { onChange, onFocus, variant, ...newProps } = props; // on passing onChange prop field array form doesnt work therefore removing onChange prop

		const internalStyles = useInternalStyles();
		const { className: themedClassName, ...boxProps } = useStyleConfig({ variant }, {}, internalStyles);

		const propsObj: any = {
			menuPlacement: props?.menuPlacement || 'auto',
			id: props.name,
			placeholder: props.placeHolder,
			'data-cy': props.name,
			components: customComponents,
			styles: colourStyles,
			isClearable: false,
			isDisabled: props.isDisabled,
			ref: ref,
			control: props.control,
			className: cx(`select-field`, `select-${props.name}`, props.className, themedClassName),
			...newProps,
			...(onChange
				? {
						onChange: (val: any) => {
							let changeVal = val;
							if (props.control && props.is) {
								changeVal = val && val?.length > 0 ? val : null;
							}
							return onChange(changeVal);
						},
				  }
				: {}),
			...(onFocus ? { onFocus: (val) => onFocus(val) } : {}),
		};

		return (
			<Box {...boxProps} height={'auto'}>
				<CustomContext.Provider
					value={{ name: props.name, isDisabled: props.isDisabled, onRemove: props.onRemove }}>
					{!props.creatable ? (
						<MultiSelect {...propsObj} />
					) : (
						<CreatableSelect
							{...propsObj}
							formatCreateLabel={(value) => `${props.label ? props.label : ''} ${value}`}
						/>
					)}
				</CustomContext.Provider>
			</Box>
		);
	})
);

export default Select;
