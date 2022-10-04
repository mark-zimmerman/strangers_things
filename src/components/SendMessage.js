import axios from "axios";
import React from "react";
import { createMessage } from "../api";




const SendMessage = (props) => {
    const {activeMessage, setActiveMessage, setNewMessage, newMessage, token} = props;
    
    async function sendMessage() {
        event.preventDefault();
        const response = await createMessage(newMessage, activeMessage, token);
        console.log(response);
    }
    console.log(activeMessage);
    
    return (
        
        <div className="new-message">
            <div className="post new-message-post">
              <h3>{activeMessage.post.title}</h3>
              <p>{activeMessage.post.description}</p>
              <div className="post-info">  
                <p className="price">
                  <b >Price: </b>{activeMessage.post.price} 
                </p>
                <p>
                  <b>Seller:</b> {activeMessage.post.author.username}
                </p>
                <p>
                  <b>Location:</b> {activeMessage.post.location}
                </p>
              </div>
            </div>
            <h1>New Message</h1>
            <form onSubmit={sendMessage}>
                <textarea onChange={(event)=> {
                    setNewMessage(event.target.value);
                }}></textarea>
                <button className="new-message-btn" typeof="submit">Send</button>
            </form>
        </div>
    )
};

export default SendMessage;