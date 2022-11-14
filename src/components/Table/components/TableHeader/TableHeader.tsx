import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { useCustomTheme } from '../../../../commons';

import cx from 'classnames';

import Styles from './styles/TableHeader.style';

const getItemStyle = ({ isDragging, isDropAnimating }, draggableStyle) => ({
	...draggableStyle,
	// some basic styles to make the items look a bit nicer
	userSelect: 'none',

	// change background colour if dragging
	// background: isDragging ? 'lightgreen' : 'white',

	...(!isDragging && { transform: 'translate(0,0)' }),
	...(isDropAnimating && { transitionDuration: '0.001s' }),
});

export const TableHeader = ({ headerGroups, currentColOrder, setColumnOrder, filterColumn }) => {
	const theme = useCustomTheme();
	const classes = Styles({ theme: theme as any });

	return headerGroups.map((headerGroup, i) => (
		<DragDropContext
			key={i}
			onDragStart={() => {
				currentColOrder.current = headerGroup.headers.map((o) => o.id);
			}}
			onDragEnd={(dragUpdateObj, b) => {
				let colOrder = [...currentColOrder.current];
				const sIndex = dragUpdateObj.source.index;
				const dIndex = dragUpdateObj.destination && dragUpdateObj.destination.index;

				if (
					typeof sIndex === 'number' &&
					typeof dIndex === 'number' &&
					currentColOrder.current[dIndex] != 'selection' &&
					currentColOrder.current[dIndex] != 'headerMenu' &&
					currentColOrder.current[dIndex] != 'expander'
				) {
					colOrder.splice(sIndex, 1);
					colOrder.splice(dIndex, 0, dragUpdateObj.draggableId);
					colOrder = colOrder.filter((item) => item !== 'headerMenu');
					setColumnOrder(colOrder);
				}
			}}>
			<Droppable droppableId='droppable' direction='horizontal'>
				{(droppableProvided, snapshot) => (
					<tr {...headerGroup.getHeaderGroupProps()} ref={droppableProvided.innerRef}>
						{headerGroup.headers.map((column, index) => (
							<Draggable
								key={column.id}
								draggableId={column.id}
								index={index}
								isDragDisabled={column.disableResizing}>
								{(provided, snapshot) => {
									return (
										<th
											{...column.getHeaderProps()}
											className={cx(
												column.id === 'headerMenu' && classes.headerMenu,
												classes.headerCell
											)}>
											<span
												className={cx(classes.headerContent, classes.headerContentData)}
												{...column.getHeaderProps(
													column.getSortByToggleProps({
														title:
															typeof column['Header'] === 'string'
																? '' + column['Header']
																: '',
													})
												)}>
												<div
													{...provided.draggableProps}
													{...provided.dragHandleProps}
													ref={provided.innerRef}
													style={{
														...getItemStyle(snapshot, provided.draggableProps.style),
														// ...style
													}}
													className={cx(
														classes.headerContentEllipsis,
														column.id === 'headerMenu' && classes.overflowVisible
													)}>
													{column.render('Header')}
												</div>
												{column.isSorted ? (
													column.isSortedDesc ? (
														<span
															className={cx(
																classes.sortIcon,
																classes.descSortIcon
															)}></span>
													) : (
														<span
															className={cx(
																classes.sortIcon,
																classes.ascSortIcon
															)}></span>
													)
												) : (
													''
												)}
											</span>

											{filterColumn && !column['hideFilterBox'] && (
												<div className={classes.filterGroup}>{column.render('Filter')}</div>
											)}

											{column.canResize && (
												<div {...column.getResizerProps()} className={classes.resizer} />
											)}
										</th>
									);
								}}
							</Draggable>
						))}
						{droppableProvided.placeholder}
					</tr>
				)}
			</Droppable>
		</DragDropContext>
	));
};
