import React, { useState } from 'react'
import { ChatMessageDto } from '../model/ChatMessageDto';

function ChatBox() {
  const [chatMessages, setChatMessages] = useState([
    new ChatMessageDto('100RBH', 'Hi')
  ]);
  const [message, setMessage] = useState("");

  const listOfMessages = chatMessages.map((chatMessage, index) => {
    return (
      <div key={index}>
        <p>{`${chatMessage.user} : ${chatMessage.message} `}</p>
      </div>
    );
  })
  return (
    <div className='chat-box'>
      {listOfMessages}
      <div className='chat-box_bottom'>
        <div className='chat-box_bottom-user'>
        
        </div>
        <div className='chat-box_bottom-message'>
          
        </div>
      </div>
    </div>
  )
}

export default ChatBox;