import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

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

// <Router>
//         <Routes>
//           <Route exact path="/" element={<Body />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/sign-up" element={<SignUp />} />
//           <Route path="*" element={<My404Component />} />
//         </Routes>
//       </Router>