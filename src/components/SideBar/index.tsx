import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Divider } from 'antd';
import { sidebarValues } from '../../constants';

const SideBar = () => {
  const location = useLocation();

  return (
    <div className='sidebar-container'>
      <img
        src='/assets/sidebar-logo.svg'
        alt='sidebar logo'
        className='sidebar-logo'
      />

      <Divider className='sidebar-devider' />
      {sidebarValues.map((item, index) => (
        <Link
          to={`/${item.name.toLowerCase()}`}
          className='sidebar-content'
          key={`sidebar-item-${index}`}
        >
          {location.pathname.includes(item.name.toLowerCase()) && (
            <img
              className='sidebar-line'
              src='/assets/line.svg'
              alt='line image'
            />
          )}
          <div className='sidebar-name'>
            <img src={item.src} alt={item.alt} />
            <p
              className={
                location.pathname.includes(item.name.toLowerCase())
                  ? 'sidebar-primal'
                  : 'sidebar-secondary'
              }
            >
              {item.name}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
