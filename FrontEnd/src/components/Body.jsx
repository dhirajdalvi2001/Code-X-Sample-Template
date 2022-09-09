import React, { useEffect, useState } from "react";
import axios from "axios";
import RecentContacts from "./RecentContacts";
import ChatBox from "./ChatBox";
import OnlineContacts from "./OnlineContacts";
import Navbar from "./Navbar";
import { FiSearch } from "react-icons/fi";

function Body() {
  const [chats, setChats] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const fetchChats = async () => {
    const data = await axios.get("/api/chat/").catch((error) => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log("errorResponse");
        console.log("error.response.data : " + error.response.data);
        console.log("error.response.status : " + error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log("errorRequest");
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
    setChats(data.data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  const handleSearchValue = () => {
    console.log(e);
  };

  const handleSearch = (e) => {
    const searchedTerm = e.target.value;
    if (e.key === "Enter") {
      e.preventDefault();
      chats.find((e) => {
        if (e.chatName == searchedTerm) {
          console.log(true);
        } else {
          console.log("Not Found");
        }
      });
      console.log("Enter pressed! ");
    }
    console.log(searchedTerm);
    // TO BE CONTINUED
  };

  return (
    <div>
      <Navbar />
      <div className="body">
        <div className="body_navbar">
          <div className="body_navbar_left">
            <FiSearch className="body_navbar_search-logo" />
            <form onKeyPress={handleSearch}>
              <input
                className="body_navbar_search-box"
                type="text"
                placeholder="Search contact or chat"
              />
            </form>
          </div>
          <div className="body_navbar_middle">Contact Name</div>
          <div className="body_navbar_right">10</div>
        </div>
        <div className="body_container">
          <RecentContacts />
          <ChatBox />
          <OnlineContacts />
        </div>
      </div>
    </div>
  );
}

export default Body;
