import { getThemingStyles } from '../../../utils/utils';
import { css } from 'glamor';
import { createUseStyles } from 'react-jss';
import { useCustomTheme } from '../../../commons';
const CSS: any = css;

const LoaderStyles = function () {
	const theme = useCustomTheme();
	// Get the component style object from the theme
	const themingStyles = getThemingStyles(theme, `components.Loader`) || {};
	const active = {
		position: 'relative',
		overflow: 'hidden',
		width: '10px',
		height: '10px',
		flexShrink: '0',
		backgroundColor: themingStyles.baseStyle.color,
		borderradius: '50.8734% / 50.8734%',
		transform: 'translate3d(-0.0858403px, 0px, 0px) scale(0.982832, 0.982832)',
		transformOrigin: '50% 50% 0px',
		opacity: '0.942495',
	};
	const inactive = {
		backgroundColor: themingStyles.baseStyle.color,
		borderRadius: '81.5826% / 82.1579%',
		opacity: '0.571221',
		transform: 'translate3d(-0.1073px, 0px, 0px) scale(1.02146, 1.01431)',
		transformOrigin: '50% 50% 0px',
		position: 'relative',
		overflow: 'hidden',
		width: '6px',
		height: '6px',
		flexShrink: '0',
	};
	const dotFlashing1 = CSS.keyframes('fadeInAnimation', {
		'0%': active,
		'25%': inactive,
		'50%': inactive,
		'75%': inactive,
		'100%': active,
	});
	const dotFlashing2 = CSS.keyframes('fadeInAnimation', {
		'0%': inactive,
		'25%': active,
		'50%': inactive,
		'75%': active,
		'100%': inactive,
	});
	const dotFlashing3 = CSS.keyframes('fadeInAnimation', {
		'0%': inactive,
		'25%': inactive,
		'50%': active,
		'75%': inactive,
		'100%': inactive,
	});

	const useStyles = createUseStyles({
		container: {
			display: 'contents',
			'--stack-gap-x': 2,
			'--stack-gap-y': 0,
		},
		dotOne: {
			width: '6px',
			height: '6px',
			inset: 'auto',
			flexShrink: '0',
			backgroundColor: themingStyles.baseStyle.color,
			borderRadius: '83.552% / 83.7719%',
			transform: 'translate3d(0px, 0px, 0px) scale(0.997383, 0.994765)',
			transformOrigin: '50% 50% 0px',
			opacity: '0.5',
			margin: 2,
			animation: `${dotFlashing1} 2s infinite linear alternate`,
		},
		dotTwo: {
			width: '6px',
			height: '6px',
			inset: 'auto',
			flexShrink: '0',
			backgroundColor: themingStyles.baseStyle.color,
			borderRadius: '83.552% / 83.7719%',
			transform: 'translate3d(0px, 0px, 0px) scale(0.997383, 0.994765)',
			transformOrigin: '50% 50% 0px',
			opacity: '0.5',
			margin: 2,
			animation: `${dotFlashing2} 2s infinite linear alternate`,
		},
		dotThree: {
			width: '6px',
			height: '6px',
			inset: 'auto',
			flexShrink: '0',
			backgroundColor: themingStyles.baseStyle.color,
			borderRadius: '83.552% / 83.7719%',
			transform: 'translate3d(0px, 0px, 0px) scale(0.997383, 0.994765)',
			transformOrigin: '50% 50% 0px',
			opacity: '0.5',
			margin: 2,
			animation: `${dotFlashing3} 2s infinite linear alternate`,
		},
	});
	return useStyles();
};
const InternalStyles = function () {
	return {};
};
export default { InternalStyles, LoaderStyles };
