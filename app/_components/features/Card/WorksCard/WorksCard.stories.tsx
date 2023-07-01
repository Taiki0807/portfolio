import type { Meta, StoryObj } from '@storybook/react';
import { WorksCard } from './WorksCard';

const meta = {
  title: 'WorksCard',
  component: WorksCard,
} satisfies Meta<typeof WorksCard>;

export default meta;
type T = typeof WorksCard;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    title: 'title',
    description: 'description',
    imageUrl:
      'https://placehold.jp/320x185.png?text=No Image',
    link: '',
    category: 'web',
  },
};
