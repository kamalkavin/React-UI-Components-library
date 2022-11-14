/**
 *
 * QuickView
 *
 */
import React from 'react';
import Button from '../Button/Button';
import Div from '../Layers/Div';
import FormInputField from '../InputField/FormInputField';
import Popover from '../Popover/Popover';
import Span from '../Typography/Span';
import FormField from '../FormField/FormField';
import { useCustomTheme } from '../../commons';
import { useState, useEffect, FC, ReactNode } from 'react';
import cx from 'classnames';
import QuickViewStyles from './styles/QuickView.style';
import Box from 'ui-box';
import { CloseIcon, CrossIcon } from '../../icons';
export interface IQuickViewProps {
	showQV: boolean;
	title: string;
	closeCallback?: any;
	actionbuttons?: any;
	children?: ReactNode;
	type: 'FILTER' | 'DRAWER';
	width?: string | number;
	priority?: number;
	isSavingFilter?: Boolean;
	onSaveFilter?: any;
	onUpdateFilter?: any;
	isEditingSavedFilter?: Boolean;
	currentEditingFilterName?: string;
}

const QuickView: FC<IQuickViewProps> = (props: IQuickViewProps) => {
	const theme: any = useCustomTheme();
	const [showExpanded, setShowExpanded] = useState<boolean>(false);
	const [filterName, setFilterName] = useState<string>('');

	useEffect(() => {
		if (props.currentEditingFilterName) {
			setFilterName(props.currentEditingFilterName);
		}
		return () => {};
	}, [props.currentEditingFilterName]);

	const classes = QuickViewStyles({ theme: theme as any });
	useEffect(() => {}, [props.showQV]);
	const zIndexVal = props.priority && props.priority + 100;
	return props.showQV ? (
		<Box
			style={{ width: props.width && `${props.width}`, zIndex: zIndexVal && zIndexVal }}
			className={cx(
				classes.drawer,
				props.type === 'FILTER' && classes.filter_drawer,
				showExpanded && 'sideBarExpanded',
				!zIndexVal && 'viewIndex'
			)}
			data-cy='gquick-view'>
			{props.type !== 'FILTER' && (
				<Div className={cx(classes.drawer_operations, classes.qv_btn)}>
					<Button
						type='button'
						className={classes.qvexpand}
						onClick={() => setShowExpanded(!showExpanded)}
						name={'qvexpand'}>
						<CrossIcon width={'130'} height={'130'} name='Cross-icon' color='#3c4850' />
					</Button>
				</Div>
			)}

			<Div className={classes.drawer_content}>
				<Div className={cx(classes.page_header_title, classes.fixed_page_header_title)}>
					<Div className='page-header-hldr'>
						<Button
							type='button'
							className={classes.qvclose}
							data-cy='qv-close'
							onClick={props.closeCallback}
							name={'qv-close'}>
							<CrossIcon width={'16'} height={'16'} name='Cross-icon' color='#3c4850' />
						</Button>
						<Div className={classes.page_header_text}>
							<Span data-cy='qv-title' title={props.title}>
								{props.title || ''}
							</Span>
						</Div>
					</Div>

					<Div
						className={cx(
							props?.actionbuttons?.length > 1
								? classes.multiple_page_header_operations
								: classes.page_header_operations,
							classes.operations
						)}>
						<Div className={classes.button_container}>
							{props?.actionbuttons?.length ? (
								props.actionbuttons.map((button: any, index) => {
									return (
										// Save button in Qview with save filter option
										props.isSavingFilter && button.label === 'Save' ? (
											<Popover
												position={'bottom'}
												bringFocusInside={true}
												content={({ close }) => (
													<>
														<Box display={'flex'} cursor={'pointer'} onClick={close}>
															<CloseIcon
																color={'gray'}
																name={'close'}
																width={'15px'}
																height={'15px'}
																position={'absolute'}
																right={24}
															/>
														</Box>
														<FormField
															data-cy='save-filter-container'
															childrenWidth={'88%'}
															marginBottom={0}
															validationMessage={
																!filterName ? 'Name the filter before saving' : false
															}>
															<FormInputField
																width={'100%'}
																type='text'
																variant='primary'
																name='filedUserName'
																value={filterName}
																autoFocus={true}
																required={true}
																onChange={(e) => setFilterName(e.target.value)}
																placeholder='Enter filter name'></FormInputField>
														</FormField>
														<Box
															className={classes.button_container}
															justifyContent={'flex-end'}>
															{
																!props.isEditingSavedFilter ? (
																	/*only SAVE buton in CREATE NEW FILTER mode*/
																	<Button
																		name={'Save'}
																		label={'Save'}
																		data-cy={'filter-name-save-new-mode'}
																		variant={'secondary'}
																		onClick={(e) => {
																			props.onSaveFilter(filterName);
																		}}
																		type='button'>
																		{'Save'}
																	</Button>
																) : (
																	/*Both SAVE and SAVE AS button in EDIT FILTER mode to edit existing and creating new filter respectively*/
																	<>
																		<Button
																			name={'Save'}
																			label={'Save'}
																			data-cy={'filter-name-save-edit-mode'}
																			variant={'secondary'}
																			onClick={(e) => {
																				props.onUpdateFilter(filterName);
																			}}
																			type='button'>
																			{'Save'}
																		</Button>
																		<Button
																			marginLeft={16}
																			name={'Save As'}
																			label={'Save As'}
																			data-cy={'filter-name-save-as-edit-mode'}
																			variant={'primary'}
																			onClick={(e) => {
																				props.onSaveFilter(filterName);
																			}}
																			type='button'>
																			{'Save As'}
																		</Button>
																	</>
																)
																/*Both SAVE and SAVE AS button in EDIT FILTER mode to edit existing and creating new filter respectively*/
															}
														</Box>
													</>
												)}>
												<Button
													name={button.name}
													label={button.label}
													className={classes.page_header_operations_button}
													data-cy={button.name}
													variant={button.variant}
													{...(button.id ? { id: `${button.id}` } : {})}
													key={index}
													onClick={button.action}
													type='button'
													disabled={button.isDisable}>
													{button.label}
												</Button>
											</Popover>
										) : (
											//Buttons in Qview other than save
											<Button
												name={button.name}
												label={button.label}
												className={classes.page_header_operations_button}
												data-cy={button.name}
												variant={button.variant}
												{...(button.id ? { id: `${button.id}` } : {})}
												key={index}
												onClick={button.action}
												type='button'
												disabled={button.isDisable}>
												{button.label}
											</Button>
										)
									);
								})
							) : (
								<></>
							)}
						</Div>
					</Div>
				</Div>
				<Div className={classes.fixed_page_content}>{props.children}</Div>
			</Div>
		</Box>
	) : (
		<></>
	);
};

export default QuickView;
