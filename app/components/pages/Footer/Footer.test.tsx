import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import * as stories from './Footer.stories';
import '@testing-library/jest-dom';

const { Default } = composeStories(stories);

test('render Footer with default args', () => {
  render(<Default />);
});
