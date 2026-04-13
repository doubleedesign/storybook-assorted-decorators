import React, { useRef, useEffect, useCallback, useState } from 'react';
import * as focusTrap from 'focus-trap';
import { DesignSystemWrapper } from "../utils/design-system-wrapper";
import { Button, OutlineCTA } from '@storybook/design-system';
import { Badge } from 'storybook/internal/components';
import { ReactBridge } from "../utils/react-bridge";
import { DecoratorProps } from "../types";

export const withFocusTrap = (Story: DecoratorProps['Story'], context: DecoratorProps['context']) => {
	return new ReactBridge({ Story, Wrapper }).render();
};

function Wrapper({ children }: { children: React.ReactNode }) {
	const wrapperRef = useRef<HTMLDivElement>(null);
	const trap = useRef<focusTrap.FocusTrap | null>(null);
	// using trap?.current?.active as the prop doesn't re-render the info message
	const [active, setActive] = useState(true);

	useEffect(() => {
		if(!wrapperRef.current) {
			return;
		}

		trap.current = focusTrap.createFocusTrap(wrapperRef.current, { fallbackFocus: wrapperRef.current });
		trap.current.activate();

		return () => {
			trap?.current?.deactivate();
		};
	}, [wrapperRef]);

	const disable = useCallback(() => {
		trap?.current?.deactivate({
			onDeactivate: () => setActive(false)
		});
	}, [trap]);

	const enable = useCallback(() => {
		trap?.current?.activate({
			onActivate: () => setActive(true)
		});
	}, [trap]);

	return (
		<DesignSystemWrapper>
			<div className="focus-trapped-story" ref={wrapperRef}>
				<InfoMessage active={active} disableFunc={disable} enableFunc={enable} />
				{children}
			</div>
		</DesignSystemWrapper>
	);
}


function InfoMessage({ active, disableFunc, enableFunc }: { active: boolean, disableFunc: () => void, enableFunc: () => void }) {
	return active ? (
		<OutlineCTA badge={<Badge status="warning">Note</Badge>}
			// @ts-expect-error TS2739: Type is missing properties from type
			action={<Button appearance="primary" size="small" onClick={disableFunc}>Disable</Button>}
		>
			Focus is being kept within the story by the useFocusTrap decorator.
		</OutlineCTA>
	) : (
		<OutlineCTA
			badge={<Badge status="neutral">Note</Badge>}
			// @ts-expect-error TS2739: Type is missing properties from type
			action={<Button appearance="primaryOutline" size="small" onClick={enableFunc}>Enable</Button>}
		>
			The story focus trap has been disabled.
		</OutlineCTA>
	);
}
