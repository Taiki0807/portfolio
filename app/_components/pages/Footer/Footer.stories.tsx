import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const meta = {
  title: 'Footer',
  component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;
type T = typeof Footer;
type Story = StoryObj<T>;

export const Default: Story = {};
