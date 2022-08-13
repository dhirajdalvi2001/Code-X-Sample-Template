import React from "react";

const ChatMessage = (props) => {
  return (
    <div className="chat-message">
      <div className="chat-message_left">
        <img
          src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"
          className="profile-pic"
        />
        <button className="chat-message_button">Run</button>
        <button className="chat-message_button">Output</button>
      </div>
      <div className="chat-message_right">
        <div className="chat-message_username">
          <h3>Parikshit</h3>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
