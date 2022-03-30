import React from 'react';

import { Formik } from 'formik';

import GoogleButton from '../GoogleLogin';
import NavBar from '../NavBar';
import OptionsBar from '../OptionsBar';

import { signupSchema } from '../../validation';

import { Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import 'antd/dist/antd.css';

const Signup = () => {
  return (
    <div className='login-container'>
      <img src='/assets/logo.svg' alt='header logo' />
      <NavBar type='signup' />
      <Formik
        validationSchema={signupSchema}
        initialValues={{ name: '', email: '', password: '' }}
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
              Name:
              <Input
                name='name'
                value={values.name}
                onChange={handleChange}
                className='input'
                size='large'
              />
              {errors.name && touched.name ? (
                <div className='error'>{errors.name}</div>
              ) : null}
            </span>
            <span className='label'>
              Email:
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
              Password:
              <Input.Password
                size='large'
                className='input'
                name='password'
                value={values.password}
                onChange={handleChange}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
              {errors.password && touched.password ? (
                <div className='error'>{errors.password}</div>
              ) : null}
            </span>
            <OptionsBar type='signup' isSubmitting={isSubmitting} />
          </form>
        )}
      </Formik>
      <GoogleButton />
    </div>
  );
};

export default Signup;
