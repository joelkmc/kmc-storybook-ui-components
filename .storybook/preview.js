import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Layout from './Layout';
import { ThemeProvider } from '../src/context/ThemeContext';

export const parameters = {
  layout: 'centered',
};

addDecorator((storyFn) => (
  <ThemeProvider>
    <Layout>{storyFn()}</Layout>
  </ThemeProvider>
));
