import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import '../../translation/i18n';

import { forgotSchema } from '../../validation';

import LanguageSelector from '../LanguageSelector';

import { Button, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import 'antd/dist/antd.css';

const ForgotPass = () => {
  const [confirmed, setConfirmed] = useState(false);
  const { t } = useTranslation();

  return (
    <div className='login-container'>
      <LanguageSelector />
      <img src='/assets/logo.svg' alt='header logo' />

      <Formik
        validationSchema={forgotSchema}
        initialValues={{ email: '', password: '', repeat: '' }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <form className='input-container' onSubmit={handleSubmit}>
            <span className='label'>
              {t('email')}
              <Input
                name='email'
                value={values.email}
                onChange={handleChange}
                className='input'
                size='large'
              />
              {errors.email && touched.email ? (
                <div className='error'>{errors.email}</div>
              ) : null}
            </span>
            {confirmed && (
              <>
                <span className='label'>
                  {t('newPass')}
                  <Input.Password
                    size='large'
                    name='password'
                    value={values.password}
                    onChange={handleChange}
                    className='input'
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                  {errors.password && touched.password ? (
                    <div className='error'>{errors.password}</div>
                  ) : null}
                </span>
                <span className='label'>
                  {t('repeatPass')}
                  <Input.Password
                    size='large'
                    name='repeat'
                    value={values.repeat}
                    onChange={handleChange}
                    className='input'
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                  {errors.repeat && touched.repeat ? (
                    <div className='error'>{errors.repeat}</div>
                  ) : null}
                </span>
              </>
            )}
            <div className='forgot-options-content'>
              <Link className='forgot-pass-link' to='/login'>
                {t('alreadyRegistred')}
              </Link>
              {confirmed ? (
                <Button
                  disabled={isSubmitting}
                  htmlType='submit'
                  className='login-btn'
                  type='primary'
                >
                  {t('resetPass')}
                </Button>
              ) : (
                <Button
                  onClick={() => setConfirmed(true)}
                  className='login-btn'
                  type='primary'
                >
                  {t('confirmEmail')}
                </Button>
              )}
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ForgotPass;
