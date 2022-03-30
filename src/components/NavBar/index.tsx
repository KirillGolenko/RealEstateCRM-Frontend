import React, { FC } from 'react';

import { Link } from 'react-router-dom';

import { Breadcrumb } from 'antd';
import 'antd/dist/antd.css';

interface INavBarProps {
  type: string;
}

const NavBar: FC<INavBarProps> = ({ type }) => {
  return (
    <Breadcrumb separator=''>
      <Breadcrumb.Item key='login'>
        <Link
          className={type === 'login' ? 'primal-link' : 'secondary-link'}
          to='/login'
        >
          Log in
        </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item key='signup'>
        <Link
          className={type === 'signup' ? 'primal-link' : 'secondary-link'}
          to='/signup'
        >
          Sign up
        </Link>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default NavBar;
