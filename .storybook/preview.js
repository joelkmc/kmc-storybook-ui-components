import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Layout from './Layout';

export const parameters = {
  layout: 'centered',
};

addDecorator((storyFn) => <Layout>{storyFn()}</Layout>);
