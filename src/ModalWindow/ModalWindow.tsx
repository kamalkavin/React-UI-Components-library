/**
 *
 * ModalWindow
 *
 */

import React, { FC, ReactNode } from 'react';
import { Modal, Button, ModalProps } from 'react-bootstrap';

interface IProps extends ModalProps {
	children: ReactNode;
	heading: string;
	id?: string;
	style?: any;
	actionButtons?: any;
	confirmAction?: any;
	confirmActionName?: string;
	cancelAction?: any;
	alarmDetail?: any;
	cancelActionName?: string;
	hideCloseIcon?: boolean;
}

const ModalWindow: FC<IProps> = (props: IProps) => {
	const { confirmAction, confirmActionName, cancelAction, cancelActionName, hideCloseIcon, ...rest } = props;
	return (
		<Modal
			{...rest}
			data-cy={props.heading}
			size={props.size || 'lg'}
			dialogClassName={props.dialogClassName || ''}
			id={props.id || 'bootstrap-modal'}
			backdrop={props.backdrop || 'static'}>
			<Modal.Header closeButton={!hideCloseIcon}>
				<Modal.Title className='heading-centered col-md-11' id='contained-modal-title-vcenter'>
					{props.heading}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>{props.children}</Modal.Body>
			{!props.actionButtons && (
				<Modal.Footer>
					{props.confirmActionName && (
						<span onClick={props.confirmAction}>
							<Button variant='outline-primary' data-cy="onOk">{props.confirmActionName}</Button>
						</span>
					)}
					<span onClick={props.cancelAction ? props.onHide && props.cancelAction : props.onHide}>
						<Button variant='outline-primary' data-cy="onCancel">
							{props.cancelActionName ? props.cancelActionName : 'CLOSE'}
						</Button>
					</span>
				</Modal.Footer>
			)}
		</Modal>
	);
};

export default ModalWindow;
