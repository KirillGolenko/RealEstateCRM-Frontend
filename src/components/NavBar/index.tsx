import React, { FC } from 'react';

import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import '../../translation/i18n';

import { Breadcrumb } from 'antd';
import 'antd/dist/antd.css';

interface INavBarProps {
  type: string;
}

const NavBar: FC<INavBarProps> = ({ type }) => {
  const { t } = useTranslation();

  return (
    <Breadcrumb separator=''>
      <Breadcrumb.Item key='login'>
        <Link
          className={type === 'login' ? 'primal-link' : 'secondary-link'}
          to='/login'
        >
          {t('login')}
        </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item key='signup'>
        <Link
          className={type === 'signup' ? 'primal-link' : 'secondary-link'}
          to='/signup'
        >
          {t('signup')}
        </Link>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default NavBar;
