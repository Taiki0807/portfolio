import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import * as stories from './AboutCard.stories';
import '@testing-library/jest-dom';

const { Default } = composeStories(stories);

test('render AboutCard with default args', () => {
  render(<Default />);
});
