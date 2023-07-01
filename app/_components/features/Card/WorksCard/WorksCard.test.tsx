import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import * as stories from './WorksCard.stories';
import '@testing-library/jest-dom';

const { Default } = composeStories(stories);

test('render WorksCard with default args', () => {
  render(<Default />);
});
