import React from 'react';

import { Calendar } from 'antd';
import { useLocation } from 'react-router-dom';

const CalendarBar = () => {
  const location = useLocation();

  return (
    <div
      className={
        location.pathname === '/dashboard'
          ? 'calendar-container dashboard'
          : 'calendar-container'
      }
    >
      <Calendar className='calendar' fullscreen={false} />
    </div>
  );
};

export default CalendarBar;
