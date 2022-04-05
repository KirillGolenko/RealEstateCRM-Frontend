import React from 'react';

import { events } from '../../../constants';

import { Avatar, Divider } from 'antd';

const Events = () => {
  return (
    <div className='events-container'>
      <div className='events-header'>
        <p className='header'>Resent events</p>
        <div className='events-values'>
          <img src='/assets/arrowUp.svg' alt='arrow up icon' />
          <p className='persent'>6% more</p>
          <p className='day'>in Yesterday</p>
        </div>
      </div>
      <Divider />
      {events.map((item, index) => (
        <div className='event-item' key={`event-${index}`}>
          <div className='event-description'>
            <Avatar size={30} src={'/assets/userImage.jpg'} />
            <p className='event-username'>{item.name}</p>
            <p>added request № {item.request} in categories</p>
            <p style={{ color: item.categotyColor }}>{item.category}</p>
          </div>
          <div>
            <p className='event-time'>{item.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;
