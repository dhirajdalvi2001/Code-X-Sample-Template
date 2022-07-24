import React from 'react';
import RecentContacts from './RecentContacts';
import ChatBox from './ChatBox';
import OnlineContacts from './OnlineContacts';
import Navbar from './Navbar';

function Body() {
  return (
    <div>
      <Navbar />
      <div className='body-css'>
        <RecentContacts />
        <ChatBox />
        <OnlineContacts />
      </div>
    </div>
  )
}

export default Body;