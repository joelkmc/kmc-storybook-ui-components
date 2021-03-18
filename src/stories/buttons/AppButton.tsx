import React, { useContext } from 'react';
import { Button } from 'antd';
import { checkClassName } from '../../utils/className_helper';
import classnames from 'classnames';
import { ThemeContext } from '../../context/ThemeContext';

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
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  loading?: boolean;
}

const AppButton: React.FC<AppButtonProps> = ({
  children,
  className,
  label = 'Button',
  type,
  danger,
  success,
  prefix,
  suffix,
  ...rest
}) => {
  const { theme } = useContext(ThemeContext);

  const classNamesFromTypes = classnames(
    'font-proxiSemiBold transition-all z-10 focus:border-transparent',

    // Primary Button Class
    {
      'bg-kmcOrange px-5': type === 'primary',
    },

    // Link Button Class
    {
      'shadow-none text-kmcOrange': type === 'link',
    },

    // Default Button Class
    {
      'border-kmcOrange text-kmcOrange hover:bg-kmcOrange hover:text-white px-5':
        type === 'default',
    },

    // Dashed Button Class
    {
      'border-kmcOrange text-kmcOrange px-5': type === 'dashed',
    },

    // Danger Button Class
    {
      'border border-red-400 text-red-400 hover:bg-red-400 hover:text-white hover:border-red-400 hover:text-gray-100 px-5':
        danger === true,
    },

    // Success Button Class
    {
      'border border-kmcGreenBase text-kmcGreenBase hover:bg-kmcGreenBase hover:text-white hover:border-kmcGreenBase hover:text-gray-100 px-5':
        success === true,
    },
    { 'bg-opacity-90': theme === 'dark' }
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
      {prefix} {label || children} {suffix}
    </Button>
  );
};

export default AppButton;
