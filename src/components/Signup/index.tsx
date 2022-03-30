import React from 'react';
import { Link } from 'react-router-dom';

import { Formik } from 'formik';
import GoogleButton from '../GoogleLogin';

import { Breadcrumb, Button, Checkbox, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { signupSchema } from '../../validation';

const Signup = () => {
  return (
    <div className='login-container'>
      <img src='/assets/logo.svg' />

      <Breadcrumb separator=''>
        <Breadcrumb.Item key='login'>
          <Link className='secondary-link' to='/login'>
            Log in
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item key='signup'>
          <Link className='primal-link' to='/signup'>
            Sign up
          </Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Formik
        validationSchema={signupSchema}
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={(values, { setSubmitting }) => {
          console.log('values :>> ', values);
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
            <div className='options-content'>
              <Checkbox className='checkbox-remember-me'>Remember me</Checkbox>
              <Link className='forgot-pass-link' to='/forgot_password'>
                Forgot password?
              </Link>
            </div>
            <Button
              disabled={isSubmitting}
              htmlType='submit'
              className='login-btn'
              type='primary'
            >
              Sign up
            </Button>
          </form>
        )}
      </Formik>
      <GoogleButton />
    </div>
  );
};

export default Signup;
