import React from 'react';

import './styles/app.less';
import './styles/main.css';

import { Button, Space } from 'antd';

function App() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <Space direction='vertical'>
        <p>A</p>
        <Button type='primary'>Submit</Button>
      </Space>
    </div>
  );
}

export default App;
