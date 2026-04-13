import type { Args, PartialStoryFn, Renderer, StoryContext } from 'storybook/internal/types';

export const withMaxWidth = (width: string) => {
	return (Story: PartialStoryFn<Renderer, Args>, context: StoryContext<Renderer, Args>) => {
		const wrapper = document.createElement('div');
		wrapper.style.maxWidth = width;

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
