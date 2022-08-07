import React from "react";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import Body from "./Body";
import Login from "./Login";
import SignUp from "./SignUp";
import My404Component from "./My404Component";
import { useSelector } from "react-redux";

function RouteS() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={isLoggedIn ? <Body /> : <Navigate to="/login" />}
      />
      <Route
        exact
        path="/login"
        element={isLoggedIn ? <Navigate to="/" /> : <Login />}
      />
      <Route
        exact
        path="/sign-up"
        element={isLoggedIn ? <Navigate to="/" /> : <SignUp />}
      />
      <Route exact path="*" element={<My404Component />} />
    </Routes>
  );
}

export default RouteS;
