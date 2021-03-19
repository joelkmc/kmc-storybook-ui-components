import React from 'react';

import { Meta, Story } from '@storybook/react';
import Badge, { BadgeProps } from './Badge';
import { kmcOrange } from '../../utils/kmcColors';
import { RoundTypeControl } from '../interface/RoundType';

export default {
  title: 'Components/Atoms/Badge',
  component: Badge,
  argTypes: {
    rounded: RoundTypeControl,
    color: {
      control: 'color',
      defaultValue: kmcOrange,
    },
  },
} as Meta;

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

// Bordered Button
export const Bordered = Template.bind({});
Bordered.args = {
  type: 'outlined',
};

// Filled Button
export const Filled = Template.bind({});
Filled.args = {
  type: 'filled',
};

// SmallRound Button
export const SmallRound = Template.bind({});
SmallRound.args = {
  rounded: 'sm',
};
