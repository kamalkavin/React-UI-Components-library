/**
 *
 * Grid component
 *
 */

import { useCustomTheme, useMediaQuery } from '../../commons';
import React, { FC, memo, forwardRef, useEffect, useState } from 'react';
import Box, { BoxProps } from 'ui-box';
import { useStyles } from './styles/Grid.style';

// type GridItemsAlignment = 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';

// type GridJustify = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';

type GridSizes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface GridProps extends BoxProps<any> {
	align?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
	column?: boolean;
	expanded?: boolean;
	justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
	lg?: GridSizes;
	md?: GridSizes;
	row?: boolean;
	sm?: GridSizes;
	collapse?: 'sm' | 'lg' | 'md';
}

const Grid: FC<GridProps> = memo(
	forwardRef(({ children, column, expanded, justify, align, collapse, lg, md, row, sm, ...rest }: GridProps, ref) => {
		const isDesktop = useMediaQuery('(min-width: 960px)');
		const isTablet = useMediaQuery('(min-width: 600px) and (max-width:960px)');
		const isMobile = useMediaQuery('(min-width: 100px) and (max-width:600px)');
		const isRow: boolean = row || !column;

		const theme: any = useCustomTheme();
		const classes = useStyles(theme);
		const cls =
			(!isRow ? classes.column : classes.row) +
			// Row styling
			(isRow && collapse ? ` ${classes.collapse}` : '') +
			(isRow && expanded ? ` ${classes.expanded}` : '') +
			(isRow && justify ? ` ${classes[justify]}` : '') +
			(isRow && align ? ` ${classes['align-' + align]}` : '') +
			// Column styling
			(!isRow && sm && isMobile ? ` ${classes['sm-' + sm]}` : '') +
			(!isRow && isMobile && collapse === 'sm' ? ` ${classes.collapse}` : '') +
			(!isRow && md && isTablet ? ` ${classes['md-' + md]}` : '') +
			(!isRow && isTablet && collapse === 'md' ? ` ${classes.collapse}` : '') +
			(!isRow && lg && isDesktop ? ` ${classes['lg-' + lg]}` : '') +
			(!isRow && isDesktop && collapse === 'lg' ? ` ${classes.collapse}` : '');
		const [newClasses, setNewClasses] = useState(cls);

		useEffect(() => {
			const cls =
				(!isRow ? classes.column : classes.row) +
				// Row styling
				(isRow && collapse ? ` ${classes.collapse}` : '') +
				(isRow && expanded ? ` ${classes.expanded}` : '') +
				(isRow && justify ? ` ${classes[justify]}` : '') +
				(isRow && align ? ` ${classes['align-' + align]}` : '') +
				// Column styling
				(!isRow && sm && isMobile ? ` ${classes['sm-' + sm]}` : '') +
				(!isRow && isMobile && collapse === 'sm' ? ` ${classes.collapse}` : '') +
				(!isRow && md && isTablet ? ` ${classes['md-' + md]}` : '') +
				(!isRow && isTablet && collapse === 'md' ? ` ${classes.collapse}` : '') +
				(!isRow && lg && isDesktop ? ` ${classes['lg-' + lg]}` : '') +
				(!isRow && isDesktop && collapse === 'lg' ? ` ${classes.collapse}` : '');
			setNewClasses(cls);
		}, [isDesktop, isTablet, isMobile, align, justify, expanded, collapse]);

		return (
			<Box is='div' ref={ref} className={newClasses} {...rest}>
				{children}
			</Box>
		);
	})
);

export default Grid;
