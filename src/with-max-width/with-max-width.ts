import type { Args, PartialStoryFn, Renderer, StoryContext } from 'storybook/internal/types';
import { useArgs } from 'storybook/preview-api';

export const maxWidthControl = {
	__maxWidth: {
		name: 'Max Width',
		control: { type: 'number' },
		description: 'Set a max width for the story (in px)',
		table: { category: 'Story Layout' },
	},
};

export const withMaxWidth = (defaultWidth: string) => {
	// Set the provided value as the default for the control if it is a px value
	// @ts-expect-error TS2339: Property defaultValue does not exist on type { category: string; }
	maxWidthControl.__maxWidth.table.defaultValue = { summary: convertToNumeric(defaultWidth) ?? defaultWidth };

	return (Story: PartialStoryFn<Renderer, Args>, context: StoryContext<Renderer, Args>) => {
		const [args, updateArgs] = useArgs();

		// Set the initial control value
		if(args.__maxWidth === undefined) {
			updateArgs({ __maxWidth: convertToNumeric(defaultWidth) });
		}

		// Read from args if set, otherwise fall back to the default
		const width = context.args.__maxWidth ?? defaultWidth;

		const wrapper = document.createElement('div');
		wrapper.style.maxWidth = typeof width === 'number' ? `${width}px` : width;

		const storyElement = Story();
		if (typeof storyElement === 'string') {
			wrapper.innerHTML = storyElement;
		}
		else {
			wrapper.appendChild(storyElement);
		}

		return wrapper;
	};
};

function convertToNumeric(defaultWidth: string) {
	if(typeof defaultWidth === 'string' && defaultWidth.endsWith('px')) {
		const numericValue = parseInt(defaultWidth, 10);
		if (!isNaN(numericValue)) {
			return numericValue;
		}

		return 0;
	}
}