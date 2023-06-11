import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import * as stories from './Title.stories';
import '@testing-library/jest-dom';

const { Default } = composeStories(stories);

test('render Title with default args', () => {
  render(<Default />);
});
