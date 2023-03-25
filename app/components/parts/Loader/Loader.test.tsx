import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import * as stories from './Loader.stories';
import '@testing-library/jest-dom';

const { Default } = composeStories(stories);

test('render Loader with default args', () => {
  render(<Default />);
});
