import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Calendar from './components/Calendar';
import DashBoard from './components/Dashboard';
import ForgotPass from './components/ForgotPass';
import Login from './components/Login';
import Signup from './components/Signup';
import TasksList from './components/TasksList';

const App = () => {
  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='dashboard' element={<DashBoard />} />
      <Route path='calendar' element={<Calendar />} />
      <Route path='tasks' element={<TasksList />} />
      <Route path='property' element={<DashBoard />} />
      <Route path='employees' element={<DashBoard />} />
      <Route path='clients' element={<DashBoard />} />
      <Route path='signup' element={<Signup />} />
      <Route path='forgot_password' element={<ForgotPass />} />
      <Route path='*' element={<Navigate to='/login' />} />
    </Routes>
  );
};

export default App;
