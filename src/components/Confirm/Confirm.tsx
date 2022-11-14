import React from 'react';
import { Dialog, Div, Button, Paragraph } from '..';
import { useCustomTheme } from '../../commons';
import ConfirmStyle from './styles/Confirm.style';

export interface ConfirmProps {
	isShow: boolean;
	confirmAction: () => any;
	cancelAction: () => any;
	message: string;
	heading: string;
	name: string;
}

const Confirm = (props: ConfirmProps) => {
	const theme = useCustomTheme();
	const classes = ConfirmStyle({ ...props, theme: theme as any });
	const { isShow, confirmAction, cancelAction, message, heading, name } = props;

	return (
		<Dialog
			description={
				<Div className={classes.popupBodyContainer}>
					<Div>
						<Paragraph>{message}</Paragraph>
					</Div>
				</Div>
			}
			heading={heading}
			initialWidth={600}
			showCloseIcon={true}
			closeCallback={() => cancelAction()}
			closeModal={() => cancelAction()}
			footer={
				<Div className={classes.dialogFooterContainer}>
					<Button variant='primary' name='okBtn' onClick={() => confirmAction()}>
						Ok
					</Button>
					<Button variant='secondary' name='cancelBtn' onClick={() => cancelAction()}>
						Cancel
					</Button>
				</Div>
			}
			size='large'
			showDialog={isShow}
			name={name}></Dialog>
	);
};

export default Confirm;
