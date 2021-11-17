/**
 *
 * Footer
 *
 */

import SvgIcon from 'components/SvgIcon/SvgIcon';
import React, { FC, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select';
interface IProps {}
interface data {
	label: string;
	value: string;
}
const Footer: FC<IProps> = (props: IProps) => {
	const angularData = useSelector((state: any) => state.angularData);
	const globalData = useSelector((state: any) => state.globalData);
	const [fMInstanceName, setFMInstanceName] = useState('GigaVUE-FM');
	const [nrtTimestamp, setNrtTimestamp] = useState<any>();
	const [currentDevice, setCurrentDevice] = useState<any>();
	const [fmCluster, setFMCluster] = useState([]);
	const [selectedNode, setSelectedNode] = useState<data | {} | undefined | null>({});
	const [isFmSpecificPage, setIsFmSpecificPage] = useState(false);

	useEffect(() => {
		if (angularData.fmName) {
			setFMInstanceName(angularData.fmName);
			document.title = angularData.fmName;
		} else {
			setFMInstanceName('GigaVUE-FM');
			document.title = 'GigaVUE-FM';
		}
		if (globalData.fmCluster && globalData.fmCluster.nodes && globalData.fmCluster.nodes.length > 0) {
			let nodes = globalData.fmCluster.nodes;
			let selectedNode = globalData.fmCluster.selectedNode;
			selectedNode = {
				label:
					selectedNode.label.indexOf('(') > -1
						? selectedNode.label
						: selectedNode.label + ' (' + selectedNode.value + ')',
				value: selectedNode.value,
			};
			nodes = nodes.map(node => {
				return {
					label: node.label + ' (' + node.value + ')',
					value: node.value,
				};
			});
			setFMCluster(nodes);
			setSelectedNode(selectedNode);
		}
	}, [angularData.fmName, globalData.fmCluster]);

	useEffect(() => {
		if (angularData.nrtTimestamp) {
			setNrtTimestamp(angularData.nrtTimestamp);
		}
	}, [angularData.nrtTimestamp]);

	useEffect(() => {
		if (angularData.currentFMPage) {
			let isFmSpecificPage =
				angularData.currentFMPage.indexOf('/logs') > -1 ||
				angularData.currentFMPage.indexOf('/fmabout') > -1 ||
				angularData.currentFMPage.indexOf('/HM') > -1 ||
				angularData.currentFMPage.indexOf('/ipResolver') > -1 ||
				angularData.currentFMPage.indexOf('/debugging/configure') > -1;
			setIsFmSpecificPage(isFmSpecificPage);
		}
	}, [angularData.currentFMPage]);

	useEffect(() => {
		if (selectedNode && Object.keys(selectedNode).length > 0) {
			let reactToNg;
			let data = {
				detail: { eventType: 'selectedNode', data: selectedNode },
			};
			if (angularData.currentFMPage.indexOf('/logs') > -1) {
				reactToNg = new CustomEvent('logs', data);
			} else if (angularData.currentFMPage.indexOf('/fmabout') > -1) {
				reactToNg = new CustomEvent('about', data);
			} else if (angularData.currentFMPage.indexOf('/HM') > -1) {
				reactToNg = new CustomEvent('HM', data);
			} else if (angularData.currentFMPage.indexOf('/ipResolver') > -1) {
				reactToNg = new CustomEvent('ipResolver', data);
			} else if (angularData.currentFMPage.indexOf('/debugging/configure') > -1) {
				reactToNg = new CustomEvent('debuggingConfigure', data);
			} else {
				reactToNg = new CustomEvent('fmInstanceChange', data);
			}
			window.document.dispatchEvent(reactToNg);
		}
	}, [selectedNode]);

	useEffect(() => {
		if (globalData.currentDevice) {
			setCurrentDevice(globalData.currentDevice);
		}
	}, [globalData.currentDevice]);

	const customStyles = {
		dropdownIndicator: defaultStyles => ({ ...defaultStyles, color: '#38444c' }),
		indicatorSeparator: defaultStyles => ({ ...defaultStyles, display: 'none' }),
		container: defaultStyles => {
			return {
				...defaultStyles,
				minWidth: '250px',
				borderRadius: '8px',
			};
		},
		control: defaultStyles => {
			return {
				...defaultStyles,
				border: '1px solid #f9fafb',
				boxShadow: 'none',
				backgroundColor: '#f9fafb',
			};
		},

		menu: defaultStyles => {
			return {
				...defaultStyles,
				width: '300px',
			};
		},
		option: (defaultStyles, state) => {
			return {
				...defaultStyles,
				backgroundColor: state.isSelected ? '#e8eef2' : defaultStyles.backgroundColor,
				color: state.isSelected ? '#38444c' : defaultStyles.color,
			};
		},
	};
	return (
		<div id='footer' className='row'>
			{fmCluster && fmCluster.length > 0 && isFmSpecificPage ? (
				<div className='filter-dropdown'>
					<label className='filter-label'>
						FM Instance: <span className='font-weight-normal'>{fMInstanceName}</span>
					</label>
					<div className='d-inline-block pl-4 filter-dropdown-text'>
						<Select
							options={fmCluster}
							menuPlacement={'top'}
							isMulti={false}
							closeMenuOnSelect={true}
							className='basic-single'
							hideSelectedOptions={false}
							labelText={'FM Instance:'}
							value={selectedNode}
							onChange={selected => {
								setSelectedNode(selected);
							}}
							styles={customStyles}
						/>
					</div>
				</div>
			) : (
				<div className='footer-fm-instance col-md-4'>
					<span className='footer-fm-key'>FM Instance:</span>
					<span className='footer-fm-value'>{fMInstanceName}</span>
				</div>
			)}

			<div className='footer-last-sync col-md-4'>
				{currentDevice &&
					Object.keys(currentDevice).length > 0 &&
					(window.location.hash.indexOf('/node/') > 0 ||
						(window.location.hash.indexOf('/flows/') > -1 &&
							(window.location.hash.indexOf('/activeVisibility/') > 0 ||
								window.location.hash.indexOf('/maps/') > 0 ||
								window.location.hash.indexOf('/fabricMaps/') > 0 ||
								window.location.hash.indexOf('/applicationVisibility/') > 0))) && (
						<>
							<span className='footer-last-sync-key'>Node Sync Time:</span>
							{currentDevice.syncInProgress && (
								<>
									<i className='fa fa-spinner fa-pulse'></i>
									<span>Sync in progress</span>
								</>
							)}
							{currentDevice.lastSyncStatus && !currentDevice.syncInProgress && (
								<>
									{!currentDevice.configRefreshStatistics.lastSuccessfulAttemptTime && (
										<span className='footer-last-sync-value'>
											<SvgIcon size={16} icon='Warning' className='navbar-warn-img' />
										</span>
									)}
									{currentDevice.lastSyncStatus === 'unknown' && (
										<span>Initial sync of this node has not yet completed.</span>
									)}
									{currentDevice.lastSyncStatus !== 'unknown' && (
										<span className='footer-last-sync-value'>{currentDevice.lastSyncStatus}</span>
									)}
								</>
							)}
						</>
					)}
			</div>

			<div className='footer-NRT col-md-4'>
				{nrtTimestamp && Object.keys(nrtTimestamp).length > 0 && (
					<>
						<span className='footer-NRT-key'>Last Updated At:</span>
						<span className='footer-NRT-value'>{nrtTimestamp}</span>
					</>
				)}
			</div>
		</div>
	);
};

export default Footer;
