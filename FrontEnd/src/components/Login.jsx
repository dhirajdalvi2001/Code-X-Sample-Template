import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginContext } from '../App';
import UseForm from './UseForm';
import Validate from './Validate';

function Login() {
  const { handleChange, handleSubmit, values, errors } = UseForm(
    submit,
    Validate
  );
  let logInValue = useContext(loginContext);

  function handleKeyPress(e) {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  }
  async function submit() {
    logInValue.changeLogin(true);
    console.log("Submitted Successfully");
  }
  return (
    <div className='login'>
        <h1>Login to continue</h1>
        <form className='login_form' onKeyPress={handleKeyPress} onSubmit={(e) => handleSubmit(e, false)} noValidate >
            <input type='text' placeholder='Username' name='username' value={values.username} onChange={handleChange} autoComplete='off' />
            {errors.username && <h6>{errors.username}</h6>}
            <input type='password' placeholder='Password' name='password' value={values.password} onChange={handleChange} autoComplete='off' />
            {errors.password && <h6>{errors.password}</h6>}
            <button className='login_button'>Login</button>
            <h3 className='login_h3'>New here? <Link to="/sign-up" className='login_link'>Create a new account</Link></h3>
        </form>
    </div>
  )
}

export default Login;