import React from 'react';

import { tasks } from '../../../constants';

import { Checkbox, Divider } from 'antd';
import 'antd/dist/antd.css';

const Tasks = () => {
  return (
    <div className='tasks-container'>
      <div className='tasks-header'>
        <h1>Tasks</h1>
        <img src='/assets/plus.svg' alt='plus icon' />
      </div>
      <Divider />
      {tasks.map((item, index) => (
        <div className='tasks-content' key={`task-${index}`}>
          <Checkbox checked={item.checked}>{item.title}</Checkbox>
          <p id='task-time'>{item.time}</p>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
