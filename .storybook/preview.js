import Image from 'next/image';
import {
  initialize,
  mswDecorator,
} from 'msw-storybook-addon';

initialize();

export const decorators = [mswDecorator];
export const parameters = {
  nextjs: {
    appDirectory: true,
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
Image.defaultProps = {
  unoptimized: true,
};
