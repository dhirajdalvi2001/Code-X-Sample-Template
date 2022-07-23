import React from 'react'

function Login() {
  return (
    <div className='login'>
        <h2>Welcome Coders</h2>
        <h1>Login or Sign up to continue</h1>
        <form className='login_form'>
            <input type='text' placeholder='Username' name='username' />
            <input type='email' placeholder='Email' name='email' />
            <input type='password' placeholder='Password' name='password' />
            <input type='password' placeholder='Confirm Password' name='cpassword' />
        </form>
    </div>
  )
}

export default Login