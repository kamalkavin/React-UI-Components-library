/**
 *
 * InfoBox
 *
 */
import React, { FC, forwardRef, memo, ReactNode } from 'react';
import { Div } from '..';
import { useCustomTheme, useStyleConfig } from '../../commons';
import BannerStyles from './styles/InfoBox.style';
import cx from 'classnames';
import Box, { BoxProps } from 'ui-box';
import { CrossIcon, WarningIcon, InfoBoxIcon } from '../../icons';

type InfoBoxVariant = 'primary' | 'danger';

const pseudoSelectors = {};

const internalStyles = {
	position: 'relative',
	overflow: 'hidden',
	display: 'flex',
	// 15 instead of 16 in order to maintain height with 1px border
	padding: '15px',
};
export interface IInfoBoxProps extends BoxProps<any> {
	name: string;
	children: ReactNode;
	variant?: InfoBoxVariant;
	className?: string;
	onClose?: any;
	show?: boolean;
	iconType?: ReactNode;
	bannerWidth?: string;
	closeBanner?: boolean;
	closeBannerColor?: string;
	title?: string;
	hasIcon?: boolean;
}
const InfoBox: FC<IInfoBoxProps> = memo(
	forwardRef((props: IInfoBoxProps, ref) => {
		const {
			iconType = '',
			children,
			name = '',
			className,
			show = true,
			variant = 'primary',
			bannerWidth,
			closeBannerColor = '',
			closeBanner = false,
			title,
			hasIcon = true,
			onClose = () => {},
			...restProps
		} = props;

		const theme = useCustomTheme();
		const classes = BannerStyles({ theme: theme as any });

		const { className: themedClassName, ...styleProps } = useStyleConfig(
			{ variant },
			pseudoSelectors,
			internalStyles
		);
		if (bannerWidth !== '') {
			styleProps['width'] = bannerWidth;
		} else {
			styleProps['width'] = 'auto';
		}

		return (
			<Box
				ref={ref}
				{...styleProps}
				className={cx(
					className,
					classes.banner,
					variant == 'danger' ? classes.bannerDanger : classes.bannerPrimary
				)}
				role='alert'
				onClose={onClose}
				data-cy={`${name}-banner`}
				{...restProps}>
				<Div className={classes.bannerContainer} display={'flex'} flexDirection={'row'}>
					<Div className={classes.bannerLeft} alignItems='center'>
						{hasIcon && (
							<>
								{iconType !== '' ? (
									iconType
								) : variant == 'danger' ? (
									<WarningIcon
										width='21px'
										height='21px'
										name={`${name}-danger-icon`}
										color={theme.colors.white}
									/>
								) : (
									<InfoBoxIcon
										width='21px'
										height='21px'
										name={`${name}-info-icon`}
										color={theme.colors.slateGrey}
									/>
								)}
							</>
						)}
						<Div className={classes.bannerBody} data-cy={`${name}-banner-body`}>
							{children}
						</Div>
					</Div>

					{closeBanner && (
						<Div className={classes.bannerRight}>
							<Box onClick={onClose} display={'flex'} className={classes.crossIcon}>
								<CrossIcon
									width={'13px'}
									height={'13px'}
									name={`${name}-close`}
									color={
										closeBannerColor !== ''
											? closeBannerColor
											: variant == 'danger'
											? theme.colors.dangerCross
											: theme.colors.crossColor
									}
								/>
							</Box>
						</Div>
					)}
				</Div>
			</Box>
		);
	})
);

export default InfoBox;
