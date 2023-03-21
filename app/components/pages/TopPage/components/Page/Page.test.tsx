import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import * as stories from './Page.stories';
import '@testing-library/jest-dom';

const { Default } = composeStories(stories);

test('render Page with default args', () => {
  render(<Default />);
});
