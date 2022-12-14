import { Meta, StoryObj } from '@storybook/react';

import { Heading } from './Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
  args: { children: 'Hello World!', size: 'md' },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<HeadingProps>;

export const Small: StoryObj<HeadingProps> = {
  args: {
    size: 'sm',
  },
};

export const Default: StoryObj<HeadingProps> = {};

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: 'lg',
  },
};

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: <h1>Heading with P</h1>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};
