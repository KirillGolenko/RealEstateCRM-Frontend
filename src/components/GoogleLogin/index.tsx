import React from 'react';
// import axios from 'axios';

// import { useGoogleLogin } from 'react-google-login';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

// import user from '../../store/user';

import { Button, Divider } from 'antd';
import 'antd/dist/antd.css';

const GoogleButton = observer(() => {
  const navigate = useNavigate();

  // const onSuccess = (res: any) => {
  //   // console.log('Login Success: currentUser:', res.profileObj);
  //   user.getUser({
  //     email: res.profileObj.email,
  //     name: res.profileObj.name,
  //     imageUrl: res.profileObj.imageUrl,
  //   });
  //   navigate('/dashboard');
  // };

  // const onFailure = (res: any) => {
  //   console.log('Login failed: res:', res);
  // };
  // const { signIn } = useGoogleLogin({
  //   onSuccess,
  //   onFailure,
  //   clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID!,
  //   isSignedIn: true,
  //   accessType: 'offline',
  // });

  const handleGoogleLogin = async () => {
    // await axios.get(`${process.env.REACT_APP_BE_URL!}/google`);
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
