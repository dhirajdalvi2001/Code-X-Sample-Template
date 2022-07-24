import React from 'react'
import { Link } from 'react-router-dom'

function My404Component() {
  return (
    <div className='My404'>
        <h2>Error 404 : Page Not Found</h2>
        <Link to="/" className='My404_LinkTo'>Want To Go Back?</Link>
    </div>
  )
}

export default My404Component