import React from 'react';

import CalendarBar from '../CalendarBar';
import Header from '../Header';
import SideBar from '../SideBar';
import DiagrammPanel from './DiagrammPanel';
import Events from './EventsPanel';
import InfoPanel from './InfoPanel';
import Tasks from './Tasks';

const DashBoard = () => {
  return (
    <div className='dashboard-container'>
      <SideBar />
      <div className='dashboard-content'>
        <Header />
        <InfoPanel />
        <div className='diagramm-content'>
          <div>
            <DiagrammPanel />
            <Events />
          </div>
          <div className='calendar-content'>
            <CalendarBar />
            <Tasks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
