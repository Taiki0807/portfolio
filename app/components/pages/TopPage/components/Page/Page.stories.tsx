import type { Meta, StoryObj } from '@storybook/react';
import { Page } from './Page';
import { handlers } from './handlers';

const meta = {
  title: 'Page',
  component: Page,
} satisfies Meta<typeof Page>;

export default meta;
type T = typeof Page;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    data: [
      {
        id: 1,
        category: {
          id: 1,
          name: 'none',
          color: '#000000',
        },
        title: 'Test2',
        thumbnail:
          'http://34.82.101.16/media/1390_pc_thumb.jpg',
        lead_text: 'テスト投稿です',
      },
      {
        id: 2,
        category: {
          id: 1,
          name: 'none',
          color: '#000000',
        },
        title: 'Test2',
        thumbnail:
          'http://34.82.101.16/media/1390_pc_thumb.jpg',
        lead_text: 'テスト投稿です',
      },
    ],
  },
  parameters: {
    msw: {
      handlers,
    },
  },
};
