/**
 *
 * Alert
 *
 */
import React, { FC, ReactNode } from 'react';
import { Alert, AlertProps } from 'react-bootstrap';
import SvgIcon from 'components/SvgIcon/SvgIcon';

interface IAlertProps extends AlertProps {
  variant: string;
  children: ReactNode;
	dismissible?: boolean;
  className?: string;
  onClose?: any;
  show?: boolean;
}

const Banner: FC<IAlertProps> = ({ dismissible, children, className, onClose = () => {}, show = true, variant = 'primary' }: IAlertProps) => {
	return (
		<Alert show={show} dismissible={dismissible} variant={variant} className={className} onClose={onClose} data-cy="Info-banner">
      <div className="d-flex flex-row">
        <div className="align-self-center mr-15">
          <SvgIcon icon='Info' size={24} color='#3865c8'/>
        </div>
        <div className="banner-body">
          {children}
        </div>
      </div>
    </Alert>
	);
};

export default Banner;
