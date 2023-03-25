import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import * as stories from './ArticleDetail.stories';
import '@testing-library/jest-dom';

const { Default } = composeStories(stories);

test('render ArticleDetail with default args', () => {
  render(<Default />);
});
