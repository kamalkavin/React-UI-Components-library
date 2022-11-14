import React, { FC } from 'react';

import useInternalStyles from '../styles/PillInput.style';
import { pillConstants } from '../constants/PillInputConstants';
import CriteriaPill from '../../CriteriaPill/CriteriaPill';

interface IDropdownListProps {
	selectedList: any;
	disable?: boolean;
	name: any;
	pillContainerSize: number;
	defaultPillwidth: number;
	removeSelection: any;
	remainingPillsCount: any;
}
const DropdownList: FC<IDropdownListProps> = ({
	name,
	selectedList,
	pillContainerSize,
	defaultPillwidth,
	removeSelection,
	remainingPillsCount,
	disable,
}: IDropdownListProps) => {
	const classes = useInternalStyles.PillInputLayoutStyles();
	let displayedPillsArr = [] as any;
	const { textMaxWidth, minPillWidth, minCharsPillSize } = pillConstants;
	selectedList.length > 0 &&
		displayedPillsArr.push(
			<CriteriaPill
				key={0}
				variant='info'
				value={selectedList[0]?.label}
				className={classes.pillSelection}
				isRemovable={!disable ? true : false}
				onPillRemove={() => {
					removeSelection(selectedList[0]?.value);
				}}
				textMaxWidth={textMaxWidth}
			/>
		);
	let widthAvailable =
		pillContainerSize - (selectedList[0]?.label.length <= minCharsPillSize ? minPillWidth : defaultPillwidth);
	const pillsWidth = [] as number[];

	let selectedPills = selectedList.map((item, pillIndex) => {
		if (pillIndex > 0 && widthAvailable > defaultPillwidth) {
			if (item.label.length <= minCharsPillSize) {
				pillsWidth.push(minPillWidth);
			} else {
				pillsWidth.push(defaultPillwidth);
			}

			widthAvailable = widthAvailable - pillsWidth.reduce((firstVal, secondVal) => firstVal + secondVal, 0);

			return (
				<CriteriaPill
					key={pillIndex}
					variant='info'
					value={item.label}
					className={classes.pillSelection}
					isRemovable={!disable ? true : false}
					onPillRemove={() => {
						removeSelection(item.value);
					}}
					textMaxWidth={textMaxWidth}
				/>
			);
		}
		return;
	});
	displayedPillsArr = displayedPillsArr.concat(selectedPills).filter((e) => e);
	remainingPillsCount(selectedList.length - displayedPillsArr.length);
	return displayedPillsArr;
};
export default DropdownList;
