import React from 'react';
import { Button } from 'antd';
import { checkClassName } from '../../utils/className_helper';
import classnames from 'classnames';

export interface AppButtonProps {
  type?:
    | 'text'
    | 'link'
    | 'ghost'
    | 'default'
    | 'primary'
    | 'dashed'
    | undefined;
  label?: string;
  className?: string;
  danger?: boolean;
  success?: boolean;
}

const AppButton: React.FC<AppButtonProps> = ({
  children,
  className,
  label = 'Button',
  type,
  danger,
  success,
  ...rest
}) => {
  const classNamesFromTypes = classnames(
    'font-proxiSemiBold transition-all z-10 px-5',
    {
      'focus:border-current shadow-none': type === 'link',
    },
    {
      'border-kmcOrange text-kmcOrange hover:bg-kmcOrange hover:text-white':
        type === 'default',
    },
    {
      'border-kmcOrange text-kmcOrange ': type === 'dashed',
    },
    {
      'border border-red-400 text-red-400 hover:bg-red-400 hover:text-white hover:border-red-400 hover:text-gray-100':
        danger === true,
    },
    {
      'text-white border-kmcGreenBase bg-kmcGreenBase hover:bg-green-400 hover:border-green-400 hover:text-white focus:bg-green-400 focus:border-green-400 focus:text-white':
        success === true,
    }
  );

  // Generate Default classNames
  const overrideClasses = checkClassName(className ? className : '', [
    {
      searchString: 'rounded',
      defaultClassName: 'rounded-sm',
    },
    {
      searchString: 'border',
      defaultClassName: '',
    },
    {
      searchString: 'shadow',
      defaultClassName: type === 'link' ? '' : 'shadow-sm hover:shadow-md',
    },
  ]);

  const defaultButtonClass = [overrideClasses, classNamesFromTypes].join(' ');

  return (
    <Button
      {...rest}
      type={type}
      danger={danger}
      className={defaultButtonClass}
    >
      {label || children}
    </Button>
  );
};

export default AppButton;
