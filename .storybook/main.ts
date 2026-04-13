import type { StorybookConfig } from '@storybook/html-vite';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
	stories: [
		"../src/**/*.mdx",
		"../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
	],
	addons: [
		"@storybook/addon-docs"
	],
	framework: "@storybook/html-vite",
	staticDirs: ['../sb-assets'],
	refs: {
		// Don't show stories from the Storybook Design System in the sidebar
		'@storybook/design-system': { disable: true }
	},
	viteFinal: async (config, { configType }) => {
		return {
			...config,
			esbuild: {
				jsx: 'automatic'
			},
		};
	}
};

export default config;