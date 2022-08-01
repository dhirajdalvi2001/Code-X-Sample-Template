import React from 'react'
import { Navigate, Route, Router, Routes } from 'react-router-dom';
import Body from './Body';
import Login from './Login';
import SignUp from './SignUp';
import My404Component from './My404Component';
import { useSelector, useDispatch } from 'react-redux';

function RouteS() {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  return (
        <Routes>
          <Route exact path="/" element={isLoggedIn ? <Body /> : <Login />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/sign-up" element={<SignUp />} />
          <Route exact path="*" element={<My404Component />} />
        </Routes>
  )
}

export default RouteS;