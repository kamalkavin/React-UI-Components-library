import React from 'react';

import { Tooltip } from '../../..';
import { useDynamicRefs, useCustomTheme } from '../../../../commons';
import cx from 'classnames';

import Styles from './styles/TableBody.style';

export const TableBody = ({ page, isSelectable, prepareRow }) => {
	const theme = useCustomTheme();
	const classes = Styles({ theme: theme as any });
	const [getRef, setRef] = useDynamicRefs();

	return page.map((row, i) => {
		prepareRow(row);
		return (
			<tr
				{...row.getRowProps()}
				data-cy='table-row'
				className={classes.tableRow}
				onClick={(event) => {
					if (
						event.target['tagName'] === 'BUTTON' ||
						event.target['tagName'] === 'A' ||
						event.target['tagName'] === 'svg' ||
						(Array.isArray(event.target['className']) &&
							event.target['className'].includes('toggleArrow')) ||
						(isSelectable && !isSelectable()) ||
						(event.target && event.target['parentNode'] && event.target['parentNode'].tagName == 'svg') ||
						(event.target && event.target['firstChild'] && event.target['firstChild'].tagName == 'svg') ||
						!event.currentTarget.contains(event.target as Node)
					) {
						return;
					}
					row.toggleRowSelected();
				}}>
				{row.cells.map((cell, i) => {
					const cellElement = getRef(`${cell.column.id}-${cell.row.id}`);
					return cellElement &&
						cellElement?.current &&
						(cell.column['enableTooltip'] ||
							cellElement?.current?.scrollWidth > cellElement?.current?.clientWidth) ? (
						<Tooltip
							position={'top'}
							showArrow={false}
							hideDelay={400}
							showDelay={250}
							content={
								cell.column['tooltip'] ? (
									cell.column['tooltip'] == 'cell' ? (
										<span className={cx(classes.tooltipMessage)}>{cell.render('Cell')}</span>
									) : (
										<span className={classes.tooltipMessage}>
											{cell.column['tooltip'](cell.row.original)}
										</span>
									)
								) : (
									typeof cell.value !== 'object' && (
										<span className={cx(classes.tooltipMessage)}>{cell.value}</span>
									)
								)
							}>
							<td
								{...cell.getCellProps()}
								className={
									cell.column.id !== 'headerMenu'
										? cell.column.id !== 'selection'
											? classes.cellContent
											: cx(classes.cellContent, classes.headerSelectMenuContent)
										: cx(classes.cellContent, classes.headerCellContent)
								}
								data-cy={cell.render('Header')}>
								<span
									className={cx(
										classes.cellContentOuter,
										classes.cellContentData,
										cell.column.id === 'headerMenu' && classes.menuContentData,
										(cell.column.id === 'expander' || cell.column.id === 'selection') &&
											classes.selectContentData
									)}>
									<div
										ref={
											setRef(
												`${cell.column.id}-${cell.row.id}`
											) as React.RefObject<HTMLDivElement>
										}>
										{cell.render('Cell')}
									</div>
								</span>
							</td>
						</Tooltip>
					) : (
						<td
							{...cell.getCellProps()}
							className={
								cell.column.id !== 'headerMenu'
									? cell.column.id !== 'selection'
										? classes.cellContent
										: cx(classes.cellContent, classes.headerSelectMenuContent)
									: cx(classes.cellContent, classes.headerCellContent)
							}
							data-cy={cell.render('Header')}>
							<span
								className={cx(
									classes.cellContentOuter,
									classes.cellContentData,
									cell.column.id === 'headerMenu' && classes.menuContentData,
									(cell.column.id === 'expander' || cell.column.id === 'selection') &&
										classes.selectContentData
								)}>
								<div
									ref={setRef(`${cell.column.id}-${cell.row.id}`) as React.RefObject<HTMLDivElement>}>
									{cell.render('Cell')}
								</div>
							</span>
						</td>
					);
				})}
			</tr>
		);
	});
};
