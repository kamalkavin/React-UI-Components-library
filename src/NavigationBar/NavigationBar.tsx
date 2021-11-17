import React, { useState, useEffect } from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import { Navbar, DropdownButton, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTimes,
	faExclamationCircle,
	faExclamationTriangle,
	faInfoCircle,
	faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import GlobalSearch from 'components/GlobalSearch/GlobalSearch';
import {
	deleteLongTermNotifications,
	deleteAllLongTermNotifications,
	deleteLongTermNotificationsBasedOnType,
} from 'commons/redux/NotificationActions';
import { setRefreshEvent } from 'commons/redux/NavRefreshAction';
import ModalWindow from '../ModalWindow/ModalWindow';
import { userPrefApi } from 'commons';
import { RouteConfig } from 'config/RouteConfig';
import { HighAvailabilityApi } from 'containers/Settings/views/HighAvailability/services/HighAvailabilityApi';
import NavigationBarMenuList from 'components/NavigationBarMenuList/NavigationBarMenuList';
import { toastr } from 'react-redux-toastr';

export interface IProps {
	variant?: 'light' | 'dark';
	expand?: boolean | 'sm' | 'md' | 'lg' | 'xl';
	bg?: string;
	fixed?: 'top' | 'bottom';
	sticky?: 'top' | 'bottom';
	onToggle?: (expanded: boolean) => void;
	onSelect?: SelectCallback;
	collapseOnSelect?: boolean;
	expanded?: boolean;
	role?: string;
	isStandalone: boolean;
}
export type SelectCallback = (eventKey: string, e: React.SyntheticEvent<unknown>) => void;

export const KeyboardShortcutsModal = (props) => {
	const [showKeyboardShotcutsModal, setShowKeyboardShotcutsModal] = useState(true);
	return (
		<ModalWindow
			show={showKeyboardShotcutsModal}
			onHide={() => {
				setShowKeyboardShotcutsModal(false);
				props.onClose();
			}}
			size='lg'
			heading='Keyboard Shortcuts'>
			<div>
				<h3 className='kbd-header'>Global Shortcuts</h3>
			</div>
			<div className='kbd-shortcuts'>
				<ul>
					<li className='item-details'>
						<span className='item-description'>Go to Search</span>
						<span className='item-action'>
							<kbd className='regular-key'>G</kbd>
							<span className='key-separator'>then</span>
							<kbd className='key-separator'>/</kbd>
						</span>
					</li>
					<li className='item-details'>
						<span className='item-description'>Go to Dashboard</span>
						<span className='item-action'>
							<kbd className='regular-key'>G</kbd>
							<span className='key-separator'>then</span>
							<kbd className='key-separator'>D</kbd>
						</span>
					</li>
					<li className='item-details'>
						<span className='item-description'>Go to Traffic</span>
						<span className='item-action'>
							<kbd className='regular-key'>G</kbd>
							<span className='key-separator'>then</span>
							<kbd className='key-separator'>T</kbd>
						</span>
					</li>
					<li className='item-details'>
						<span className='item-description'>Go to Inventory</span>
						<span className='item-action'>
							<kbd className='regular-key'>G</kbd>
							<span className='key-separator'>then</span>
							<kbd className='key-separator'>I</kbd>
						</span>
					</li>
					<li className='item-details'>
						<span className='item-description'>Go to Recently Viewed</span>
						<span className='item-action'>
							<kbd className='regular-key'>G</kbd>
							<span className='key-separator'>then</span>
							<kbd className='key-separator'>R</kbd>
						</span>
					</li>
					<li className='item-details'>
						<span className='item-description'>Go to Settings</span>
						<span className='item-action'>
							<kbd className='regular-key'>G</kbd>
							<span className='key-separator'>then</span>
							<kbd className='key-separator'>S</kbd>
						</span>
					</li>
					<li className='item-details'>
						<span className='item-description'>Go to About</span>
						<span className='item-action'>
							<kbd className='regular-key'>G</kbd>
							<span className='key-separator'>then</span>
							<kbd className='key-separator'>A</kbd>
						</span>
					</li>
				</ul>
			</div>
		</ModalWindow>
	);
};

export const UpgradeHAErrorModal = (props) => {
	let hastatus = props.haStatus === 'atRisk' ? 'at risk' : props.haStatus;
	return (
		<ModalWindow
			show={props.showUpgradeHAErrorModal}
			onHide={() => {
				props.onClose();
			}}
			dialogClassName='upgrade-modal-width'
			heading='Upgrade HA Group'
			actionButtons='true'>
			<div>
				<label>
					This HA group is currently {hastatus} and cannot be upgraded. It must be in healthy state for the
					upgrade to start.
				</label>
			</div>
			<div className='modal-footer' data-cy='modal-footer'>
				<a
					href={RouteConfig.highavailability}
					onClick={() => {
						props.onClose();
					}}>
					Go to High Availability
				</a>
			</div>
		</ModalWindow>
	);
};

export const NavigationBar = (props: IProps) => {
	const dispatch = useDispatch();
	const angularData = useSelector((state: any) => state.angularData);
	const globalData = useSelector((state: any) => state.globalData);
	const notificationList = useSelector((state: any) => state.notification.notifications);
	const notificationIcon = (
		<>
			<OverlayTrigger
				key='bottom'
				placement='bottom'
				overlay={<Tooltip id='tooltip-bottom'>Notifications</Tooltip>}>
				<svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 24 24'>
					<path
						fill='#FFF'
						fillRule='evenodd'
						d='M19.658 15.737c-.687-.73-1.972-1.828-1.972-5.425 0-2.731-1.937-4.918-4.549-5.454v-.733C13.137 3.504 12.627 3 12 3c-.628 0-1.137.504-1.137 1.125v.733c-2.612.536-4.549 2.723-4.549 5.455 0 3.596-1.285 4.694-1.972 5.424-.214.227-.308.498-.306.763.003.577.461 1.125 1.14 1.125h13.647c.68 0 1.138-.548 1.141-1.125.002-.265-.092-.537-.306-.763zm-13.221.2c.754-.983 1.579-2.613 1.583-5.604l-.002-.02C8.018 8.137 9.8 6.374 12 6.374c2.2 0 3.982 1.763 3.982 3.938l-.002.02c.004 2.992.829 4.622 1.583 5.604H6.437zM12 21c1.256 0 2.274-1.007 2.274-2.25H9.726C9.726 19.993 10.744 21 12 21z'
					/>
				</svg>
			</OverlayTrigger>
			{notificationList && notificationList.length > 0 && (
				<span className='notification-badge'>{notificationList.length}</span>
			)}
		</>
	);

	let location = useLocation();

	const [nodeCapabilities, setNodeCapabilities] = useState<any>();
	const [isNodeSelected, setIsNodeSelected] = useState(false);
	const [showKeyboardShotcutsModal, setShowKeyboardShotcutsModal] = useState(false);
	const [showUpgradeHAErrorModal, setShowUpgradeHAErrorModal] = useState(false);
	const [haStatus, setHaStatus] = useState('');

	useEffect(() => {
		if (location.pathname) {
			// setTrafficMenuActive(false);
			// setInventoryMenuActive(false);
			if (
				((location.pathname.indexOf('/fm') > -1 || location.pathname.indexOf('/node') > -1) &&
					location.pathname.indexOf('/flows') > -1) ||
				(location.pathname.indexOf('/visualize') > -1 && location.pathname.indexOf('fha/app/visualize') < 0)
			) {
				// setTrafficMenuActive(true);
			} else if (
				(location.pathname.indexOf('/fm') > -1 || location.pathname.indexOf('/node') > -1) &&
				!(location.pathname.indexOf('/fmabout') > -1) &&
				!(location.pathname.indexOf('/changePassword') > -1) &&
				!(location.pathname.indexOf('/fmImageUpgrade') > -1) &&
				!(location.pathname.indexOf('/fmImagesUpgrade') > -1) &&
				!(location.pathname.indexOf('/fmSearch') > -1) &&
				!((location.pathname.indexOf('/dashboard') > -1 || location.pathname.indexOf('/settingsfm')) > -1)
			) {
				// setInventoryMenuActive(true);
			}

			if (
				(location.pathname.search(/\bnode\b/) >= 0 && location.pathname.indexOf('/node') > -1) ||
				location.pathname.includes('settings/globalsettings/rootcertificates') ||
				location.pathname.includes('settings/auth/ldapUsrGrpMap')
			) {
				setIsNodeSelected(true);
			} else {
				setIsNodeSelected(false);
			}
		}
	}, [location.pathname]);

	function triggerPageRefreshEvent() {
		if (location.pathname.indexOf('/mobility') > -1) {
			dispatch(setRefreshEvent('CUPS'));
		} else if (location.pathname.indexOf('/topology') > -1) {
			dispatch(setRefreshEvent('TOPOLOGY'));
		} else if (location.pathname.indexOf('/fha') > -1) {
			dispatch(setRefreshEvent('FHA'));
		} else if (location.pathname.indexOf('/recentlyvisitedpage') > -1) {
			dispatch(setRefreshEvent('RECENTLYVISITEDPAGE'));
		} else if (window.location.hash.indexOf('/alarms/suppressionRules') > -1) {
			dispatch(setRefreshEvent('SUPPRESSIONRULES'));
		} else if (window.location.hash.indexOf('/alarms/exclude') > -1) {
			dispatch(setRefreshEvent('MANAGEALARMS'));
		} else if (location.pathname.indexOf('/alarms') > -1) {
			dispatch(setRefreshEvent('ALARMS'));
		} else if (window.location.hash.indexOf('/contact') > -1) {
			dispatch(setRefreshEvent('CONTACT'));
		} else if (window.location.hash.indexOf('/acmeserver') > -1) {
			dispatch(setRefreshEvent('ACMESERVER'));
		} else if (window.location.hash.indexOf('/acmefm') > -1) {
			dispatch(setRefreshEvent('ACMEFM'));
		} else if (window.location.hash.indexOf('/acmenodes') > -1) {
			dispatch(setRefreshEvent('ACMENODES'));
		} else if (window.location.hash.indexOf('/acmecertificate') > -1) {
			dispatch(setRefreshEvent('ACMEGLOBAL'));
		} else if (window.location.hash.indexOf('/security/sslkeys') > -1) {
			dispatch(setRefreshEvent('SSLKEYS'));
		} else if (window.location.hash.indexOf('/security/sslservice') > -1) {
			dispatch(setRefreshEvent('SSLSERVICES'));
		} else if (window.location.hash.indexOf('/security/sslkeymaps') > -1) {
			dispatch(setRefreshEvent('SSLKMAPS'));
		} else if (window.location.hash.includes(RouteConfig.highavailability)) {
			dispatch(setRefreshEvent('HIGHAVAILABILITY'));
		} else if (window.location.hash.indexOf('/snmpserver') > -1) {
			dispatch(setRefreshEvent('SNMPSERVER'));
		} else if (window.location.hash.indexOf('/rootcertificates') > -1) {
			dispatch(setRefreshEvent('CALIST'));
		} else if (window.location.hash.indexOf('/nodecalist') > -1) {
			dispatch(setRefreshEvent('NODECALIST'));
		} else if (location.pathname.indexOf('/ldapGlobalConfig') > -1) {
			dispatch(setRefreshEvent('LDAPGLOBALCONFIG'));
		} else if (location.pathname.indexOf('/ldapGlobalUsrGrpMapping') > -1) {
			dispatch(setRefreshEvent('LDAPGLOBALUSRGRPMAP'));
		} else if (location.pathname.indexOf('/ldapUsrGrpMap') > -1) {
			dispatch(setRefreshEvent('LDAPNODEUSRGRPMAP'));
		} else if (location.pathname.includes('/authGlobalDefaults')) {
			dispatch(setRefreshEvent('NODEAUTHGLOBALDEFAULTS'));
		} else if (window.location.hash.indexOf('packetDrop') > -1) {
			dispatch(setRefreshEvent('PACKETDROP'));
		} else if (window.location.hash.indexOf('/packetDrop/exclusionList') > -1) {
			dispatch(setRefreshEvent('PACKETDROPEXCLUSION'));
		} else if (window.location.hash.indexOf('/debug/pcap') > -1) {
			dispatch(setRefreshEvent('PCAP'));
		} else {
			let reactToNg = new CustomEvent('reactToNg', { detail: { eventType: 'refresh', data: {} } });
			window.document.dispatchEvent(reactToNg);
		}
	}

	function checkHAStatus() {
		if (globalData.haEnabled) {
			const params = { loadSystemDetails: false };
			HighAvailabilityApi.loadhighAvailability(params)
				.then((response: any) => {
					if (
						response &&
						response.data &&
						response.data.gigaFmHaGroup &&
						response.data.gigaFmHaGroup.haStatus !== 'healthy'
					) {
						setHaStatus(response.data.gigaFmHaGroup.haStatus);
						setShowUpgradeHAErrorModal(true);
					} else {
						window.location.hash = '/fm/fmImageUpgrade';
					}
				})
				.catch((error) => {
					toastr.error('', error.response);
				});
		} else {
			window.location.hash = '/fm/fmImageUpgrade';
		}

		//To hide the dropdown menu after landed in upgrade page.
		let dropDownMenu = document.querySelectorAll('.navigation-bar .dropdown-menu');
		dropDownMenu &&
			dropDownMenu.forEach(function (value, key) {
				value && value.classList.remove('show');
			});
	}

	const [isFMReady, setIsFMReady] = useState(false);
	const [isUpgradePermitted, setIsUpgradePermitted] = useState(true); //To handle RBAC related scenarios
	const [isUpgradeSupportedPlatform, setIsUpgradeSupportedPlatform] = useState(true); //To handle platform realted scenarios
	const [isLocalUser, setIsLocalUser] = useState(false);
	const [activeUser, setActiveUser] = useState();
	const [disableTopNav, setDisableTopNav] = useState(false);

	useEffect(() => {
		setIsFMReady(angularData.isFMReadyToServeRequests);
	}, [angularData.isFMReadyToServeRequests]);

	useEffect(() => {
		setIsUpgradePermitted(angularData.upgradePermitted);
	}, [angularData.upgradePermitted]);

	useEffect(() => {
		setIsUpgradeSupportedPlatform(angularData.fmPlatform !== 'AWS' && angularData.fmPlatform !== 'Azure');
	}, [angularData.fmPlatform]);

	useEffect(() => {
		if (angularData.fmActiveUserDetails) {
			setActiveUser(angularData.fmActiveUserDetails.username);
		}
		if (angularData.fmActiveUserDetails && angularData.fmActiveUserDetails.authMethod) {
			setIsLocalUser(angularData.fmActiveUserDetails.authMethod === 'local');
		}
	}, [angularData.fmActiveUserDetails]);

	useEffect(() => {
		if (globalData.currentDevice) {
			// setCurrentDevice(angularData.currentDevice);

			// let tooltip =
			// 	angularData.currentDevice.clusterModeAlias === 'Standalone'
			// 		? angularData.currentDevice.hostname
			// 		: angularData.currentDevice.clusterId + ' ' + angularData.currentDevice.hostname;

			// let dnsName;
			// if (
			// 	angularData.currentDevice.dnsName &&
			// 	angularData.currentDevice.dnsName !== null &&
			// 	!Number.isNaN(angularData.currentDevice.dnsName)
			// ) {
			// 	dnsName = angularData.currentDevice.dnsName;
			// }
			// setDnsName(dnsName);

			// if (dnsName) {
			// 	tooltip += ' -- ' + angularData.currentDevice.dnsName;
			// }

			// if (angularData.currentDevice.family && angularData.currentDevice.clusterModeAlias === 'Standalone') {
			// 	if (
			// 		angularData.currentDevice.model &&
			// 		nodeCapabilities &&
			// 		nodeCapabilities.ta &&
			// 		nodeCapabilities.ta.ports
			// 	) {
			// 		tooltip +=
			// 			' (' +
			// 			(angularData.currentDevice.model.indexOf('TA') > -1
			// 				? 'TA'
			// 				: nodeCapabilities.ta.ports && angularData.currentDevice.model.indexOf('DELL') > -1
			// 				? 'DELL'
			// 				: angularData.currentDevice.family) +
			// 			'Series)';
			// 	} else {
			// 		tooltip += ' (' + angularData.currentDevice.family + 'Series)';
			// 	}
			// }

			// setNodeToolTip(tooltip);

			if (angularData.subscriptionlicenses && globalData.currentDevice) {
				// let nodeLicense = angularData.subscriptionlicenses[angularData.currentDevice.clusterId];
				// setNodeLicense(nodeLicense);
			}
		}
	}, [globalData.currentDevice, nodeCapabilities, angularData.subscriptionlicenses]);

	useEffect(() => {
		if (globalData.nodeCapabilities) {
			setNodeCapabilities(globalData.nodeCapabilities);
		}
	}, [globalData.nodeCapabilities]);

	useEffect(() => {
		setDisableTopNav(angularData.disableTopNav);
	}, [angularData.disableTopNav]);

	//Eula screen implementation
	const checkWelcomeScreen = (res) => {
		let data = { username: res };
		userPrefApi.getUIPreferences(data).then((response) => {
			if (
				response &&
				response.data &&
				response.data.properties &&
				(response.data.properties.welcomeScreen === undefined || !response.data.properties.changePassword)
			) {
				let eulaScreen = new CustomEvent('eulaScreen', {
					detail: { eventType: 'eulaScreen', data: response.data },
				});
				window.document.dispatchEvent(eulaScreen);
			}
		});
	};

	useEffect(() => {
		if (activeUser && window.location.hash !== '#/logout') {
			checkWelcomeScreen(activeUser);
		}
	}, [window.location.hash, activeUser]);

	const userIcon = (
		<OverlayTrigger key='bottom' placement='bottom' overlay={<Tooltip id='tooltip-bottom'>{activeUser}</Tooltip>}>
			<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 27 27'>
				<path
					fill='#FFF'
					fillRule='evenodd'
					d='M12 5.871c-2.137 0-3.871 1.734-3.871 3.87 0 2.138 1.734 3.872 3.871 3.872s3.871-1.734 3.871-3.871S14.137 5.87 12 5.87zm0 5.806c-1.069 0-1.935-.867-1.935-1.935 0-1.069.866-1.936 1.935-1.936s1.935.867 1.935 1.936c0 1.068-.866 1.935-1.935 1.935zM12 2C6.476 2 2 6.476 2 12s4.476 10 10 10 10-4.476 10-10S17.524 2 12 2zm0 18.065c-2.004 0-3.835-.738-5.246-1.952.6-.928 1.63-1.557 2.806-1.593.84.258 1.638.387 2.44.387s1.6-.125 2.44-.387c1.177.04 2.205.665 2.806 1.593-1.411 1.214-3.242 1.952-5.246 1.952zm6.56-3.392c-.983-1.266-2.504-2.092-4.237-2.092-.412 0-1.049.387-2.323.387-1.27 0-1.911-.387-2.323-.387-1.73 0-3.25.826-4.237 2.092-.944-1.318-1.505-2.931-1.505-4.673 0-4.448 3.617-8.065 8.065-8.065 4.448 0 8.065 3.617 8.065 8.065 0 1.742-.561 3.355-1.505 4.673z'
				/>
			</svg>
		</OverlayTrigger>
	);
	// const helpIcon = (
	// 	<OverlayTrigger key='bottom' placement='bottom' overlay={<Tooltip id='tooltip-bottom'>Help</Tooltip>}>
	// 		<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 27 27'>
	// 			<path
	// 				fill='#FFF'
	// 				fillRule='evenodd'
	// 				d='M12 2C6.478 2 2 6.48 2 12c0 5.524 4.478 10 10 10s10-4.476 10-10c0-5.52-4.478-10-10-10zm0 18.065c-4.457 0-8.065-3.607-8.065-8.065 0-4.455 3.608-8.065 8.065-8.065 4.455 0 8.065 3.608 8.065 8.065 0 4.457-3.607 8.065-8.065 8.065zm4.324-10.29c0 2.703-2.92 2.745-2.92 3.744v.255c0 .267-.216.484-.484.484h-1.84c-.268 0-.484-.217-.484-.484v-.349c0-1.441 1.093-2.017 1.918-2.48.708-.397 1.142-.667 1.142-1.193 0-.696-.887-1.157-1.604-1.157-.935 0-1.366.442-1.973 1.208-.164.207-.462.245-.672.086l-1.122-.85c-.206-.157-.252-.447-.107-.66.953-1.4 2.166-2.185 4.056-2.185 1.978 0 4.09 1.544 4.09 3.58zm-2.63 6.741c0 .934-.76 1.694-1.694 1.694-.934 0-1.694-.76-1.694-1.694 0-.934.76-1.693 1.694-1.693.934 0 1.694.76 1.694 1.693z'
	// 			/>
	// 		</svg>
	// 	</OverlayTrigger>
	// );

	return (
		<Navbar expand='lg' className='navigation-bar col-md-12'>
			<div className='row'>
				<NavigationBarMenuList />
				{!disableTopNav && (
					<div
						className={
							isNodeSelected
								? 'top-icons-node col-lg-5 col-md-8 col-sm-8 line-height-56'
								: 'top-icons col-lg-5 col-md-8 col-sm-8 line-height-56'
						}>
						<div className='row'>
							<div className={!isFMReady ? 'd-none' : 'nav-top-icons global-search-icon'}>
								{!props.isStandalone && <GlobalSearch />}
							</div>
							{!isFMReady && <div className='col-md-7'></div>}
							<div
								data-cy='Refresh'
								className='nav-top-icons refresh-icon'
								onClick={() => triggerPageRefreshEvent()}>
								<OverlayTrigger
									key='bottom'
									placement='bottom'
									overlay={<Tooltip id='tooltip-bottom'>Refresh</Tooltip>}>
									<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 25 25'>
										<path
											fill='#FFF'
											fillRule='evenodd'
											d='M21.174 2.826l-2.103 2.103C17.26 3.12 14.76 2 12 2c-5.354 0-9.725 4.207-9.988 9.496-.013.275.209.504.484.504h1.13c.257 0 .47-.2.484-.455.235-4.156 3.674-7.448 7.89-7.448 2.184 0 4.16.884 5.59 2.314l-2.183 2.182c-.305.305-.09.826.342.826h5.767c.267 0 .484-.216.484-.484V3.168c0-.43-.521-.647-.826-.342zm.33 9.174h-1.13c-.257 0-.47.2-.484.455-.235 4.156-3.674 7.448-7.89 7.448-2.184 0-4.16-.884-5.59-2.314l2.183-2.182c.305-.305.09-.826-.342-.826H2.484c-.267 0-.484.216-.484.484v5.767c0 .43.521.647.826.342l2.103-2.103C6.74 20.88 9.24 22 12 22c5.354 0 9.725-4.207 9.988-9.496.013-.275-.209-.504-.484-.504z'
										/>
									</svg>
								</OverlayTrigger>
							</div>

							<div data-cy='Notifications' className='nav-top-icons notification-icon'>
								<DropdownButton
									title={notificationIcon}
									id='basic-nav-dropdown'
									className='notification-dropdown'>
									<ul>
										<li className='notification-dropdown-title'>Notifications</li>
										{notificationList && notificationList.length > 0 ? (
											<li className='notification-dropdown-filters'>
												<div>
													Dismiss:
													<a
														data-cy='all'
														onClick={() => dispatch(deleteAllLongTermNotifications())}>
														All
													</a>
													<a
														data-cy='Completed'
														onClick={() =>
															dispatch(deleteLongTermNotificationsBasedOnType('success'))
														}>
														Completed
													</a>
													<a
														data-cy='Informational'
														onClick={() =>
															dispatch(deleteLongTermNotificationsBasedOnType('info'))
														}>
														Informational
													</a>
													<a
														data-cy='Errors'
														onClick={() =>
															dispatch(deleteLongTermNotificationsBasedOnType('danger'))
														}>
														Errors
													</a>
												</div>
											</li>
										) : (
											<li
												data-cy='No Notifications'
												className='notification-dropdown-empty-alert'>
												There are no new notifications
											</li>
										)}
										{notificationList &&
											notificationList.map((eachNotificationItem, i) => (
												<li
													key={i}
													className='notificationMessage'
													data-cy='Notification Message'>
													<FontAwesomeIcon
														onClick={() =>
															dispatch(
																deleteLongTermNotifications(eachNotificationItem.Id)
															)
														}
														icon={faTimes}
														size='sm'
													/>
													{eachNotificationItem.type === 'danger' && (
														<FontAwesomeIcon icon={faExclamationCircle} size='sm' />
													)}
													{eachNotificationItem.type === 'success' && (
														<FontAwesomeIcon icon={faCheckCircle} size='sm' />
													)}
													{eachNotificationItem.type === 'warning' && (
														<FontAwesomeIcon icon={faExclamationTriangle} size='sm' />
													)}
													{eachNotificationItem.type === 'info' && (
														<FontAwesomeIcon icon={faInfoCircle} size='sm' />
													)}
													<span
														dangerouslySetInnerHTML={{
															__html: eachNotificationItem.message,
														}}></span>
												</li>
											))}
									</ul>
								</DropdownButton>
							</div>
							<div data-cy='User' className='nav-top-icons user-icon'>
								<DropdownButton
									title={userIcon}
									drop='down'
									id='basic-nav-dropdown'
									className='user-action-dropdown'>
									{isLocalUser && isFMReady && (
										<Dropdown.Item>
											<NavLink data-cy='Change Password' to='/fm/changePassword'>
												<div>Change Password</div>
											</NavLink>
										</Dropdown.Item>
									)}
									{isUpgradePermitted && isUpgradeSupportedPlatform && isFMReady && (
										<div
											data-cy='Upgrade'
											className='dropdown-item'
											onClick={() => checkHAStatus()}>
											<div>Upgrade</div>
										</div>
									)}
									{isFMReady && <Dropdown.Divider />}
									<h3 className='ml-10 font-weight-bold help-header'>SUPPORT</h3>
									<Dropdown.Item data-cy='API' href='/apiref/apiref.html' target='_blank'>
										<div>API</div>
									</Dropdown.Item>
									<Dropdown.Item
										data-cy='App Protobook'
										href='/help/GV-AppIntel-Protocols/index.html'
										target='_blank'>
										<div>App Protobook</div>
									</Dropdown.Item>
									<div
										data-cy='Keyboard Shortcuts'
										className='dropdown-item'
										onClick={() => setShowKeyboardShotcutsModal(true)}>
										<div>Keyboard Shortcuts</div>
									</div>
									<div
										data-cy='Help'
										className='dropdown-item'
										onClick={() => window.open('/help/GigaVUE-FM/index.html', '_blank')}>
										<div>Help</div>
									</div>
									<Dropdown.Item>
										<NavLink data-cy='About' to='/fm/fmabout'>
											<div>About</div>
										</NavLink>
									</Dropdown.Item>
									<Dropdown.Item>
										<NavLink data-cy='Contact' to='/contact'>
											<div>Contact Support</div>
										</NavLink>
									</Dropdown.Item>
									{isFMReady && <Dropdown.Divider />}
									<Dropdown.Item>
										<NavLink data-cy='Logout' to='/logout'>
											<div>Logout</div>
										</NavLink>
									</Dropdown.Item>
								</DropdownButton>
							</div>
						</div>
					</div>
				)}
				{showKeyboardShotcutsModal && (
					<KeyboardShortcutsModal onClose={() => setShowKeyboardShotcutsModal(!showKeyboardShotcutsModal)} />
				)}
			</div>
			{showKeyboardShotcutsModal && (
				<KeyboardShortcutsModal onClose={() => setShowKeyboardShotcutsModal(!showKeyboardShotcutsModal)} />
			)}
			{showUpgradeHAErrorModal && (
				<UpgradeHAErrorModal
					showUpgradeHAErrorModal={showUpgradeHAErrorModal}
					haStatus={haStatus}
					onClose={() => setShowUpgradeHAErrorModal(!showUpgradeHAErrorModal)}
				/>
			)}
		</Navbar>
	);
};

export default NavigationBar;
