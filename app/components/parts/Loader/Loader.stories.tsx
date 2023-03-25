import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from './Loader';

const meta = {
  title: 'Loader',
  component: Loader,
} satisfies Meta<typeof Loader>;

export default meta;
type T = typeof Loader;
type Story = StoryObj<T>;

export const Default: Story = {};
