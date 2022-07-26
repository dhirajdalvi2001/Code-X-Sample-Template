import React from 'react';
import RecentContacts from './RecentContacts';
import ChatBox from './ChatBox';
import OnlineContacts from './OnlineContacts';
import Navbar from './Navbar';
import { FiSearch } from 'react-icons/fi';

function Body() {
  return (
    <div>
      <Navbar />
      <div className='body'>
        <div className='body_navbar'>
          <div className='body_navbar_left'>
            <FiSearch className='body_navbar_search-logo'/>
            <input className='body_navbar_search-box' type="text" placeholder='Search contact or chat' />
          </div>
          <div className='body_navbar_middle'>Contact Name</div>
          <div className='body_navbar_right'>10</div>
        </div>
        <div className='body_container'>
          <RecentContacts />
          <ChatBox />
          <OnlineContacts />
        </div>
      </div>
    </div>
  )
}

export default Body;