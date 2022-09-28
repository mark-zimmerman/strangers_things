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
    
    return (
        
        <div className="new-message">
            <h1>New Message</h1>
            <form onSubmit={sendMessage}>
                {/* <input className="large-text-input" type="text" onChange={(event)=> {
                    setNewMessage(event.target.value);
                }}></input> */}
                <textarea onChange={(event)=> {
                    setNewMessage(event.target.value);
                }}></textarea>
                <button className="new-message-btn" typeof="submit">Send</button>
            </form>
        </div>
    )
};

export default SendMessage;