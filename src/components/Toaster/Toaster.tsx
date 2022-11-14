/**
 *
 * Toaster component
 *
 */

import { useStyleConfig, useCustomTheme } from '../../commons';
import React, { FC, memo, forwardRef, useEffect, ReactNode } from 'react';
import Box, { BoxProps } from 'ui-box';
import cx from 'classnames';
import Button from '../Button/Button';
import Span from '../Typography/Span';
import { ChevronUpIcon, CrossIcon, SuccessIcon, WarningIcon, WarningSquareIcon } from '../../icons';
import useInternalStyles from './styles/Toaster.style';
import { getThemingStyles } from '../../utils/utils';

type AlertsVariants = 'success' | 'danger' | 'multiple_notifications';
export interface ToasterProps extends BoxProps<any> {
	id?: string;
	name: string;
	variant?: AlertsVariants;
	showToaster?: boolean;
	actionLabel?: string;
	styles?: any;
	isCancelable?: boolean;
	cancelLabel?: string;
	customIcon?: ReactNode;
}

const pseudoSelectors = {};

const Toaster: FC<ToasterProps> = memo(
	forwardRef(function Toaster(props: ToasterProps, forwardedRef) {
		const {
			is = 'div',
			name,
			variant = 'danger',
			label,
			isCancelable = false,
			showToaster,
			className,
			children,
			styles,
			cancelLabel,
			customIcon,
			...restProps
		}: any = props;
		const internalStyles = useInternalStyles.ToasterStyles();
		const useStyles = useInternalStyles.ToasterCreateStyles();
		const [expandedToaster, collapseToaster] = React.useState(false);
		const [toasterVisibility, setToasterVisibility] = React.useState(showToaster);
		const duration = 10000;
		const theme = useCustomTheme();
		// Get the component style object from the theme
		const themingStyles = getThemingStyles(theme, `components.Toaster`) || {};

		const { className: themedClassName, ...boxProps } = useStyleConfig(
			{ variant },
			pseudoSelectors,
			internalStyles
		);

		useEffect(() => {
			setTimeout(function () {
				collapseToaster(!expandedToaster);
			}, duration);
		}, []);

		const onToastHover = () => {
			collapseToaster(false);
		};

		const updateShowToaster = () => {
			setToasterVisibility(!toasterVisibility);
		};

		const onConfirm = () => {
			updateShowToaster();
			props.onConfirm();
		};

		return (
			<Box style={styles} className={useStyles.container} data-cy={name}>
				{toasterVisibility && (
					<Box
						is={is}
						ref={forwardedRef}
						className={cx(expandedToaster ? useStyles[`${variant}_min`] : '', themedClassName, className)}
						{...boxProps}
						{...restProps}
						onMouseOver={onToastHover}>
						<Box
							display='flex'
							width='100%'
							alignItems='top'
							flexDirection='row'
							className={useStyles.tosterHead}>
							<Box is='span' display='inline-block' flex='0'>
								{variant === 'success' ? (
									props.customIcon ? (
										props.customIcon
									) : (
										<SuccessIcon width='20' height='20' name='success-icon' />
									)
								) : expandedToaster ? (
									<WarningIcon width='25' height='25' name='toaster-icon' />
								) : (
									<WarningSquareIcon width='25' height='25' name='toaster-icon' />
								)}
							</Box>
							<Span
								data-cy='toaster-message'
								display='block'
								paddingX='16px'
								paddingBottom='16px'
								size={500}
								flex='100%'
								color={expandedToaster ? themingStyles.variants[`${variant}_min`].color : ''}
								className={cx(useStyles.tosterHeadTitle, expandedToaster ? useStyles.collapse : '')}>
								{children}
							</Span>
							<Box is='div'>
								{expandedToaster ? (
									variant === 'success' ? (
										<Box is='span'>
											<ChevronUpIcon
												name='arrow-up-icon'
												width={'16'}
												height={'12'}
												color={'#3c4850'}
											/>
										</Box>
									) : (
										<Box is='span'>
											<ChevronUpIcon name='arrow-up-icon' width={'16'} height={'12'} />
										</Box>
									)
								) : (
									<Box is='span' onClick={updateShowToaster}>
										<CrossIcon
											name='cross-icon'
											color='rgb(202, 214, 221)'
											width={'14'}
											height={'14'}
											className={useStyles.crossButton}
										/>
									</Box>
								)}
							</Box>
						</Box>
						<Box is='div' className={useStyles.tosterHead}>
							{isCancelable ? (
								<Button
									className={cx(
										useStyles.tosterHeadTitle,
										expandedToaster ? useStyles.actionTransition : ''
									)}
									name={`${name}_cancel_button`}
									data-cy={`${name}_button`}
									is='button'
									size='large'
									width='100px'
									variant='secondary'
									onClick={updateShowToaster}>
									{cancelLabel}
								</Button>
							) : (
								''
							)}
							<Button
								className={cx(
									useStyles.tosterHeadTitle,
									expandedToaster ? useStyles.actionTransition : ''
								)}
								name={`${name}_confirm_button`}
								is='button'
								size='large'
								width='100px'
								variant='primary'
								onClick={onConfirm}>
								{label}
							</Button>
						</Box>
					</Box>
				)}
			</Box>
		);
	})
);

export default Toaster;
