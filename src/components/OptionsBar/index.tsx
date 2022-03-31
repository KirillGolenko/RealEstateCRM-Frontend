import React, { FC } from 'react';

import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import '../../translation/i18n';

import { Checkbox, Button } from 'antd';
import 'antd/dist/antd.css';

interface IOptionsBarProps {
  isSubmitting: boolean;
  type: string;
}

const OptionsBar: FC<IOptionsBarProps> = ({ isSubmitting, type }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className='options-content'>
        <Checkbox className='checkbox-remember-me'>{t('remember')}</Checkbox>
        <Link className='forgot-pass-link' to='/forgot_password'>
          {t('forgotPass')}
        </Link>
      </div>
      <Button
        disabled={isSubmitting}
        htmlType='submit'
        className='login-btn'
        type='primary'
      >
        {type === 'login' ? t('login') : t('signup')}
      </Button>
    </>
  );
};

export default OptionsBar;
