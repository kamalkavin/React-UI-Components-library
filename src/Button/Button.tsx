/**
 *
 * Button
 *
 */
import React, { FC } from 'react';
import { Button as BootstarpButton, ButtonProps } from 'react-bootstrap';
interface IButtonProps extends ButtonProps {
	name: string;
	label?: string;
	className?: string;
	type?: string;
	onClick?: any;
	href?: string;
	id?: string;
	disabled?: boolean;
}

const Button: FC<IButtonProps> = ({
	name,
	children,
	label,
	id,
	className,
	onClick = () => {},
	variant,
	href,
	type = 'button',
	disabled = false,
}: IButtonProps) => {
	return (
		<BootstarpButton
			{...(id ? { id: `${id}` } : {})}
			data-cy={name}
			type={type}
			className={className ? `app-btn ${className}` : 'app-btn'}
			onClick={onClick}
			href={href}
			variant={variant}
			disabled={disabled}>
			{children || label}
		</BootstarpButton>
	);
};
export default Button;
