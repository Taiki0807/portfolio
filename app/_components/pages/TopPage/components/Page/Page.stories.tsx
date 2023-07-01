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
        tag: [
          {
            id: 1,
            name: 'Next.js',
          },
          {
            id: 2,
            name: '機械学習',
          },
        ],
        title: 'Test2',
        thumbnail:
          'http://localhost:8000/media/cb43da50-f107-4173-8050-78c7b8b4e9a7.jpg',
        lead_text: 'Test投稿',
      },
      {
        id: 2,
        category: {
          id: 1,
          name: 'none',
          color: '#000000',
        },
        tag: [
          {
            id: 1,
            name: 'Next.js',
          },
          {
            id: 2,
            name: '機械学習',
          },
        ],
        title: 'Test2',
        thumbnail:
          'http://localhost:8000/media/cb43da50-f107-4173-8050-78c7b8b4e9a7.jpg',
        lead_text: 'Test投稿',
      },
    ],
    works: [
      {
        id: 1,
        category: {
          id: 1,
          name: 'Web Development',
          color: '#FF0000',
        },
        tag: [
          {
            id: 1,
            name: 'React',
          },
          {
            id: 2,
            name: 'TypeScript',
          },
        ],
        title: 'My Portfolio',
        thumbnail:
          'https://placehold.jp/320x185.png?text=No Image',
        description: 'This is my personal portfolio.',
        githubLink:
          'https://github.com/myusername/portfolio',
        siteLink: 'https://myusername.github.io/portfolio',
      },
    ],
  },
  parameters: {
    msw: {
      handlers,
    },
  },
};
