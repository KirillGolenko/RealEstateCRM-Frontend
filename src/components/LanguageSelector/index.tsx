import React from 'react';

import { useTranslation } from 'react-i18next';
import '../../translation/i18n';

import { Select } from 'antd';
import 'antd/dist/antd.css';

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();
  const { Option } = Select;

  const handleChangeLang = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <Select
      className='language-selector'
      placeholder={t('languageSelect')}
      style={{ width: 120 }}
      onChange={handleChangeLang}
    >
      <Option value='en'>English</Option>
      <Option value='ru'>Русский</Option>
    </Select>
  );
};

export default LanguageSelector;
