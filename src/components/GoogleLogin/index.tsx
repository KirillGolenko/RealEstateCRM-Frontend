import React from 'react';

import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

import { Button, Divider } from 'antd';
import 'antd/dist/antd.css';

const GoogleButton = observer(() => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    navigate('/dashboard');
  };

  return (
    <div className='google-auth-container'>
      <Divider plain>Or continue with</Divider>
      <Button className='google-btn' onClick={() => handleGoogleLogin()}>
        <img src='/assets/GoogleLogo.svg' alt='google image' />
      </Button>
    </div>
  );
});

export default GoogleButton;
