import React from 'react';

import Header from '../Header';
import SideBar from '../SideBar';
import Tasks from './TaskTree';

const TasksList = () => {
  return (
    <div className='dashboard-container'>
      <SideBar />
      <div className='dashboard-content'>
        <Header />
        <div className='diagramm-content'>
          <Tasks />
        </div>
      </div>
    </div>
  );
};

export default TasksList;
