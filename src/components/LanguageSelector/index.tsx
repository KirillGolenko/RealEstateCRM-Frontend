import React from 'react';

import { useTranslation } from 'react-i18next';
import '../../translation/i18n';

import { Breadcrumb } from 'antd';
import 'antd/dist/antd.css';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  return (
    <Breadcrumb className='language-selector' separator=''>
      <Breadcrumb.Item
        className={i18n.language === 'ru' ? 'primal-link' : 'secondary-link'}
        onClick={() => i18n.changeLanguage('ru')}
        key='ru'
      >
        RU
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item
        className={i18n.language === 'en' ? 'primal-link' : 'secondary-link'}
        onClick={() => i18n.changeLanguage('en')}
        key='en'
      >
        EN
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default LanguageSelector;
