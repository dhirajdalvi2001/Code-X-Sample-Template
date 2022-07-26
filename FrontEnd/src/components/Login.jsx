import React, { useContext } from 'react';
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
  let navigateTo = useNavigate();

  function handleKeyPress(e) {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  }
  async function submit() {
    if (errors !== null) {
      console.log("Errors not null");
      console.log(errors);
      // navigateTo("/");
      return;
    } else {
      console.log("Errors are null");
      logInValue.changeLogin(true);
      console.log(logInValue.isLoggedIn);
      navigateTo("/");
    }
    console.log("Submitted Successfully");
  }
  return (
    <div className='login'>
        <h1>Login to continue</h1>
        <form className='login_form' onKeyPress={handleKeyPress} onSubmit={(e) => handleSubmit(e, false)}>
            <input type='text' placeholder='Username' name='username' value={values.username} onChange={handleChange} autoComplete='off' />
            <input type='password' placeholder='Password' name='password' value={values.password} onChange={handleChange} autoComplete='off' />
            <button className='login_button'>Login</button>
            <h3 className='login_h3'>New here? <Link to="/sign-up" className='login_link'>Create a new account</Link></h3>
        </form>
    </div>
  )
}

export default Login