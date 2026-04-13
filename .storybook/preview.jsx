import { Title, Subtitle, Description, Primary, Controls, Stories, Source } from '@storybook/addon-docs/blocks';
import './preview.css';

/** @type { import('@storybook/html-vite').Preview } */
const preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		docs: {
			page: () => (
				<>
					<Title />
					<Subtitle />
					<Description />
					<Primary />
					<Source />
					<Controls />
					<Stories includePrimary={false}/>
				</>
			),
			canvas: {
				// Remove the "show code" button
				// https://storybook.js.org/docs/api/doc-blocks/doc-block-canvas#sourcestate
				sourceState: 'none'
			}
		},
	},
};

export default preview;