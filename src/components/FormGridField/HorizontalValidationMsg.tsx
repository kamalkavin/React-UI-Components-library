import React, { memo, forwardRef, FC } from 'react';
import { Paragraph } from '..';
import Box from 'ui-box';

interface ErrMsgPointerIconProps {
	fill?: string;
}
const ErrMsgPointerIcon = ({ ...props }: ErrMsgPointerIconProps) => (
	<svg width={6} height={9} viewBox='0 0 6 9' {...props}>
		<path
			d='M 4.126 0.109 C 4.24 -0.038 4.523 -0.038 4.637 0.109 L 8.723 5.407 C 8.837 5.554 8.695 5.738 8.468 5.738 L 0.295 5.738 C 0.068 5.738 -0.074 5.554 0.04 5.407 Z'
			transform='translate(-1.25 1.531) rotate(-90 4.382 2.869)'
			fill='rgb(255, 76, 62)'></path>
	</svg>
);

interface GHorizontalValidationMsgProps {
	children: React.ReactNode;
	disabled?: boolean;
}

const GHorizontalValidationMsg: FC<GHorizontalValidationMsgProps> = memo(
	forwardRef(function GHorizontalValidationMsg(props: GHorizontalValidationMsgProps, ref) {
		const { disabled, ...restProps } = props;
		return (
			<Box display='flex' height={36} marginLeft={7}>
				<Box position='relative' top='15%'>
					<ErrMsgPointerIcon />
				</Box>
				<Box
					boxSizing='border-box'
					width='auto'
					height='auto'
					display='flex'
					alignItems='center'
					paddingTop={8}
					paddingRight={16}
					paddingBottom={8}
					paddingLeft={16}
					backgroundColor='#ff4c3e'
					overflow='visible'
					borderRadius={8}
					border='1px solid #ff4c3e'
					position='relative'>
					<Paragraph
						width='auto'
						height='auto'
						overflow='visible'
						fontWeight='400'
						fontStyle='normal'
						fontFamily='"Nunito Sans", sans-serif'
						color='#ffffff'
						fontSize={14}
						letterSpacing={0}
						lineHeight={1.4}
						margin='unset'
						{...restProps}
						ref={ref}
					/>
				</Box>
			</Box>
		);
	})
);

export default GHorizontalValidationMsg;
