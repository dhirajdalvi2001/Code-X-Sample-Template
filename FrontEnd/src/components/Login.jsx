import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='login'>
        <h2>Welcome Back</h2>
        <h1>Login or Sign up to continue</h1>
        <form className='login_form'>
            <input type='text' placeholder='Username' name='username' autoComplete='off' />
            <input type='password' placeholder='Password' name='password' autoComplete='off' />
            <button className='login_button'>Login</button>
            <h3 className='login_h3'>New here? <Link to="/sign-up" className='login_link'>Create a new account</Link></h3>
        </form>
    </div>
  )
}

export default Login