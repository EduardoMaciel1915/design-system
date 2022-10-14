import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { rest } from 'msw';

import { PanelLogin } from './PanelLogin';

export default {
  title: 'Pages/Login',
  component: PanelLogin,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post('auth', (req, res, ctx) => {
          return res(
            ctx.json({
              message: 'Login realizado!',
            })
          );
        }),
      ],
    },
  },
} as Meta;

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(
      canvas.getByPlaceholderText('Digite seu e-mail'),
      'eduardo.maciel@mblabs.com.br'
    );
    userEvent.type(canvas.getByPlaceholderText('**********'), '123123');

    userEvent.click(canvas.getByRole('button'));

    await waitFor(() => {
      return expect(canvas.getByText('Login Realizado!')).toBeInTheDocument();
    });
  },
};
