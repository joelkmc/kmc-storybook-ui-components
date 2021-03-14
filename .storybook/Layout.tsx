import React from 'react';
import '../src/styles/app.less';
import '../src/styles/tailwind.css';

interface LayoutProps {}

const Layout = ({ children }) => {
  return <div className='px-20 py-10'>{children}</div>;
};

export default Layout;
