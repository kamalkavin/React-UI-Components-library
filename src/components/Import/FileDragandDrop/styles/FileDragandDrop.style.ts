import { createUseStyles } from 'react-jss';

const FileDragandDropStyle = createUseStyles((theme: any) => ({
	dropBox: {
		boxSizing: `border-box`,
		flexShrink: '0',
		width: '100%',
		height: 'auto',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		paddingTop: `0`,
		paddingLeft: `16px`,
		paddingRight: `16px`,
		paddingBottom: `0`,
		backgroundColor: `${theme.colors.quickViewDrawBackground}`,
		overflow: 'visible',
		position: 'relative',
		alignContent: 'center',
		flexWrap: 'nowrap',
		borderRadius: '8px',
		border: `2px dashed ${theme.colors.inputBorderColor}`,
	},
}));
export default FileDragandDropStyle;
