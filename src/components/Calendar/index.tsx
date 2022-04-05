import React from 'react';

import { Calendar } from 'antd';

const CalendarBar = () => {
  return (
    <div className='calendar-container'>
      <Calendar className='calendar' fullscreen={false} />
    </div>
  );
};

export default CalendarBar;
