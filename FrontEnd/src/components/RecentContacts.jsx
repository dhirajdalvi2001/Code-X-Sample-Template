import React, { useEffect } from 'react';
import axios from 'axios'

function RecentContacts() {
  const fetchChats = async () => {
    const data = await axios.get('/api/chat/').catch((error) => {
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
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
    console.log(data);
  };
  useEffect(() => {
    fetchChats();
  }, []) 
  return (
    <div className='recent-contacts'>
    </div>
  )
}

export default RecentContacts