import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import * as stories from './ArticleCard.stories';
import '@testing-library/jest-dom';

const { Default } = composeStories(stories);

test('render ArticleCard with default args', () => {
  render(<Default />);
});
