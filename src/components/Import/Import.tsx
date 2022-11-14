/**
 *
 * GImport component
 *
 */

import React, { FC, memo } from 'react';
import FileDragandDrop from './FileDragandDrop/FileDragandDrop';
import { Div } from '..';
import XLSX, { utils, read } from 'xlsx';
import InputFileLink from './InputFileLink/InputFileLink';
export interface GImportProps {
	id?: string;
	fileType: 'CSV' | 'XLS' | 'CSV & XLS' | 'OVA';
	getData: any;
	showChooseLink?: {
		value: string;
		isShown: boolean;
	};
	onError: any;
	dropAreaText: string;
}

const GImport: FC<GImportProps> = memo(
	({
		id = 'fileImport',
		fileType,
		showChooseLink,
		getData = () => {},
		onError = () => {},
		dropAreaText = 'Drag &amp; Drop a file here',
	}: GImportProps) => {
		const handleCSV = (file: any) => {
			try {
				const reader = new FileReader();
				reader.onload = (event) => {
					const wb = read(event?.target?.result);
					const sheets = wb.SheetNames;
					if (sheets.length) {
						const data = utils.sheet_to_json(wb.Sheets[sheets[0]]);
						getData(data);
					}
				};
				reader.readAsArrayBuffer(file);
			} catch (e) {
				onError(e);
			}
		};
		const handleXLSX = (file: any) => {
			try {
				var reader = new FileReader();
				reader.onload = function (e) {
					var data = e?.target?.result;
					let readedData = XLSX.read(data, { type: 'binary' });
					const wsname = readedData.SheetNames[0];
					const ws = readedData.Sheets[wsname];
					const dataParse = XLSX.utils.sheet_to_json(ws, { header: 1 });
					getData(dataParse);
				};
				reader.readAsBinaryString(file);
			} catch (e) {
				onError(e);
			}
		};

		const handleImport = (file: any) => {
			try {
				const type: string = file.name.split('.').pop().toLowerCase();
				if (type)
					if (type === 'csv') handleCSV(file);
					else if (type === 'xlsx' || type === 'xls') handleXLSX(file);
					else if (type === 'ova') getData(file);
					else onError({ message: 'Please choose only supported file format' });
			} catch (e) {
				onError(e);
			}
		};
		const onFileLinkHandler = (e: any) => {
			try {
				handleImport(e.target.files[0]);
			} catch (e) {
				onError(e);
			}
		};

		return (
			<Div data-cy='GImport'>
				<FileDragandDrop
					id={id}
					fileType={fileType}
					children={
						<Div display='flex' alignItems='center'>
							{dropAreaText}
							{showChooseLink && showChooseLink.isShown && (
								<InputFileLink
									name={`${id}fileInputLink`}
									value={showChooseLink.value}
									id={`${id}fileInputLink`}
									onChange={onFileLinkHandler}
									fileType={fileType}
									onError={onError}
								/>
							)}
						</Div>
					}
					getData={handleImport}
					onError={onError}
				/>
			</Div>
		);
	}
);

export default GImport;
