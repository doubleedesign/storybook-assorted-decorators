import React, { createElement, useRef, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { flushSync } from "react-dom";
import { DecoratorProps } from "../types";

type ReactBridgeParams =  {
	/** Your original Storybook story function, which returns a React element. */
	Story: DecoratorProps['Story'];
	/** A React function component to wrap around the story. **/
	Wrapper: ({ children }: { children: React.ReactNode }) => React.ReactElement;
};

/**
 * Utility that takes a Storybook story and a React wrapper component, renders the story inside the wrapper
 * and returns the resulting DOM element, allowing use of React components as decorators in non-React Storybook projects.
 */
export class ReactBridge {
	private readonly Story: ReactBridgeParams['Story'];
	private readonly Wrapper: ReactBridgeParams['Wrapper'];

	constructor({ Story, Wrapper }: ReactBridgeParams) {
		this.Story = Story;
		this.Wrapper = Wrapper;
	}
	render() {
		const container = document.createElement('div');
		const root = createRoot(container);

		flushSync(() => {
			root.render(createElement(this.Wrapper, { children: <div ref={ ref => ref?.appendChild(this.Story()) }></div> }));
		});

		return container;
	}
}
