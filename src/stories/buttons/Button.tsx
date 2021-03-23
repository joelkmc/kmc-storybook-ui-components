import React from 'react';
import classnames from 'classnames';
import { ButtonProps } from './interface';
import { defaultTransition } from '../../utils/helper.transition';
import { StyledButton } from './style';

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  roundType = 'md',
  label = 'Button',
  type = 'primary',
  outlined = false,
  prefix,
  suffix,
  htmlType = 'button',
  loading = false,
  disabled = false,
  ...rest
}) => {
  // Generate Button Text Color based on {type} props
  const labelColor = classnames({
    'text-white': !outlined && type !== 'link',
    'text-kmc-primary hover:text-white border border-kmc-primary':
      outlined && type === 'primary',
    'text-kmc-secondary hover:text-white border border-kmc-secondary':
      outlined && type === 'secondary',
    'text-kmc-red hover:text-white border border-kmc-red':
      outlined && type === 'danger',
    'text-kmc-green-300 hover:text-white border border-kmc-green-300':
      outlined && type === 'success',
  });

  // Generate Button Ring Color based on {type} props
  const focusRing = classnames({
    'focus:ring-kmc-primary focus:ring-offset-kmc-primary': type === 'primary',
    'focus:ring-kmc-secondary focus:ring-offset-kmc-secondary':
      type === 'secondary',
    'focus:ring-kmc-red focus:ring-offset-kmc-red': type === 'danger',
    'focus:ring-kmc-green-200 focus:ring-offset-green-200': type === 'success',
  });

  // Generate Button Background based on {type} props
  const buttonBG = classnames({
    'bg-kmc-primary hover:bg-opacity-80': type === 'primary' && !outlined,
    'bg-kmc-secondary hover:bg-opacity-80': type === 'secondary' && !outlined,
    'bg-kmc-red hover:bg-opacity-80': type === 'danger' && !outlined,
    'bg-kmc-green-300 hover:bg-opacity-80': type === 'success' && !outlined,

    'bg-white hover:bg-kmc-primary': type === 'primary' && outlined,
    'bg-white hover:bg-kmc-secondary': type === 'primary' && outlined,
    'bg-white hover:bg-kmc-red': type === 'danger' && outlined,
    'bg-white hover:bg-kmc-green-300': type === 'success' && outlined,
  });

  // Generate Button Radius based on {roundtype} Props
  const buttonRadius = classnames({
    'rounded-xs': roundType === 'xs',
    'rounded-sm': roundType === 'sm',
    'rounded-md': roundType === 'md',
    'rounded-lg': roundType === 'lg',
    'rounded-xl': roundType === 'xl',
    'rounded-full': roundType === 'full',
  });

  // Generate Button Padding based on {classname} props
  const buttonPadding = classnames({
    'px-4 py-2': !className?.includes('p-') && type !== 'link',
  });

  // Generate Button Shadow based on {classname} props
  const buttonShadow = classnames({
    'px-4 py-2': !className?.includes('p-') && type !== 'link',
  });

  // Generate Button Shadow based on {classname} props
  const buttonAlign = classnames({
    'items-center flex loading': !className?.includes('p-') && loading,
  });

  // default Button class
  const defaultClass = classnames('text-center', {
    'shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-40 font-proxiSemiBold':
      type !== 'link',
    'link hover:text-opacity-80': type === 'link',
  });

  // All Classes
  const buttonClass = [
    focusRing,
    buttonAlign,
    buttonBG,
    labelColor,
    buttonPadding,
    buttonRadius,
    buttonShadow,
    defaultTransition,
    defaultClass,
    className,
  ].join(' ');

  console.log(buttonClass);

  return (
    <StyledButton
      {...rest}
      disabled={disabled}
      type={htmlType}
      className={buttonClass}
    >
      {prefix}{' '}
      {loading && (
        <span>
          <svg
            width='20'
            height='20'
            fill='currentColor'
            className='mr-2 animate-spin'
            viewBox='0 0 1792 1792'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z'></path>
          </svg>
        </span>
      )}
      {label || children} {suffix}
    </StyledButton>
  );
};

export default Button;
