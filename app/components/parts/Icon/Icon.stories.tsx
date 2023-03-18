import type { Meta, StoryObj } from '@storybook/react';
import { FaGithub } from 'react-icons/fa';
import { Icon } from './Icon';

const meta = {
  title: 'Icon',
  component: Icon,
} satisfies Meta<typeof Icon>;

export default meta;
type T = typeof Icon;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    color: 'black',
    children: <FaGithub />,
    name: 'github',
    url: 'https://github.com/Taiki0807',
  },
};
