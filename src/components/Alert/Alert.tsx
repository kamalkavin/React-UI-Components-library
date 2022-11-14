/**
 *
 * Alerts component
 *
 */

import React, { memo, forwardRef } from 'react';
import cx from 'classnames';
import Box, { BoxProps } from 'ui-box';
import { useStyleConfig } from '../../commons';
import useInternalStyles from './styles/Alert.style';
import Button from '../Button/Button';
// import SvgIcon from '../SvgIcon/SvgIcon';
import Heading from '../Typography/Heading';
import Span from '../Typography/Span';
import Overlay from '../Overlay/Overlay';
import { CrossIcon, InfoIcon, WarningIcon } from '../../icons';

const pseudoSelectors = {};

type AlertsVariants = 'info' | 'warning';
export interface AlertsProps extends BoxProps<any> {
	is?: any;
	variant?: AlertsVariants;
	className?: string;
	alertTitle: string;
	children: any;
	action?: string;
	name: string;
	showModal: boolean;
}

const Alerts = memo(
	forwardRef(function Alerts(props: AlertsProps, ref) {
		const {
			is = 'Alert',
			variant = 'info',
			className,
			children,
			isLoading,
			alertTitle,
			actionLabel,
			showAlert,
			name,
			...restProps
		}: any = props;
		const classes = useInternalStyles.useStyles();
		const [openAlert, updateStatusAlert] = React.useState(showAlert);
		const toggleModal = () => updateStatusAlert((state) => !state);
		const showingAlert = () => updateStatusAlert((state) => !state);
		const internalStyles = useInternalStyles.InternalStyles();
		const { className: themedClassName, ...boxProps } = useStyleConfig(
			{ variant },
			pseudoSelectors,
			internalStyles
		);
		return (
			<Box data-cy={name}>
				<Button
					is='button'
					size='large'
					variant='primary'
					className={classes.alertActionBtn}
					onClick={showingAlert}
					data-cy={name}
					name='Open Alert'>
					Open Alert
				</Button>
				{openAlert && (
					<Overlay isShown={true}>
						<Box
							is={is}
							ref={ref}
							className={cx(themedClassName, className)}
							{...boxProps}
							{...restProps}
							data-cy={name}>
							<Box width='100%' display='flex' justifyContent='space-between' {...props.rest}>
								{alertTitle && (
									<Heading
										className={classes.alertTitleStyle}
										name='alertTitle'
										variant={'h6'}
										margin={'0'}>
										{alertTitle}
									</Heading>
								)}
								<Box is='span' data-type='cross-icon' onClick={toggleModal}>
									<CrossIcon
										width={'14'}
										className={classes.close}
										color={'#cad6dd'}
										height={'14'}
										name={'cross-icon'}
									/>
								</Box>
							</Box>
							<Box paddingTop='32px' paddingBottom='16px' display='flex' alignItems='top'>
								<Box is='span' display='inline-block'>
									{variant === 'info' ? (
										<InfoIcon name='info-icon' width={'25'} height={'25'} color='#3778E5' />
									) : (
										<WarningIcon name='warning-icon' width={'25'} height={'25'} />
									)}
								</Box>
								<Span className={classes.text} paddingLeft='12px' size={500}>
									{children}
								</Span>
							</Box>
							<Button
								is='button'
								size='large'
								variant='primary'
								className={classes.alertActionBtn}
								onClick={toggleModal}
								data-cy={name}
								name={actionLabel}>
								{actionLabel}
							</Button>
						</Box>
					</Overlay>
				)}
			</Box>
		);
	})
);
export default Alerts;
