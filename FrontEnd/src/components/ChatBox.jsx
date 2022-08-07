import React, { useState } from "react";
import { ChatMessageDto } from "../model/ChatMessageDto";

function ChatBox() {
  const [chatMessages, setChatMessages] = useState([
    new ChatMessageDto("100RBH", "Hi"),
  ]);
  const [message, setMessage] = useState("");
  // const [user, setUser] = useState("");

  const listOfMessages = chatMessages.map((chatMessage, index) => {
    return (
      <div key={index}>
        <p>{`${chatMessage.user} : ${chatMessage.message} `}</p>
      </div>
    );
  });
  return (
    <div className="chat-box">
      {listOfMessages}
      <div className="chat-box_top"></div>
      <div className="chat-box_bottom">
        <input
          type="text"
          placeholder="Type your message here"
          className="message-box"
        />
      </div>
    </div>
  );
}

export default ChatBox;
