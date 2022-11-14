import React, { memo, forwardRef, FC } from 'react';
import cx from 'classnames';
import { useStyleConfig } from '../../commons';
import Div, { DivProps } from './Div';

const emptyObject = {};

interface CardProps extends DivProps {}

const Card: FC<CardProps> = memo(
	forwardRef(({ className, ...rest }: CardProps, ref) => {
		const { className: themedClassName, ...styleProps } = useStyleConfig(emptyObject, emptyObject, emptyObject);
		return <Div className={cx(className, themedClassName)} {...styleProps} {...rest} />;
	})
);

export default Card;
