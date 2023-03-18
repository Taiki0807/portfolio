import type { Meta, StoryObj } from '@storybook/react';
import { Title } from './Title';

const meta = {
  title: 'Title',
  component: Title,
} satisfies Meta<typeof Title>;

export default meta;
type T = typeof Title;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    title: 'Test',
  },
};
