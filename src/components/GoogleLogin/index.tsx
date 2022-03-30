import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleButton = () => {
  const onSuccess = (res: any) => {
    console.log('Login Success: currentUser:', res.profileObj);
  };

  const onFailure = (res: any) => {
    console.log('Login failed: res:', res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID!}
        buttonText='Login'
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
  );
};

export default GoogleButton;
