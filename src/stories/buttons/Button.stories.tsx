import React from 'react';

import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from './Button';
import { LockFilled } from '@ant-design/icons';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// Primary Button
export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
};

// Default Button
export const Default = Template.bind({});
Default.args = {
  type: 'default',
};

// Danger Button
export const Danger = Template.bind({});
Danger.args = {
  danger: true,
};

// Success Button
export const Success = Template.bind({});
Success.args = {
  success: true,
};

// Link Button
export const Link = Template.bind({});
Link.args = {
  type: 'link',
};

// Prefix Button
export const ButtonWithPrefix = Template.bind({});
ButtonWithPrefix.args = {
  type: 'primary',
  prefix: <LockFilled />,
};

// Suffix Button
export const ButtonWithSuffix = Template.bind({});
ButtonWithSuffix.args = {
  type: 'primary',
  suffix: <LockFilled />,
};