import type { Args, PartialStoryFn, Renderer, StoryContext } from "storybook/internal/types";

export type DecoratorProps = {
	Story: PartialStoryFn<Renderer, Args>;
	context?: StoryContext<Renderer, Args>;
};
