import { useCustomTheme } from '../../../commons';
import React, { forwardRef, memo, FC, useMemo } from 'react';
import { Label, InputField } from '../../../components';
import inputFileLinkStyle from './styles/InputFileLink.style';
export interface InputFileLinkProps {
	name?: string;
	id?: string;
	onChange?: any;
	value?: string;
	fileType: 'CSV' | 'XLS' | 'CSV & XLS' | 'OVA';
	onError: any;
}
const InputFileLink: FC<InputFileLinkProps> = memo(
	forwardRef(({ name, id = 'fileInput', onChange, value, fileType }: InputFileLinkProps, ref) => {
		const theme = useCustomTheme();
		const style = inputFileLinkStyle({ theme: theme as any });
		const getSupportedFileFormats = useMemo(() => {
			const supportedfileType: string[] = [];
			if (fileType === 'CSV') supportedfileType.push('.csv');
			if (fileType === 'CSV & XLS')
				supportedfileType.push(
					'.csv, .xls, .xlsx, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel'
				);
			if (fileType === 'OVA') supportedfileType.push('.ova');
			return supportedfileType.join(',');
		}, [fileType]);

		return (
			<Label htmlFor={id} className={style.link}>
				{value}
				<InputField
					name={name}
					type='file'
					id={id}
					onChange={onChange}
					accept={getSupportedFileFormats}
					visibility='hidden'
					padding='0'
					margin='0'
					width='0'
					position='absolute'
					zIndex='-1'
					left='-9999px'
				/>
			</Label>
		);
	})
);

export default InputFileLink;
