const baseStyle = {
	shadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.15)',
	backgroundColor: '#ffffff',
    color: '#000000',
    fontFamily: '"Nunito Sans", sans-serif'
};

const variants = {
    success: {
        color: '#000000',
        backgroundColor: '#ffffff',
    },
    danger: {
        color: '#000000',
        backgroundColor: '#ffffff',
    },
    success_min: {
        color:'#3c4850',
        backgroundColor: `#ffffff`,
        shadow: '0px 0px 0px 0px',
    },
    danger_min: {
        color:'#ffffff',
        backgroundColor: '#ffffff',
        shadow: '0px 0px 0px 0px',
    },
    multiple_Notification: {
        color: '#000000',
        backgroundColor: '#ff4c3e',
    },

	tertiary: {},
};

export default {
	baseStyle,
	variants,
};
