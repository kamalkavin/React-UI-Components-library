/**
  /**
 *
 * Table component
 *
 */
import { useCustomTheme } from '../../commons';
import React, { FC, forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import {
	useColumnOrder,
	useExpanded,
	useFilters,
	useFlexLayout,
	usePagination,
	useResizeColumns,
	useRowSelect,
	useSortBy,
	useTable,
} from 'react-table';
import { useSticky } from 'react-table-sticky';
import { ColumnCustomization } from './components/ColumnCustomization';
import { DefaultColumnFilter } from './components/DefaultColumnFilter';
import { EmptyTableBodyText } from './components/EmptyTableBodyText';
import { IndeterminateCheckbox } from './components/IndeterminateCheckbox';
import { PaginationBar } from './components/PaginationBar';
import { TableBody } from './components/TableBody';
import { TableHeader } from './components/TableHeader';
import Styles from './styles/Table.style';

import { downloadTable } from './TableUtils';

export interface TableProps {
	ref?: any;
	columns: any; //mandatory field
	data: any; //mandatory field
	loading?: boolean; //used for cliend side pagination to set loadbar
	tableName?: string; //used only if the table preference need to persisted
	tableDispName?: string; //To display the no.of entries in the table
	callback?: any; //used for sertver side pagination parent function
	selectionCallback?: any; //set parent selection
	context?: any; //set server pagination context
	optionComponent?: any;
	isSelectable?: any;
	treeView?: boolean;
	expandAllByDefault?: boolean;
	hideHeaderMenu?: boolean;
	filterColumn?: boolean;
	disablePagination?: boolean;
	pageSize?: number;
	primaryField?: any;
	currentUserName?: any;
	preferences?: any;
	setPreference?: any;
	triggerPrefAction?: any;
	disableVportCalc?: boolean;
}

let pageSizeSet = false;

const initialState = {
	queryPageIndex: 0,
	queryPageSize: 0.1,
	totalCount: null,
	sort: null,
	filters: null,
	loading: true,
	cachedSelection: [],
};
// let callback;
let originalColumns: any = {};

const PAGE_CHANGED = 'PAGE_CHANGED';
const PAGE_SIZE_CHANGED = 'PAGE_SIZE_CHANGED';
const SORT_CHANGED = 'SORT_CHANGED';
const FILTER_CHANGED = 'FILTER_CHANGED';
const TOTAL_COUNT_CHANGED = 'TOTAL_COUNT_CHANGED';
const DOWNLOAD_TABLE = 'DOWNLOAD_TABLE';
const CACHED_SELECTION = 'CACHED_SELECTION';
const reducer = (state, { type, callback, payload }) => {
	switch (type) {
		case CACHED_SELECTION:
			return (state = {
				...state,
				cachedSelection: payload,
			});
		case PAGE_CHANGED:
			state = {
				...state,
				queryPageIndex: payload,
			};
			break;
		case PAGE_SIZE_CHANGED:
			if (payload)
				state = {
					...state,
					loading: false,
					queryPageSize: payload,
				};
			break;
		case SORT_CHANGED:
			if (payload && payload[0]) {
				state = {
					...state,
					sort: `(${payload[0].id}:${payload[0].desc ? 'desc' : 'asc'})`,
				};
			}
			break;
		case FILTER_CHANGED:
			state = {
				...state,
				filters: JSON.parse(payload),
				queryPageIndex: 0, // When Filter changes, reset the Query page index to 0
			};
			if (state.loading) return state;
			break;
		case TOTAL_COUNT_CHANGED:
			return {
				...state,
				totalCount: payload,
			};
		default:

		// throw new Error(`Unhandled action type: ${type}`);
	}
	if (type === DOWNLOAD_TABLE) {
		callback({
			page: 1,
			size: 10000,
			sort: state.sort,
			filters: state.filters,
			exportColumns: payload,
		});
		return state;
	}

	if (pageSizeSet && callback) {
		callback({
			page: state.queryPageIndex + 1,
			size: state.queryPageSize,
			sort: state.sort,
			filters: state.filters,
		});
	}
	return state;
};

const Table: FC<TableProps> = forwardRef((props: TableProps, ref: any) => {
	const { currentUserName, preferences, setPreference, triggerPrefAction } = props;

	const theme = useCustomTheme();
	const classes = Styles({ theme: theme as any });
	const [{ cachedSelection, queryPageIndex, queryPageSize, totalCount, filters }, dispatch] = React.useReducer(
		reducer,
		initialState
	);
	const [loading, setLoading] = React.useState(true);
	const [filterChange, setFilterChange] = React.useState(false);

	const columnProps = props.columns.map((a) => Object.assign({}, a));
	const [columns, setColumns] = React.useState(useMemo(() => columnProps, []));
	if (
		(loading &&
			props.context &&
			props.context.pageNo == queryPageIndex + 1 &&
			props.context.pageSize == queryPageSize &&
			props.context.totalItems == totalCount) ||
		(loading && !props.context && props.data?.length >= 0 && !props.loading)
	) {
		setLoading(false);
	}

	useEffect(() => {
		originalColumns[`${props.tableName}`] = columnProps.map((a) => Object.assign({}, a));
	}, []);

	useEffect(() => {
		if (
			preferences &&
			preferences.allPreference &&
			preferences.allPreference.data &&
			!preferences?.allPreference?.isLoading &&
			props.tableName
		) {
			setColumns(constructColumns(columns, preferences.allPreference.data));
			dispatch({
				type: FILTER_CHANGED,
				callback: props.callback,
				payload: getPreferredFilter(),
			});
		}
	}, [preferences?.allPreference?.isLoading]);

	useEffect(() => {
		if (
			preferences &&
			preferences.allPreference &&
			preferences.allPreference.data &&
			!preferences?.allPreference?.isLoading &&
			filterChange
		) {
			setColumns(constructColumns(columns, preferences.allPreference.data));
			setFilterChange(false);
			dispatch({
				type: FILTER_CHANGED,
				callback: props.callback,
				payload: getPreferredFilter(),
			});
		}
	}, [filterChange]);
	useEffect(() => {
		let hiddenColumns: any = [];
		if (!props.selectionCallback) hiddenColumns.push('selection');
		if (!props.treeView) hiddenColumns.push('expander');
		if (props.hideHeaderMenu) hiddenColumns.push('headerMenu');

		hiddenColumns = hiddenColumns.concat(
			columns.filter((column) => column.isVisible === false).map((column) => column.accessor)
		);
		setHiddenColumns(hiddenColumns);
	}, [columns]);

	const getPreferredFilter = () => {
		let filterKey = `ui.tables.${props.tableName}.filter`;
		/* Since we have saved the correlated alarms in 'ui.tables.correlatedAlarms.filter' until 5.13 version, and its been modified into 'ui.tables.correlated.filter' inorder to adapt this scenario to show the applied filter on upgrade across 5.13 to greater version this fix is added  */
		if (
			props.tableName === 'correlated' &&
			(!preferences.allPreference.data[filterKey] || preferences.allPreference.data[filterKey] === '{}')
		) {
			filterKey = 'ui.tables.correlatedAlarms.filter';
		}
		return preferences.allPreference.data[filterKey] || '{}';
	};

	const constructColumns = (columns, pref) => {
		if (pref['ui.tables.' + props.tableName + '.selectedColumns']) {
			const selectedColumns = pref['ui.tables.' + props.tableName + '.selectedColumns'].split(',');
			columns = selectedColumns.reduce((columnPref, column) => {
				const selectedColumn = columns.find((x) => x.accessor === column);
				if (!selectedColumn) {
					return columnPref;
				}
				selectedColumn.isVisible = true;
				if (selectedColumn) columnPref.push(selectedColumn);
				return columnPref;
			}, []);
			columnProps.map((column) => {
				const currentColumn = Object.assign({}, column);
				const prefNotExist = columns.some((i) => i.accessor === column.accessor);
				if (!prefNotExist) {
					currentColumn.isVisible = false;
					columns.push(currentColumn);
				}
			});
		} else {
			columns = columnProps;
		}
		columns.map(function (column) {
			const width = pref['ui.tables.' + props.tableName + '.' + column.accessor + '.width'];
			if (width && width !== '*') {
				column.width = Number(width);
			}
		});

		return columns;
	};

	const updatePref = (type, param) => {
		if (!setPreference) return;
		if (!props.tableName) return;
		if (type === 'selectedColumns') {
			let selectedColumns = param.reduce((selectedColumns, column) => {
				if (
					column.isVisible &&
					(column.accessor !== 'headerMenu' ||
						column.accessor !== 'selection' ||
						column.accessor !== 'expander')
				) {
					if (typeof param[0].accessor !== 'function') {
						selectedColumns.push(column.accessor);
					} else {
						selectedColumns.push(column.id);
					}
				}
				return selectedColumns;
			}, []);
			let obj = {};
			obj['ui.tables.' + props.tableName + '.' + 'selectedColumns'] = selectedColumns.join();
			if (
				preferences.allPreference.data['ui.tables.' + props.tableName + '.' + 'selectedColumns'] !==
				selectedColumns.join()
			)
				triggerPrefAction(currentUserName, obj);
		} else if (type === 'columnOrder') {
			let obj = {};
			obj['ui.tables.' + props.tableName + '.' + 'selectedColumns'] = param;
			triggerPrefAction(currentUserName, obj);
		} else if (type === 'width') {
			let obj = {};
			const accessor = Object.keys(columnResizing.columnWidths)[0];
			obj['ui.tables.' + props.tableName + '.' + accessor + '.width'] = '' + param[accessor];
			triggerPrefAction(currentUserName, obj);
		} else if (type === 'sort') {
			let obj = {};
			obj['ui.tables.' + props.tableName + '.' + 'sortColumn'] = param.accessor;
			obj['ui.tables.' + props.tableName + '.' + 'sortDirection'] = param.dir;
			triggerPrefAction(currentUserName, obj);
		} else if (type === 'reset') {
			let obj = {};
			setLoading(true);
			// setColumns(columnProps);
			obj['ui.tables.' + props.tableName + '.' + 'selectedColumns'] = '';
			obj['ui.tables.' + props.tableName + '.' + 'sortColumn'] = '';
			obj['ui.tables.' + props.tableName + '.' + 'sortDirection'] = '';
			triggerPrefAction(currentUserName, obj);
		}
		return 0;
	};

	const resetColumns = () => {
		const tableName = props.tableName || 'undefined';
		const deepClone = originalColumns[tableName].map((a) => Object.assign({}, a));
		setColumns(deepClone);
		if (currentColOrder.current) {
			let colOrder = [...currentColOrder.current];
			colOrder = colOrder.filter((item) => item !== 'headerMenu');
			setColumnOrder(colOrder);
		}
		updatePref('reset', null);
	};

	const exportTable = (type) => {
		if (page && page.length > 0 && page[0].cells.length > 0) {
			if (type == 'Export Selected') {
				const selectedRecords = props.primaryField
					? cachedSelection
					: selectedFlatRows.map((obj) => obj.original);
				downloadTable(page[0].cells, selectedRecords);
			} else if (!props.context || props.data.length === totalCount) {
				// Download client0-side
				downloadTable(
					page[0].cells,
					rows.map((item) => item.original)
				);
				return false;
			} else {
				dispatch({ type: DOWNLOAD_TABLE, callback: props.callback, payload: page[0].cells });
			}
		}
		return false;
	};
	const defaultColumn = useMemo(
		() => ({
			Filter: DefaultColumnFilter,
			// When using the useFlexLayout:
			// minWidth: 30, // minWidth is only used as a limit for resizing
			// width: 90, // width is used for both the flex-basis and flex-grow
			// maxWidth: 200, // maxWidth is only used as a limit for resizing
		}),
		[]
	);
	const getRowId = useCallback((row, relativeIndex, parent) => {
		if (props.primaryField) {
			return row[props.primaryField];
		}
		return parent ? [parent.id, relativeIndex].join('.') : relativeIndex;
	}, []);

	const setDefaultExpandedObject = useCallback((data) => {
		let expandedObject = {};
		data.forEach((element, index) => {
			expandedObject[index] = true;
			if (element.subRows) {
				element.subRows.forEach((subElement, subIndex) => {
					expandedObject['' + index + '.' + subIndex] = true;
					if (subElement.subRows) {
						subElement.subRows.forEach((secondSubElement, secondSubIndex) => {
							expandedObject['' + index + '.' + subIndex + '.' + secondSubIndex] = true;
						});
					}
				});
			}
		});

		return expandedObject;
	}, []);

	// Use the state and functions returned from useTable to build your UI
	const {
		getTableProps,
		getTableBodyProps,
		prepareRow,
		rows,
		page, // Instead of using 'rows', we'll use page,
		// which has only the rows for the active page
		selectedFlatRows,
		// column props
		allColumns,
		headerGroups,
		// flatColumns,
		setColumnOrder,
		setHiddenColumns,
		// pagination props
		// manualPagina tion,
		canPreviousPage,
		canNextPage,
		pageOptions,
		pageCount,
		gotoPage,
		nextPage,
		previousPage,
		setPageSize,
		state: { pageIndex, pageSize, sortBy, columnResizing, hiddenColumns, columnOrder, selectedRowIds },
		setAllFilters,
	} = useTable(
		{
			columns,
			data: props.data ? props.data : [],
			initialState: {
				pageIndex: queryPageIndex,
				pageSize: queryPageSize,
				expanded: props.data && props.expandAllByDefault ? setDefaultExpandedObject(props.data) : {},
			},
			manualPagination: props.disablePagination ? true : !!props.context, // Tell the usePagination
			manualSortBy: !!props.context, // Tell the useSortBy
			disableSortRemove: true,
			pageCount: totalCount ? Math.ceil(totalCount / queryPageSize) : 0,
			defaultColumn,
			autoResetSelectedRows: !props.primaryField,
			getRowId,
		},
		useFilters,
		useSortBy,
		useExpanded,
		usePagination,
		useResizeColumns,
		useFlexLayout,
		useSticky,
		useRowSelect,
		useColumnOrder,
		(hooks) => {
			hooks.allColumns.push((columns) => [
				// Let's make a column for selection
				{
					id: 'selection',
					accessor: 'selection',
					isVisible: false,
					disableResizing: true,
					minWidth: 42,
					width: 42,
					maxWidth: 42,
					hideFilterBox: true,
					sticky: 'left',
					disableHiding: true,
					disableSortBy: true,
					// The header can use the table's getToggleAllRowsSelectedProps method
					// to render a checkbox
					Header: ({ getToggleAllPageRowsSelectedProps }) => (
						<div>
							<IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} name='all-row-select' />
						</div>
					),
					// The cell can use the individual row's getToggleRowSelectedProps method
					// to the render a checkbox
					Cell: ({ row }) => (
						<div
							className={`${
								props.isSelectable === undefined || (props.isSelectable && props.isSelectable(row))
									? ''
									: 'hidden'
							}`}>
							<IndeterminateCheckbox {...row.getToggleRowSelectedProps()} name='row-select' />
						</div>
					),
				},
				{
					// Build our expander column
					id: 'expander', // Make sure it has an ID
					accessor: 'expander',
					disableResizing: true,
					minWidth: 52,
					width: 52,
					maxWidth: 52,
					hideFilterBox: true,
					disableHiding: true,
					disableSortBy: true,
					Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
						<span
							{...getToggleAllRowsExpandedProps()}
							className={`${
								isAllRowsExpanded ? 'toggle-arrow-down menus' : 'toggle-arrow menus'
							}`}></span>
					),
					Cell: ({ row }) =>
						// Use the row.canExpand and row.getToggleRowExpandedProps prop getter
						// to build the toggle for expanding a row
						row.canExpand ? (
							<span
								{...row.getToggleRowExpandedProps({
									style: {
										// We can even use the row.depth property
										// and paddingLeft to indicate the depth
										// of the row
										paddingLeft: `0px`,
										paddingRight: `0px`,
									},
								})}
								className={`${row.isExpanded ? classes.toggleArrow : classes.toggleArrowDown}`}></span>
						) : null,
				},
				...columns,
				{
					id: 'headerMenu',
					accessor: 'headerMenu',
					disableResizing: true,
					minWidth: 42,
					width: 42,
					maxWidth: 42,
					hideFilterBox: true,
					sticky: 'right',
					disableHiding: true,
					disableSortBy: true,
					// The header can use the table's getToggleAllRowsSelectedProps method
					// to render a checkbox
					Header: ({ getToggleAllRowsSelectedProps }) => (
						<div>
							<ColumnCustomization allColumns={allColumns} resetColumns={resetColumns} />
						</div>
					),
					// The cell can use the individual row's getToggleRowSelectedProps method
					// to the render a checkbox
					Cell: props.optionComponent ? props.optionComponent : '',
				},
			]);
		}
	);
	const [pageNumber, setPageNumber] = React.useState<any>(pageIndex + 1);
	//Write functions inside this to call it from anywhere
	useImperativeHandle(ref, () => ({
		filterUpdate: () => {
			if (!filterChange) setFilterChange(true);
		},
		refreshGrid: () => {
			refreshGrid();
		},
		export: (item) => {
			exportTable(item);
		},
		customFiltering: (filterArr) => {
			setAllFilters(filterArr);
		},
	}));
	const refreshGrid = () => {
		dispatch({ type: PAGE_SIZE_CHANGED, callback: props.callback, payload: null });
	};

	const emitSelected = () => {
		let dupeSelectedRow = selectedFlatRows.map((obj) => obj.original);
		dupeSelectedRow = dupeSelectedRow.concat(cachedSelection);
		let selectedRow: any = [];

		Object.keys(selectedRowIds).map(function (rowId) {
			const selected = dupeSelectedRow.find((selected) => selected[props.primaryField] === rowId);
			if (selected) {
				selectedRow.push(selected);
			}
		});
		props.selectionCallback(selectedRow);
		dispatch({ type: CACHED_SELECTION, callback: props.callback, payload: selectedRow });
	};

	useEffect(() => {
		if ((!!props.context || !!props.data) && !loading && hiddenColumns != undefined) {
			columns.forEach((column) => {
				column.isVisible = hiddenColumns?.indexOf(column.accessor) == -1;
			});
			updatePref('selectedColumns', columns);
		}
	}, [hiddenColumns]);

	useEffect(() => {
		if ((!!props.context || !!props.data) && !loading && columnOrder != undefined) {
			updatePref('columnOrder', columnOrder.join());
		}
	}, [columnOrder]);

	useEffect(() => {
		if (columnResizing.isResizingColumn === null) {
			updatePref('width', columnResizing.columnWidths);
		}
	}, [columnResizing]);

	useEffect(() => {
		if (!props.selectionCallback) return;
		if (!props.primaryField) {
			const selectedRow = selectedFlatRows.map((obj) => obj.original);
			props.selectionCallback(selectedRow);
		} else {
			emitSelected();
		}
	}, [selectedFlatRows.length]);

	useEffect(() => {
		setPageNumber(pageIndex + 1);
		if (!!props.context && !loading) {
			dispatch({ type: PAGE_CHANGED, callback: props.callback, payload: pageIndex });
			setLoading(true);
		}
	}, [pageIndex]);

	useEffect(() => {
		if (!!props.context && !loading) {
			dispatch({ type: SORT_CHANGED, callback: props.callback, payload: sortBy });
			setLoading(true);
		}
	}, [sortBy]);

	useEffect(() => {
		if (!props.primaryField) {
			return;
		}
		const missMatch = cachedSelection.filter(function (o1) {
			let objChanged = false;
			props.data.map(function (o2) {
				if (o1[props.primaryField] == o2[props.primaryField] && o1 !== o2) {
					objChanged = true;
				}
			});
			return objChanged;
		});
		if (missMatch.length) {
			emitSelected();
		}
	}, [props.data]);
	useEffect(() => {
		if (props.context) {
			dispatch({
				type: TOTAL_COUNT_CHANGED,
				callback: props.callback,
				payload: props.context.totalItems || 0,
			});
			setLoading(true);
		} else if (props.data?.length >= 0) {
			dispatch({
				type: TOTAL_COUNT_CHANGED,
				callback: null,
				payload: props.data.length,
			});
		}
	}, [props.data?.length, props.context?.totalItems]);

	const currentColOrder: any = useRef();
	const setRows = (el) => {
		if (props.pageSize && props.pageSize !== pageSize && height) {
			dispatch({ type: PAGE_SIZE_CHANGED, callback: props.callback, payload: props.pageSize });
			setPageSize(props.pageSize);
		} else if (
			el &&
			el.querySelector('table') &&
			pageSize != Math.floor((el.querySelector('table').offsetHeight - 42) / 52) &&
			!filterChange &&
			!props.pageSize
		) {
			const maxHeight = Math.floor((el.querySelector('table').offsetHeight - 42) / 52);
			if (maxHeight <= 0) return;
			pageSizeSet = true;
			dispatch({ type: PAGE_SIZE_CHANGED, callback: props.callback, payload: maxHeight });
			setPageSize(maxHeight);
		}
	};
	const [height, setHeight] = useState(window.innerHeight);
	const handleResize = () => {
		setHeight(window.innerHeight);
	};
	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});
	const tableLoadedWithFitlers = filters !== null || !props.tableName;
	return (
		<React.Fragment>
			{tableLoadedWithFitlers && (
				<div
					id='giga-comp-tables'
					data-cy='giga-comp-tables'
					ref={(element) => {
						!props.disableVportCalc && setRows(element);
					}}
					className={classes.gigaTable}>
					{/* {loading && <div>loading</div>} */}
					<table {...getTableProps()} data-cy='table' className={classes.table}>
						<thead data-cy='table-header' className={classes.tableHeader}>
							<TableHeader
								headerGroups={headerGroups}
								currentColOrder={currentColOrder}
								setColumnOrder={setColumnOrder}
								filterColumn={props.filterColumn}
							/>
						</thead>
						<tbody {...getTableBodyProps()} data-cy='table-body'>
							<TableBody page={page} isSelectable={props.isSelectable} prepareRow={prepareRow} />
						</tbody>
						{!page.length && !loading && <EmptyTableBodyText text='No data available' />}
						{!page.length && loading && <EmptyTableBodyText text='Loading...' />}
					</table>
					{/* 
					Pagination can be built however you'd like. 
					This is just a very basic UI implementation:
				  */}

					<PaginationBar
						canPreviousPage={canPreviousPage}
						loading={loading}
						gotoPage={gotoPage}
						previousPage={previousPage}
						pageOptions={pageOptions}
						setPageNumber={setPageNumber}
						pageNumber={pageNumber}
						canNextPage={canNextPage}
						nextPage={nextPage}
						pageCount={pageCount}
						totalCount={totalCount}
						selectedFlatRows={selectedFlatRows}
						disablePagination={props.disablePagination}
						tableDispName={props.tableDispName}
						selectionCallback={props.selectionCallback}
					/>
				</div>
			)}
			{!tableLoadedWithFitlers && <div data-cy='giga-tables-loading'>Loading</div>}
		</React.Fragment>
	);
});

export default Table;
