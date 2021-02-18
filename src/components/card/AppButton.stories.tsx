import { AppButton, AppButtonProps } from './AppButton';
import { Meta, Story } from '@storybook/react';
import React from 'react';

// This tells Storybook how to list your stories and provide information
export default {
  title: 'Atoms/AppButton',
  component: AppButton,
} as Meta;

// Primary Button
export const Primary: Story<AppButtonProps> = (args) => (
  <AppButton {...args}>Primary</AppButton>
);
Primary.args = {
  type: 'primary',
};

// Default Button
export const Default: Story<AppButtonProps> = (args) => (
  <AppButton {...args}>Default</AppButton>
);
Default.args = {
  type: 'default',
};
