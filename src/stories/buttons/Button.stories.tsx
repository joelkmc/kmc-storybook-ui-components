import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button from './Button';
import { ButtonProps, ButtonTypeControls } from './interface';
import { RoundTypeControl } from '../interface/RoundType';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
  argTypes: {
    roundType: RoundTypeControl,
    type: ButtonTypeControls,
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// Primary Button
export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
};

// Danger Button
export const Danger = Template.bind({});
Danger.args = {
  type: 'danger',
};

// Success Button
export const Success = Template.bind({});
Success.args = {
  type: 'success',
};

// Link Button
export const Link = Template.bind({});
Link.args = {
  type: 'link',
};

// Primary Button
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
