import type { Meta, StoryObj } from '@storybook/react';
import { Page } from './Page';

const meta = {
  title: 'Page',
  component: Page,
} satisfies Meta<typeof Page>;

export default meta;
type T = typeof Page;
type Story = StoryObj<T>;

export const Default: Story = {};
