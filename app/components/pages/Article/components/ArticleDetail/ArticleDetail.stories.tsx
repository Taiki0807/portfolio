import type { Meta, StoryObj } from '@storybook/react';
import { ArticleDetail } from './ArticleDetail';
import { handlers } from './handlers';

const meta = {
  title: 'ArticleDetail',
  component: ArticleDetail,
} satisfies Meta<typeof ArticleDetail>;

export default meta;
type T = typeof ArticleDetail;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    data: {
      id: 5,
      category: {
        id: 1,
        name: 'Next.js',
        color: '#000000',
      },
      main_text:
        '<h1>テスト</h1>\n' +
        '<p>テスト投稿</p>\n' +
        '<h1>test</h1>\n' +
        '<p>test</p>\n',
      toc_text:
        '<ul>\n' +
        '<li><a href="#_1">テスト</a></li>\n' +
        '<li><a href="#test">test</a></li>\n' +
        '<li><a href="#test_1">test</a></li>\n' +
        '<li><a href="#test2222">test2222</a></li>\n' +
        '</ul>',
      title: 'Test投稿',
      thumbnail: null,
      lead_text: 'テスト',
      created_at: '2023-03-08T15:29:39+09:00',
    },
  },
  parameters: {
    msw: {
      handlers,
    },
  },
};
