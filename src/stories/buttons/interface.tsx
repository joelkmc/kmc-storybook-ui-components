import { RoundType } from './../interface/RoundType';

export interface ButtonProps {
  type?: 'secondary' | 'link' | 'primary' | 'danger' | 'success' | undefined;
  label?: string;
  className?: string;
  outlined?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  roundType?: RoundType;
  htmlType?: 'button' | 'submit' | 'reset';
  ref?: React.LegacyRef<HTMLButtonElement>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const ButtonTypeControls = {
  control: {
    type: 'select',
    options: ['primary', 'link', 'danger', 'success'],
  },
};
