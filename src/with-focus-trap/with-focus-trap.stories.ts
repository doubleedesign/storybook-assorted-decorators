import { withFocusTrap } from './with-focus-trap';

const meta = {
	title: 'withFocusTrap',
	tags: ['autodocs'],
	decorators: [
		withFocusTrap,
	],
	render: () => {
		const container = document.createElement('div');
		container.style.padding = '1rem';
		container.style.backgroundColor = '#f0f0f0';

		const button1 = document.createElement('button');
		button1.textContent = 'Button 1';
		container.appendChild(button1);

		const button2 = document.createElement('button');
		button2.textContent = 'Button 2';
		container.appendChild(button2);

		return container;
	},
	parameters: {
		docs: {
			subtitle: 'Traps keyboard focus within a story (with an option to turn it off).',
			description: {
				component: 'A utility for developers to help test keyboard navigation while ignoring the Storybook UI around the component.',
			},
			source: {
				type: 'code',
				language: 'javascript',
				code: `
			import { withFocusTrap } from '@doubleedesign/storybook-assorted-decorators';

			const meta = {
				title: 'My Component',
				decorators: [
					withFocusTrap
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