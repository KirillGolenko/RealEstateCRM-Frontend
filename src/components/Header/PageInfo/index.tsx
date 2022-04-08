import React from 'react';
import { useLocation } from 'react-router-dom';

import { Breadcrumb } from 'antd';
import 'antd/dist/antd.css';

const PageInfo = () => {
  const location = useLocation();

  const pathName = location.pathname.substring(1);

  const pageName = pathName[0].toUpperCase() + pathName.substring(1);

  return (
    <div className='page-info-container'>
      <Breadcrumb className='page-info-content'>
        <Breadcrumb.Item key='main'>Real estate</Breadcrumb.Item>
        <Breadcrumb.Item key={pathName}>{pageName}</Breadcrumb.Item>
      </Breadcrumb>
      <p className='page-name'>{pageName}</p>
    </div>
  );
};

export default PageInfo;
