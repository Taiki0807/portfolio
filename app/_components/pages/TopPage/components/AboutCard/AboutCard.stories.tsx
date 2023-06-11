import type { Meta, StoryObj } from '@storybook/react';
import { AboutCard } from './AboutCard';

const meta = {
  title: 'AboutCard',
  component: AboutCard,
} satisfies Meta<typeof AboutCard>;

export default meta;
type T = typeof AboutCard;
type Story = StoryObj<T>;

export const Default: Story = {};
