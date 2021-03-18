import React from 'react';
import Icon from '@ant-design/icons';

interface IIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
  onClick?:
    | ((event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void)
    | undefined;
}

const sun = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='currentColor'
    viewBox='0 0 30 30'
  >
    <g id='bxs-sun' transform='translate(-3 -3)'>
      <path
        id='Path_217'
        data-name='Path 217'
        d='M10.492,18A7.51,7.51,0,1,0,18,10.49,7.518,7.518,0,0,0,10.492,18ZM16.5,28.5h3V33h-3ZM16.5,3h3V7.5h-3ZM3,16.5H7.5v3H3Zm25.5,0H33v3H28.5Z'
      />
      <path
        id='Path_218'
        data-name='Path 218'
        d='M8.455,29.667,6.334,27.546l3.181-3.181,2.121,2.121Z'
      />
      <path
        id='Path_219'
        data-name='Path 219'
        d='M24.363,9.516l3.183-3.183,2.121,2.121-3.183,3.183Z'
      />
      <path
        id='Path_220'
        data-name='Path 220'
        d='M9.516,11.639,6.335,8.455,8.458,6.334l3.18,3.183Z'
      />
      <path
        id='Path_221'
        data-name='Path 221'
        d='M29.667,27.546l-2.121,2.121-3.183-3.183,2.121-2.121Z'
      />
    </g>
  </svg>
);

const moon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='currentColor'
    viewBox='0 0 24.749 27.004'
  >
    <path
      id='ios-moon'
      d='M28.223,24.905c-.2.007-.408.014-.612.014a12.4,12.4,0,0,1-8.916-3.755A12.807,12.807,0,0,1,15,12.108a12.981,12.981,0,0,1,1.23-5.534,18.4,18.4,0,0,1,.956-1.645.277.277,0,0,0-.274-.429A13.534,13.534,0,0,0,5.625,17.93,13.469,13.469,0,0,0,18.991,31.5a13.255,13.255,0,0,0,10.188-4.788,12.715,12.715,0,0,0,1.153-1.533.283.283,0,0,0-.288-.429,11.931,11.931,0,0,1-1.821.155Z'
      transform='translate(-5.625 -4.496)'
    />
  </svg>
);

export const SiderMoon = (props: IIconProps) => {
  return <Icon component={moon} {...props} />;
};

export const SiderSun = (props: IIconProps) => {
  return <Icon component={sun} {...props} />;
};
