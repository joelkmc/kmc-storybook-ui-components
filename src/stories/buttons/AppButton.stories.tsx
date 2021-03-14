import React from 'react';

import { Meta, Story } from '@storybook/react';
import AppButton, { AppButtonProps } from './AppButton';

export default {
  title: 'Buttons',
  component: AppButton,
} as Meta;

const Template: Story<AppButtonProps> = (args) => <AppButton {...args} />;

// Primary Button
export const Primary = Template.bind({});

Primary.args = {
  type: 'primary',
};

// Secondary Button
export const Secondary = Template.bind({});

Secondary.args = {
  type: 'primary',
};
