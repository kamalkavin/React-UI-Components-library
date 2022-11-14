/**
 *
 * SplitView component
 *
 */

import React, { FC, memo, forwardRef, ReactNode, useRef, useEffect, useState } from 'react';
import cx from 'classnames';
import SplitViewStyles from './styles/SplitView.style';
import { useCustomTheme, useMergedRef } from '../../commons';
import Box from 'ui-box';
import { CrossIcon, VerticalResizeIcon, ChevronDownIcon, MenuIcon } from '../../icons';
import Div from '../Layers/Div';
import Button from '../Button/Button';
import Tooltip from '../Tooltip/Tooltip';
import Menu from '../Menu/Menu';

export interface SplitViewProps {
	isSplitViewMinimized: boolean;
	minimizeSplitView: any;
	titleHeader: string;
	title: string;
	tabsList?: any;
	activeTab?: string;
	setActiveTabCallback?: any;
	closeCallback: any;
	actionMenuItems?: any;
	children: ReactNode;
}

const SplitView: FC<SplitViewProps> = memo(
	forwardRef(function SplitView(
		{
			isSplitViewMinimized,
			minimizeSplitView,
			title,
			tabsList = [],
			activeTab = '',
			setActiveTabCallback = {},
			closeCallback,
			actionMenuItems = {},
			children,
			titleHeader,
			...restProps
		}: SplitViewProps,
		ref
	) {
		const theme = useCustomTheme();
		const classes = SplitViewStyles({ theme: theme as any });

		const menuBar = useRef<any>(null);
		const setMenuBar: any = useMergedRef(menuBar, null);
		const [enableMore, setEnableMore] = useState(false);
		const [hiddenMenus, setHiddenMenus]: any = useState([]);

		function calcWidth() {
			var navwidth = 0;
			var morewidth = menuBar.current.querySelector('#main>:last-child').offsetWidth + 60;
			menuBar.current.querySelectorAll('#main>:not(:last-child)').forEach(function (el) {
				navwidth += el.offsetWidth + 60;
			});
			var availablespace = menuBar.current.offsetWidth - morewidth;
			var lastItem =
				menuBar.current.querySelectorAll('#main>:not(:last-child)')[
					menuBar.current.querySelectorAll('#main>:not(:last-child)').length - 1
				];

			if (navwidth > availablespace && lastItem) {
				setHiddenMenus([...hiddenMenus, lastItem.value]);
				lastItem.setAttribute('data-width', lastItem.offsetWidth);
				menuBar.current.querySelector('#main>:last-child ul').appendChild(lastItem);
			} else if (menuBar.current.querySelector('#main>:last-child input:first-child')) {
				var firstMoreElement = menuBar.current.querySelector('#main>:last-child input:last-child');
				if (navwidth + Number(firstMoreElement.getAttribute('data-width')) + 60 < availablespace) {
					setHiddenMenus(hiddenMenus.filter((item) => item != firstMoreElement.value));
					menuBar.current.insertBefore(firstMoreElement, menuBar.current.querySelector('#main>:last-child'));
				}
			}
			if (menuBar.current.querySelectorAll('#main>:last-child input').length > 0) {
				setEnableMore(true);
			} else {
				setEnableMore(false);
			}
		}
		useEffect(() => {
			// Handler to call on window resize
			const handleResize = function () {
				// Set window width/height to state
				calcWidth();
			};
			// Add event listener
			window.addEventListener('resize', handleResize);
			// Remove event listener on cleanup
			return () => window.removeEventListener('resize', handleResize);
		});

		useEffect(() => {
			calcWidth();
		}, [hiddenMenus]);

		const menuIcon = (
			<MenuIcon
				name='view-more'
				width='14px'
				height='14px'
				color={
					hiddenMenus.includes(tabsList.find((item) => item.name == activeTab)?.title)
						? theme.colors.white
						: theme.colors.atomic
				}
				customClass={
					hiddenMenus.includes(tabsList.find((item) => item.name == activeTab)?.title)
						? classes.activeTabButton
						: classes.tabButton
				}
			/>
		);
		return (
			<Box {...restProps} width={'calc(100% - 16px)'} marginLeft={'8px'} id='g-split-view' data-cy='g-split-view'>
				<Div className={classes.container} height={isSplitViewMinimized ? 64 : 378}>
					<Div className={classes.header}>
						<Div className={classes.headerContent}>
							<Div className={classes.titleHeaderContent}>
								<Div className={classes.closeIcon}>
									<Box
										display={'flex'}
										height={'100%'}
										justifyContent={'center'}
										alignItems={'center'}
										cursor={'pointer'}
										onClick={(e) => closeCallback(e)}>
										<CrossIcon
											width={'16px'}
											height={'16px'}
											name={`splitview-close`}
											color={theme.colors.atomic}
										/>
									</Box>
								</Div>
								<Div className={classes.titleHeaderCaption}>{titleHeader}:</Div>
								<Tooltip
									position={'top'}
									showArrow={false}
									hideDelay={400}
									showDelay={250}
									content={title}>
									<Div className={classes.titleHeader}>{title}</Div>
								</Tooltip>
							</Div>
							<div
								className={classes.tabSection}
								id='main'
								ref={(ref) => {
									setMenuBar(ref);
								}}>
								{tabsList && tabsList.length ? (
									<>
										{tabsList.map((tab: any) => {
											return (
												<input
													className={
														activeTab === tab.name
															? cx(classes.li, classes.activeTabButton)
															: cx(classes.li, classes.tabButton)
													}
													onClick={(e) => {
														setActiveTabCallback(e, tab.name);
													}}
													value={tab.title}
													type='button'
													disabled={tab.disabled}
												/>
											);
										})}
										<Div opacity={enableMore ? 1 : 0}>
											<li className={classes.noStyleList} data-width='80'>
												<Menu name='group-page' content={menuIcon}>
													<Menu.Group>
														{tabsList
															.filter((item) => hiddenMenus.includes(item.title))
															.map((menu: any) => {
																return (
																	<Menu.Item
																		onClick={(e) => {
																			setActiveTabCallback(e, menu.name);
																		}}
																		className={
																			activeTab === menu.name
																				? classes.activeTabButton
																				: ''
																		}>
																		{menu.title}
																	</Menu.Item>
																);
															})}
													</Menu.Group>
												</Menu>
												<ul className={classes.subul}></ul>
											</li>
										</Div>
									</>
								) : (
									<></>
								)}
							</div>
						</Div>

						<Div className={classes.headerOption}>
							{actionMenuItems && actionMenuItems.length && (
								<Menu
									name='export-dropdown'
									overflow={'visible'}
									width={'fit-content'}
									align={'center'}
									content={
										<Button name={'download'} type='button' data-cy='export-dropdown'>
											Actions{' '}
											<ChevronDownIcon
												marginLeft='8px'
												width='16px'
												height='16px'
												name='acc_down_arrow'
											/>
										</Button>
									}>
									<Menu.Group>
										{actionMenuItems.map(function (item) {
											return (
												<Menu.Item name={item.name} onSelect={() => item.actionCallback()}>
													{item.name}
												</Menu.Item>
											);
										})}
									</Menu.Group>
								</Menu>
							)}
							<Div className={classes.resizeIcon}>
								<VerticalResizeIcon
									width={'16px'}
									height={'16px'}
									name={`splitview-resize`}
									color={theme.colors.atomic}
									cursor={'pointer'}
									onClick={minimizeSplitView}
								/>
							</Div>
						</Div>
					</Div>
					{!isSplitViewMinimized && <Div className={classes.splitviewBody}>{children}</Div>}
				</Div>
			</Box>
		);
	})
);

export default SplitView;
