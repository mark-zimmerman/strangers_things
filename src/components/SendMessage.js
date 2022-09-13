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
        
        <div>
            <h1>New Message</h1>
            <form onSubmit={sendMessage}>
                <input type="text" onChange={(event)=> {
                    setNewMessage(event.target.value);
                }}></input>
                <button typeof="submit">Send</button>
            </form>
        </div>
    )
};

export default SendMessage;