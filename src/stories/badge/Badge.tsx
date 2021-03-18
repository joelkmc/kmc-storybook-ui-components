import React from 'react';
import { TRouned } from '../Rounded.types';
import classnames from 'classnames';
import { kmcOrange } from '../../utils/kmcColors';
import { checkClassName } from '../../utils/className_helper';

export interface BadgeProps {
  label?: string;
  type?: 'filled' | 'outlined';
  rounded?: TRouned;
  color?: 'string';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  label = 'Badge',
  rounded = 'full',
  type = 'filled',
  className,
  color = kmcOrange,
}) => {
  // Generate Default classNames
  const style =
    type === 'outlined'
      ? { color, border: `1px solid ${color}` }
      : { color: 'white', backgroundColor: `${color}` };

  const roundType = classnames(
    { 'rounded-xs': rounded === 'xs' },
    { 'rounded-sm': rounded === 'sm' },
    { 'rounded-md': rounded === 'md' },
    { 'rounded-lg': rounded === 'lg' },
    { 'rounded-xl': rounded === 'xl' },
    { 'rounded-full': rounded === 'full' }
  );

  const BGBasedOnProp = classnames({
    'text-white': color === undefined,
  });

  const overrideClasses = checkClassName(className ? className : '', [
    {
      searchString: 'py',
      defaultClassName: 'py-1',
    },
    {
      searchString: 'px',
      defaultClassName: 'px-2',
    },
  ]);

  const defaultClassName = [BGBasedOnProp, roundType, overrideClasses].join(
    ' '
  );

  return (
    <p className={`${defaultClassName} text-center inline-block`} style={style}>
      <span className='leading-3'>{label}</span>
    </p>
  );
};

export default Badge;
