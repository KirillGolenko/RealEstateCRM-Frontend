import React, { FC } from 'react';

import { Link } from 'react-router-dom';

import { Checkbox, Button } from 'antd';
import 'antd/dist/antd.css';

interface IOptionsBarProps {
  isSubmitting: boolean;
  type: string;
}

const OptionsBar: FC<IOptionsBarProps> = ({ isSubmitting, type }) => {
  return (
    <>
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
        {type === 'login' ? 'Log in' : 'Sign up'}
      </Button>
    </>
  );
};

export default OptionsBar;
