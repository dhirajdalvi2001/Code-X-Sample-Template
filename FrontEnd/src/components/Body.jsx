import React from 'react';
import RecentContacts from './RecentContacts';
import ChatBox from './ChatBox';
import OnlineContacts from './OnlineContacts';

function Body() {
  return (
    <div className='body-css'>
      <RecentContacts />
      <ChatBox />
      <OnlineContacts />
    </div>
  )
}

export default Body;