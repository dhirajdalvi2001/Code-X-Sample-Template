import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className='login'>
        <h1>Sign-Up to continue</h1>
        <form className='login_form'>
            <input type='text' placeholder='Username' name='username' autoComplete='off' />
            <input type='email' placeholder='Email Address' name='email' autoComplete='off' />
            <input type='password' placeholder='Password' name='password' autoComplete='off' />
            <input type='password' placeholder='Confirm Password' name='cpassword' autoComplete='off' />
            <button className='login_button'>Sign Up</button>
            <h3 className='login_h3'>Already have an account? <Link to="/login" className='login_link'>Click Here</Link></h3>
        </form>
    </div>
  )
}

export default SignUp