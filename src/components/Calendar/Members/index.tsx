import React from 'react';

import { members } from '../../../constants';

import { Avatar, Checkbox, Divider } from 'antd';

const Members = () => {
  return (
    <div className='members-container'>
      <div className='members-header'>
        <h1>Members</h1>
        <img src='/assets/plus.svg' alt='plus icon' />
      </div>
      <Divider />
      <Checkbox className='members-checkbox' checked={true}>
        <p className='checkbox-text'>All</p>
      </Checkbox>
      {members.map((item, index) => (
        <div className='members-content' key={`task-${index}`}>
          <Checkbox checked={item.checked} />
          <Avatar size={30} src={'/assets/userImage.jpg'} />
          <div className='member-info'>
            <p className='user-name'>{item.user}</p>
            <p className='user-role'>{item.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Members;
