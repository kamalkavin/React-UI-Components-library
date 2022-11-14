import React from 'react';

import { FastBackwardIcon, FastForwardIcon, AngleLeftIcon, AngleRightIcon } from '../../../../icons';
import { useCustomTheme } from '../../../../commons';
import InputField from '../../../InputField/InputField';
import Button from '../../../Button/Button';
import Styles from './styles/Pagination.style';
import cx from 'classnames';

export const PaginationBar = ({
	disablePagination,
	canPreviousPage,
	loading,
	gotoPage,
	previousPage,
	pageOptions,
	setPageNumber,
	pageNumber,
	canNextPage,
	nextPage,
	pageCount,
	tableDispName,
	totalCount,
	selectedFlatRows,
	selectionCallback,
}) => {
	const theme = useCustomTheme();
	const classes = Styles({ theme: theme as any });
	return (
		<div className={classes.tableBottom}>
			{!disablePagination && (
				<div className={classes.pagination}>
					<Button
						name='icon button'
						className={cx(classes.paginatorButton, !canPreviousPage && classes.disabledIcon)}
						disabled={!canPreviousPage}
						iconBefore={<FastBackwardIcon width='19' height='15' name='fast-backward' />}
						onClick={(e) => {
							if (!loading) {
								e.preventDefault();
								gotoPage(0);
							}
						}}
					/>
					<span className={classes.paginatorSeparator}></span>
					<Button
						name='icon button'
						className={cx(classes.paginatorButton, !canPreviousPage && classes.disabledIcon)}
						disabled={!canPreviousPage}
						iconBefore={<AngleLeftIcon width='8' height='13' name='angle-left' />}
						onClick={(e) => {
							if (!loading) {
								e.preventDefault();
								previousPage();
							}
						}}
					/>
					<div className={classes.displayFlex}>
						<div className={cx(classes.paginatorText, classes.displayFlex)}>Go to page:</div>
						<div className={classes.pt7}>
							{!!pageOptions.length && (
								<InputField
									type='number'
									label='Default'
									value={pageNumber}
									disabled={pageOptions.length <= 1}
									isInvalid={
										pageOptions.length ? pageNumber < 1 || pageNumber > pageOptions.length : false
									}
									variant='primary'
									onChange={(e) => {
										const page = e.target.value ? Number(e.target.value) - 1 : 0;
										const numberInput = e.target.value ? Number(e.target.value) : e.target.value;
										setPageNumber(numberInput);
										e.target.value && !loading && gotoPage(page);
									}}
									paddingX={0}
									className={classes.txtPageInput}
								/>
							)}
							{!pageOptions.length && (
								<InputField
									type='number'
									label='Default'
									value={0}
									disabled
									paddingX={0}
									className={classes.txtPageInput}
								/>
							)}
						</div>
						<div className={cx(classes.paginatorText, classes.displayFlex)}> of {pageOptions.length}</div>
					</div>
					<Button
						name='icon button'
						className={cx(classes.paginatorButton, !canNextPage && classes.disabledIcon)}
						disabled={!canNextPage}
						iconBefore={<AngleRightIcon width='9' height='13' name='angle-right' />}
						onClick={(e) => {
							if (!loading) {
								e.preventDefault();
								nextPage();
							}
						}}
					/>
					<span className={classes.paginatorSeparator}></span>
					<Button
						name='icon button'
						className={cx(classes.paginatorButton, !canNextPage && classes.disabledIcon)}
						disabled={!canNextPage}
						iconBefore={<FastForwardIcon width='19' height='16' name='fast-forward' />}
						onClick={(e) => {
							if (!loading) {
								e.preventDefault();
								gotoPage(pageCount - 1);
							}
						}}
					/>
				</div>
			)}

			{/* //This is to show count on the bottom - Inprogress */}
			{totalCount != null && (
				<div className={classes.rowMetadata}>
					{selectedFlatRows && selectedFlatRows.length && selectionCallback ? (
						<span>
							{selectedFlatRows.length} of {totalCount} selected
						</span>
					) : (
						tableDispName && (
							<span className={classes.paginatorCountText}>
								{totalCount + ' ' + tableDispName.toLocaleLowerCase()} total
							</span>
						)
					)}
				</div>
			)}
		</div>
	);
};
