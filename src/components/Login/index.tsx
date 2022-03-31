import React from 'react';

import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import '../../translation/i18n';

import GoogleButton from '../GoogleLogin';
import NavBar from '../NavBar';
import OptionsBar from '../OptionsBar';
import LanguageSelector from '../LanguageSelector';

import { loginSchema } from '../../validation';

import { Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import 'antd/dist/antd.css';

const Login = () => {
  const { t } = useTranslation();

  return (
    <div className='login-container'>
      <LanguageSelector />
      <img src='/assets/logo.svg' alt='header logo' />
      <NavBar type='login' />
      <Formik
        validationSchema={loginSchema}
        initialValues={{ email: '', password: '' }}
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
            <span className='label'>
              {t('password')}
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
            <OptionsBar type='login' isSubmitting={isSubmitting} />
          </form>
        )}
      </Formik>
      <GoogleButton />
    </div>
  );
};

export default Login;
