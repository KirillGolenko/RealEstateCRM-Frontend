import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ForgotPass from './components/ForgotPass';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
      <Route path='forgot_password' element={<ForgotPass />} />
      <Route path='*' element={<Navigate to='/login' />} />
    </Routes>
  );
};

export default App;
