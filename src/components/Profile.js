import React, { useState, useEffect } from "react";
import { fetchMe } from "../api";
export const baseURL = "https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT-b";
const Profile = (props) => {
    const {userName, setUserName, token, messages, setMessages} = props;
    
  useEffect(() => {
    async function fetchMe() {
      try {
        const response = await fetch(`${baseURL}/users/me`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        });
        const data = await response.json();
        setMessages(data.data.messages);
        return data;
      } catch (error) {
        console.error(error);
      }
    }
    fetchMe()
  }, []);
  
  return (
    <div class="profile">
     <h1>Welcome {userName}</h1>
     <h3>Messages to me</h3>
     {Object.values(messages).map((message, index) => {
      if (message.fromUser.username !== userName) {
        console.log('from them', message.fromUser)
      return (
        <div className='message'>    
            <div key={index} className='post'>
                <p>From: {message.fromUser.username}</p>
                <p>{message.content}</p>
                <p>Post: {message.post.title}</p>
            </div>
        </div>
        );
      }
      })} 
      <h3>Messages from me</h3>
      {Object.values(messages).map((message, index) => {
      if (message.fromUser.username === userName) {
     
      return (
        <div className='message'>    
            <div key={index} className='post'>
                <p>From: {message.fromUser.username}</p>
                <p className="message-content">{message.content}</p>
                <p>Post: {message.post.title}</p>
            </div>
        </div>
        );
      }
      })} 
    </div>
    
  )
}

export default Profile;