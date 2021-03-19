import React, { useContext } from 'react';
import '../src/index.css';
import ThemeToggler from './../src/context/ThemeToggler';
import name from 'module';
import { ThemeContext, ThemeProvider } from '../src/context/ThemeContext';

interface LayoutProps {}

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`px-20 py-10 transition-all ${
        theme === 'dark' ? 'dark bg-gray-700' : 'bg-gray-100'
      }`}
    >
      <div className='flex justify-end mb-20'>
        <ThemeToggler />
      </div>
      {children}
    </div>
  );
};

export default Layout;
