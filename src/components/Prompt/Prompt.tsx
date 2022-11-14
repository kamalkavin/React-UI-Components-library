/**
 *
 * GPrompt component
 *
 */

import { useBlocker } from '../../commons';
import React, { FC, memo, forwardRef, useCallback, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Dialog, Button, Div } from '..';
// import GPromptStyles from './styles/GPrompt.style';

export interface GPromptProps {
	isBlocking: boolean;
	heading?: string;
	message?: string;
	name: string;
}

const GPrompt: FC<GPromptProps> = memo(
	forwardRef(
		(
			{
				name,
				isBlocking,
				heading = 'Unsaved Changes',
				message = 'It looks like you have been editing something. If you leave before saving, your changes will be lost.',
			}: GPromptProps,
			ref
		) => {
			const useCallbackPrompt = (when) => {
				const navigate = useNavigate();
				const location = useLocation();
				const [showPrompt, setShowPrompt] = useState<any>(false);
				const [lastLocation, setLastLocation] = useState<any>(null);
				const [confirmedNavigation, setConfirmedNavigation] = useState(false);

				const cancelNavigation = useCallback(() => {
					setShowPrompt(false);
				}, []);

				const handleBlockedNavigation = useCallback(
					(nextLocation) => {
						if (!confirmedNavigation && nextLocation.location.pathname !== location.pathname) {
							setShowPrompt(true);
							setLastLocation(nextLocation);
							return false;
						}
						return true;
					},
					[confirmedNavigation]
				);

				const confirmNavigation = useCallback(() => {
					setShowPrompt(false);
					setConfirmedNavigation(true);
				}, []);

				useEffect(() => {
					if (confirmedNavigation && lastLocation) {
						navigate(lastLocation.location.pathname);
					}
				}, [confirmedNavigation, lastLocation]);

				useBlocker(handleBlockedNavigation, when);

				return [showPrompt, confirmNavigation, cancelNavigation];
			};

			const [showPrompt, confirmNavigation, cancelNavigation] = useCallbackPrompt(isBlocking);
			return (
				showPrompt && (
					<Dialog
						showDialog={showPrompt}
						closeCallback={cancelNavigation}
						name={name}
						heading={heading}
						description={message}
						footer={
							<Div display='flex' justifyContent='sapce-between' flexGrow={1}>
								<Button name='submit' variant='primary' onClick={cancelNavigation}>
									Cancel
								</Button>
								<Button name='submit' variant='secondary' onClick={confirmNavigation}>
									Navigate
								</Button>
							</Div>
						}></Dialog>
				)
			);
		}
	)
);

export default GPrompt;
