import type { Args, PartialStoryFn, Renderer, StoryContext } from 'storybook/internal/types';
import { useArgs } from 'storybook/preview-api';

export const maxWidthControls = {
	__maxWidth: {
		name: 'Max Width',
		control: { type: 'number', step: 100 },
		description: 'Set a max width for the story (in px)',
		table: { category: 'Story Layout' },
	},
	__showMaxWidthBox: {
		name: 'Show Max Width Box',
		control: { type: 'boolean' },
		description: 'Toggle to show a border around the max width of the story',
		table: { category: 'Story Layout' },
	}
};

export const withMaxWidth = (defaultWidth: string, showBorder = false) => {
	// Set the provided value as the default for the control if it is a px value
	// @ts-expect-error TS2339: Property defaultValue does not exist on type { category: string; }
	maxWidthControls.__maxWidth.table.defaultValue = { summary: convertToNumeric(defaultWidth) ?? defaultWidth };

	return (Story: PartialStoryFn<Renderer, Args>, context: StoryContext<Renderer, Args>) => {
		const [args, updateArgs] = useArgs();

		// Set the initial control value
		if (args.__maxWidth === undefined) {
			updateArgs({ __maxWidth: convertToNumeric(defaultWidth) });
		}
		if (args.__showMaxWidthBox === undefined) {
			updateArgs({ __showMaxWidthBox: showBorder });
		}

		const storyElement = Story();
		const width = context.args.__maxWidth ?? defaultWidth;
		const maxWidth = typeof width === 'number' ? `${width}px` : width;

		// Plain HTML string
		if (typeof storyElement === 'string') {
			const wrapper = document.createElement('div');
			wrapper.style.maxWidth = maxWidth;
			wrapper.innerHTML = storyElement;

			return wrapper;
		}

		// React / other framework returning DOM node
		if (storyElement instanceof Element || storyElement instanceof DocumentFragment) {
			const wrapper = document.createElement('div');
			wrapper.style.maxWidth = maxWidth;
			wrapper.appendChild(storyElement as Node);

			return wrapper;
		}

		// Vue
		if (isVueComponent(storyElement())) {
			// eslint-disable-next-line max-len
			console.warn('withMaxWidth: Args will fall through to your component if it does not have `inheritAttrs: false`. This may result in unexpected behaviour.');

			return {
				inheritAttrs: false,
				components: { Story },
				setup() {
					// Return a proxy-like object or use getters to maintain reactivity
					// without needing to import 'computed' from Vue.
					return {
						// This getter will be called by Vue every time context.args changes
						get filtered() {
							const { __maxWidth, __showMaxWidthBox, ...props } = context.args;

							return {
								maxWidth: __maxWidth,
								showBorder: __showMaxWidthBox,
								props
							};
						}
					};
				},
				template: `
					<div :style="{ 
						maxWidth: filtered.maxWidth + 'px', 
						border: filtered.showBorder ? '1px dashed #999' : '0',
					}">					
						<story v-bind="filtered.props" />
				  	</div>
				`,
			};
		}

		throw new Error('withMaxWidth: Unsupported story element type.');
	};
};

function isVueComponent(val: unknown) {
	if (val === null || typeof val !== 'object') return false;

	// @ts-expect-error TS2339: Property __v_isVNode does not exist on type object
	return val?.__v_isVNode;
}

function convertToNumeric(defaultWidth: string) {
	if(typeof defaultWidth === 'string' && defaultWidth.endsWith('px')) {
		const numericValue = parseInt(defaultWidth, 10);
		if (!isNaN(numericValue)) {
			return numericValue;
		}

		return 0;
	}
}