import React from 'react';

import CalendarBar from '../CalendarBar';
import Header from '../Header';
import SideBar from '../SideBar';
import MainCalendar from './EventCalendar';
import Members from './Members';

const Calendar = () => {
  return (
    <div className='dashboard-container'>
      <SideBar />
      <div className='dashboard-content'>
        <Header />
        <div className='diagramm-content'>
          <div className='main-calendar-container'>
            <MainCalendar />
          </div>
          <div className='calendar-content'>
            <CalendarBar />
            <Members />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
