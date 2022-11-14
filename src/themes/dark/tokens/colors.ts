const colorScales = {
	// Giga colors
	// grey
	gigaGrey1: '#edf2f5',
	gigaGrey2: '#5a626a',
	gigaGrey3: '#303a40',
	gigaGrey4: '#e8eef2',
	gigaGrey5: '#8eaabf',
	textGrey: '#71828f',

	//blue
	gigaBlue1: '#3779e5',

	// Grays / neutrals
	gray900: '#101840',
	gray800: '#474d66',
	gray700: '#696f8c',
	gray600: '#8f95b2',
	gray500: '#c1c4d6',
	gray400: '#d8dae5',
	gray300: '#e6e8f0',
	gray200: '#edeff5',
	gray100: '#f4f5f9',
	gray90: '#f4f6fa',
	gray75: '#f9fafc',
	gray50: '#fafbff',
	lightSlateGrey: '#7f929e',

	// Blues
	blue900: '#0a1433',
	blue800: '#142966',
	blue700: '#1f3d99',
	blue600: '#2952cc',
	blue500: '#3366ff',
	blue400: '#5c85ff',
	blue300: '#85a3ff',
	blue200: '#adc2ff',
	blue100: '#d6e0ff',
	blue50: '#ebf0ff',
	blue25: '#f3f6ff',

	// Reds
	red700: '#7d2828',
	red600: '#a73636',
	red500: '#d14343',
	red300: '#ee9191',
	red100: '#f9dada',
	red25: '#fdf4f4',

	// Greens
	green900: '#10261e',
	green800: '#214c3c',
	green700: '#317159',
	green600: '#429777',
	green500: '#52bd95',
	green400: '#75caaa',
	green300: '#97d7bf',
	green200: '#bae5d5',
	green100: '#dcf2ea',
	green25: '#f5fbf8',

	// Oranges
	orange700: '#996a13',
	orange500: '#ffb020',
	orange100: '#f8e3da',
	orange25: '#fffaf2',

	// Purple
	purple600: '#6e62b6',
	purple100: '#e7e4f9',

	// Teals
	teal800: '#0f5156',
	teal100: '#d3f5f7',

	// Yellows
	yellow800: '#66460d',
	yellow100: '#ffefd2',
	colorDarkGray: '#505050',
	colorLightGray: '#f6f6f6',
};

const colors = {
	...colorScales,

	muted: colorScales.gray700,
	default: colorScales.gray800,
	dark: colorScales.gray900,
	selected: colorScales.blue500,

	tint1: colorScales.gray50,
	tint2: colorScales.gray75,
	overlay: '#000000',

	yellowTint: colorScales.yellow100,
	greenTint: colorScales.green25,
	orangeTint: colorScales.orange25,
	redTint: colorScales.red25,
	blueTint: colorScales.blue25,
	purpleTint: colorScales.purple100,
	tealTint: colorScales.teal100,
	scrollBarColor: colorScales.gigaGrey1,
	navLinkText: colorScales.gigaGrey3,
	border: {
		default: colorScales.gray300,
		muted: colorScales.gray200,
	},

	icon: {
		default: colorScales.gray700,
		muted: colorScales.gray600,
		disabled: colorScales.gray400,
		selected: colorScales.blue500,
	},

	text: {
		danger: colorScales.red500,
		success: colorScales.green500,
		info: colorScales.blue500,
	},
	colorDacyGray: '#555',
	grey11: '#47545d',
	footerColor: '#f9fafb',
	colorNeutral8: '#556672',
	ghostWhite: '#f4f6fe',
	black: '#000000',
	white: '#ffffff',
	colorNeutral9: '#38444c',
	bannerInfoBackground: 'rgba(55,121,229,0.1)',
	quickViewDrawBackground: '#f9fbfc',
	quickViewPageColor: '#242b30',
	inputColor: '#3c4850',
	inputBorderColor: '#e1e8ed',
	titleColor: '#7f929e',
	dangerRedColor: '#ff4c3e',
	darkGreyBlue: '#42474d',
	ravenColor: '#6c737b',
	/* Need to remove the below props as it used the same color code as above. This is added for the purpose of removing it from the place its being used / referred */
	solitude: '#e1e8ed',
	columnHeaderBG: '#f6f8fa',
	bannerBg: '#f3f6fe',
	manateeColor: '#8a919a',
	arsenicColor: '#38444c',
	allPorts: '#136b91',
	lightSlateGrey: '#7f929e',
	atomic: '#3c4850',
	slateGrey: '#3865c8',
	neutralGray: '#aab1b9',
	iceWind: '#e9ecef',
	crossColor: '#26529e',
	pillBackground: 'rgba(182, 207, 252, 0.4)',
	pillColor: '#1f3c75',
	pillTextColor: '#314893',
	errorIcon: '#ff4c35',
	bannerBackground: '#ebf1fd',
	boxShadowColor: '#bfbfbf',
	errorShadow: '#ffeeec',
	dangerCross: '#a8332c',
	lightGray: '#999999',
	lightGreen: '#70838f',
	disabledColor: '#b5c4cd',
	configDesc: '#272a2e',
	infoIcon: '#3272d8',
	defaultPlaceholder: '#a2b3be',
	activePlaceholder: '#99a1aa',
	disabledPlaceholder: '#bbc2c9',
	inputActiveBoxShadow: 'rgba(90, 155, 255, 0.1)',
	errorPlaceholder: 'rgba(168, 51, 44, 0.4)',
	inputErrorBoxShadow: 'rgba(255, 76, 62, 0.1)',
	inputErrorActiveColor: 'rgba(168, 51, 44, 0.3)',
	tableHeaderGrey: '#63737b',
	splitviewHeaderGrey: '#55656f',
	splitviewHOverGrey: '#55656f',
	borderContainerGrey: '#D2DDE5',
};

export default colors;
