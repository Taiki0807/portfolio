import type { Meta, StoryObj } from '@storybook/react';
import { ArticleCard } from './ArticleCard';

const meta = {
  title: 'ArticleCard',
  component: ArticleCard,
} satisfies Meta<typeof ArticleCard>;

export default meta;
type T = typeof ArticleCard;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    title: 'Test',
    url: '/',
    image: 'https://placehold.jp/320x185.png?text=サンプル',
  },
};
