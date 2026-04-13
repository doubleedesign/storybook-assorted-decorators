import React, { type ReactNode } from 'react';
import { ThemeProvider, themes, convert } from 'storybook/theming';
import { global } from '@storybook/design-system';
const { GlobalStyle } = global;

export function DesignSystemWrapper({ children }: { children: ReactNode }) {
	return (
		<div id="storybook-design-system-theme-provider">
			<GlobalStyle />
			<ThemeProvider theme={convert(themes.light)}>
				{children}
			</ThemeProvider>
		</div>
	);
}