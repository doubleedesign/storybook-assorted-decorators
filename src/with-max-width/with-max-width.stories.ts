import { withMaxWidth } from './with-max-width';

const meta = {
	title: 'withMaxWidth',
	tags: ['autodocs'],
	decorators: [
		withMaxWidth('400px'),
	],
	render: () => {
		const element = document.createElement('div');
		element.style.padding = '1rem';
		// eslint-disable-next-line max-len
		element.innerHTML = "<p>So it seems like this internet thing is here to stay. You can't just give up. Is that what a dinosaur would do?</p><p>I'm not great at the advice. Can I interest you in a sarcastic comment?</p>";
		element.style.backgroundColor = '#f0f0f0';

		return element;
	},
	parameters: {
		docs: {
			subtitle: 'A simple decorator to constrain the width of a story.',
			description: {
				component: 'Intended for testing components that are expected to be constrained in real use (without having an explicit max-width of their own), open popups to the side (and 100% width of the main component would cause them to be off-screen or have other unrealistic layout behaviours), and similar use cases.',
			},
			source: {
				type: 'code',
				language: 'javascript',
				code: `
			import { withMaxWidth } from '@doubleedesign/storybook-assorted-decorators';

			const meta = {
				title: 'My Component',
				decorators: [
					withMaxWidth('400px'),
				],
			};
			
			export default meta;
				`,
			},
		}
	}
};
export default meta;


export const Basic = {
	tags: ['!dev'], // exclude from sidebar
};