import React, { useState } from 'react';

import { toJS } from 'mobx';

import user from '../../../store/user';

import { Avatar, Dropdown, Menu } from 'antd';

const UserInfo = () => {
  const [open, setOpen] = useState(false);
  const info = toJS(user.user);

  const menu = (
    <Menu>
      <Menu.Item key='logout'>log out</Menu.Item>
      <Menu.Item key='asd'>chto to eshe</Menu.Item>
    </Menu>
  );

  return (
    <div className='user-info-container'>
      <Avatar size={30} src={info.imageUrl || '/assets/userImage.jpg'} />
      <div className='user-info-content'>
        <p className='user'>{info.name || 'user'}</p>
        <p className='role'>Agent</p>
      </div>
      <Dropdown
        visible={open}
        onVisibleChange={(visible) => setOpen(visible)}
        overlay={menu}
        placement='bottomRight'
        arrow
        trigger={['click']}
      >
        <img
          className={open ? 'arrow-rotated' : 'arrow'}
          src='/assets/arrowDown.svg'
          alt='menu arrow'
          onClick={() => setOpen(!open)}
        />
      </Dropdown>
    </div>
  );
};

export default UserInfo;
