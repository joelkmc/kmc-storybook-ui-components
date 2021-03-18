import React, { useContext } from 'react';
import { SiderMoon, SiderSun } from '../assets/svg/Icons';
import { ThemeContext } from './ThemeContext';

const ThemeToggler: React.FC = () => {
  const { theme, handleChangeTheme } = useContext(ThemeContext);

  return (
    <div
      className={`w-full transition-all flex justify-center overflow-visible`}
    >
      <div className='flex items-center rounded-full dark:bg-gray-700 bg-gray-100 relative border border-gray-200'>
        <div className='names flex transition-all'>
          <p
            className={`p-2 flex justify-center items-center text-sm text-kmcOrange opacity-100 transition-all ${
              theme === 'dark' && 'opacity-0'
            } ${theme === 'dark' && 'hidden'}`}
            onClick={handleChangeTheme}
          >
            <SiderSun className={`leading-none cursor-pointer`} />
          </p>
          <p
            className={`p-2 flex justify-center items-center text-sm transition-all dark:text-gray-900 cursor-pointer ${
              theme === 'dark' && 'opacity-100'
            } ${theme !== 'dark' && 'hidden'}`}
            onClick={handleChangeTheme}
          >
            <SiderMoon className={`leading-none cursor-pointer`} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThemeToggler;
