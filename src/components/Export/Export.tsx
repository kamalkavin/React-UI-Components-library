/**
 *
 * Export
 *
 */

import React, { FC } from 'react';
import ExportStyles from './styles/Export.style';
import { Menu, Button, Div } from '..';
import { ChevronDownIcon } from '../../icons';
import { useCustomTheme } from '../../commons';
import cx from 'classnames';
import { downloadTable } from '../../utils/utils';

interface ExportProps {
	tableRef: any;
	selectedRecords?: Array<any>;
	isExportSelected?: boolean;
	isExportToServer?: boolean;
	onETSOpen?: any;
	rbacWriteCapabilities?: boolean;
	disabled?: boolean;
}
const Export: FC<ExportProps> = ({
	selectedRecords = [],
	tableRef,
	isExportSelected = true,
	isExportToServer,
	onETSOpen,
	rbacWriteCapabilities,
	disabled,
	...restProps
}: ExportProps) => {
	const theme: any = useCustomTheme();
	const classes = ExportStyles(theme);
	return (
		<>
			<Menu
				name='g-export'
				overflow={'visible'}
				width={'fit-content'}
				className={classes.exportBtn}
				align='end'
				content={
					<Button name={'export-dropdown'} type='button' data-cy='export-dropdown' disabled={disabled}>
						Export{' '}
						<ChevronDownIcon
							customClass={classes.exportIcon}
							width='16px'
							height='16px'
							name='acc_down_arrow'
						/>
					</Button>
				}>
				<Menu.Group>
					<Menu.Item>
						<Menu
							name='exportAll'
							right='calc(100% + 10px)'
							top='-46px'
							activeState={'hover'}
							content={
								<Div
									data-cy='export-all'
									whiteSpace='pre'
									className='exportToggle'
									paddingLeft={20}
									paddingRight={20}
									marginLeft={-20}
									marginRight={-20}>
									Export All{' '}
									<i className={cx('fa fa-angle-right exportToggle', classes.rightArrow)}></i>
								</Div>
							}>
							<Menu.Group>
								<Menu.Item
									data-cy='export-all-csv'
									onSelect={() => {
										downloadTable('setFormat', 'csv');
										tableRef.current.export('Export All');
									}}>
									CSV
								</Menu.Item>
								<Menu.Item
									data-cy='export-all-xlsx'
									onSelect={() => {
										downloadTable('setFormat', 'xlsx');
										tableRef.current.export('Export All');
									}}>
									XLSX
								</Menu.Item>
							</Menu.Group>
						</Menu>
					</Menu.Item>
					{isExportToServer && (
						<Menu.Item
							onSelect={() => rbacWriteCapabilities && onETSOpen()}
							disabled={!rbacWriteCapabilities}>
							Export to Server
						</Menu.Item>
					)}
					{isExportSelected && (
						<Div className={selectedRecords.length ? '' : classes.disabled}>
							<Menu.Item disabled={!selectedRecords.length}>
								<Menu
									name='exportAll'
									right='calc(100% + 10px)'
									top='-92px'
									activeState={'hover'}
									content={
										<Div
											data-cy='export-selected'
											whiteSpace='pre'
											className='exportToggle'
											paddingLeft={20}
											paddingRight={20}
											marginLeft={-20}
											marginRight={-20}>
											Export Selected
											<i className={cx('fa fa-angle-right exportToggle', classes.rightArrow)}></i>
										</Div>
									}>
									<Menu.Group>
										<Menu.Item
											data-cy='export-selected-csv'
											onSelect={() => {
												downloadTable('setFormat', 'csv');
												tableRef.current.export('Export Selected');
											}}>
											CSV
										</Menu.Item>
										<Menu.Item
											data-cy='export-selected-xlsx'
											onSelect={() => {
												downloadTable('setFormat', 'xlsx');
												tableRef.current.export('Export Selected');
											}}>
											XLSX
										</Menu.Item>
									</Menu.Group>
								</Menu>
							</Menu.Item>
						</Div>
					)}
				</Menu.Group>
			</Menu>
		</>
	);
};

export default Export;
