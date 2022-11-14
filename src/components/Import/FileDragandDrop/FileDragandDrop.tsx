import React, { FC, forwardRef, memo } from 'react';
import Box, { BoxProps } from 'ui-box';
import fileDragandDropStyle from './styles/FileDragandDrop.style';
import { FileIcon } from '../../../icons';
import { useCustomTheme } from '../../../commons';

export interface FileDragandDropProps extends BoxProps<any> {
	className?: string;
	id?: string;
	height?: string;
	width?: string;
	fileType: 'CSV' | 'XLS' | 'CSV & XLS' | 'OVA';
	children?: any;
	getData?: any;
	onError: any;
}

const FileDragandDrop: FC<FileDragandDropProps> = memo(
	forwardRef(
		(
			{
				className,
				id = 'fileImport',
				height,
				width = '100%',
				fileType,
				getData = () => {},
				children,
				onError = () => {},
				...restProps
			}: FileDragandDropProps,
			ref
		) => {
			const theme = useCustomTheme();
			const internalStyles: any = fileDragandDropStyle({ theme: theme as any });
			const updateSelectedFile = (srcObj) => {
				let errCount: number = 0;
				if (!srcObj) {
					errCount++;
				}
				const fileObj = srcObj.files[0];
				if (!fileObj) {
					errCount++;
				}
				if (errCount > 0) {
					onError({ message: 'Corrupted File' });
					return;
				}
				getData(fileObj);
			};

			const onDropHandler = (e) => {
				e.preventDefault();
				e.stopPropagation();
				updateSelectedFile(e.dataTransfer);
			};

			const onDragOverHandler = (e) => {
				e.stopPropagation();
				e.preventDefault();
				e.dataTransfer.dropEffect = 'copy';
			};

			const onDragLeaveHandler = (e) => {};
			return (
				<Box
					className={internalStyles.dropBox}
					onDrop={onDropHandler}
					onDragOver={onDragOverHandler}
					onDragEnter={onDragOverHandler}
					onDragLeave={onDragLeaveHandler}>
					<Box
						width={width}
						justifyContent='center'
						display='flex'
						alignItems='center'
						paddingTop='32px'
						paddingBottom='36px'>
						<FileIcon width='32' height='43' name='file' paddingRight='16px' color='#C0C8D0' />
						{children}
					</Box>
				</Box>
			);
		}
	)
);

export default FileDragandDrop;
