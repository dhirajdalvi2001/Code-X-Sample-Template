import React from 'react'
import { Route, Router, Routes } from 'react-router-dom';
import Body from './Body';
import Login from './Login';
import SignUp from './SignUp';
import My404Component from './My404Component';
import { BrowserRouter } from "react-router-dom";

function RouteS() {
  return (
        <Routes>
          <Route exact path="/" element={<Body />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/sign-up" element={<SignUp />} />
          <Route exact path="*" element={<My404Component />} />
        </Routes>
  )
}

export default RouteS;