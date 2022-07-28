import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Router, Routes } from 'react-router-dom';
import { configureStore  } from 'redux';
import App from './App';
import Body from './components/Body';
import Login from './components/Login';
import My404Component from './components/My404Component';
import SignUp from './components/SignUp';
import reportWebVitals from './reportWebVitals';

// STORE - GLOBALIZED STATE 
// ACTION 
// REDUCER 
// DISPATCH 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
