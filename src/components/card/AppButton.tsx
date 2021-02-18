import { Button } from 'antd';
import React, { HTMLAttributes } from 'react';
export interface AppButtonProps extends HTMLAttributes<HTMLDivElement> {
  type:
    | 'text'
    | 'link'
    | 'ghost'
    | 'primary'
    | 'default'
    | 'dashed'
    | undefined;
  classes?: string;
  size?: 'small' | 'middle' | 'large';
  onClick?: () => void;
  ref?:
    | ((instance: HTMLElement | null) => void)
    | React.RefObject<HTMLElement>
    | null
    | undefined;
}
export const AppButton: React.VFC<AppButtonProps> = ({
  type = 'default',
  children,
  classes,
  size,
  ...rest
}) => {
  // Determine shadow of buttons
  const buttonShadowClass: string = `${
    type !== 'link' && type !== 'text' ? 'shadow-sm hover:shadow-md' : ''
  }`;

  const className = [classes, `p-2 transition-all`, buttonShadowClass];

  return (
    <Button size={size} className={className.join(' ')} {...rest} type={type}>
      {children}
    </Button>
  );
};
