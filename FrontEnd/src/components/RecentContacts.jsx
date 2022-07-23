import React from 'react';
import { FiSearch } from 'react-icons/fi';

function RecentContacts() {
  return (
    <div className='recent-contacts'>
      <FiSearch className='recent-contacts_search-logo'/>
      <input className='recent-contacts_search-box' type="text" placeholder='Search contact or chat' />
    </div>
  )
}

export default RecentContacts