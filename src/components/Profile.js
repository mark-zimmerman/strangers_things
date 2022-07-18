import React, { useState, useEffect } from "react";
import { fetchMe } from "../api";
// - Profile Page 
//     - Welcome {username}
//     - Messages to me
//         - Array of messages
//         - From: {sender}
//         - message.. 'im interested in.. blah blah'
//         - View My Post: {title of post}. 
//     ((Renders the Individual Post Page))
//     - Messages from me
//         - Array of messages
//         - (Sent By Me)
//         - 'whatever the message was'
//         - Message Again: {title of post} (renders the send message page)
const Profile = (props) => {
    const {userName, setUserName, token} = props;
    const [messages, setMessages] = useState(['hi']);
  useEffect(() => {
    const response = fetchMe(token);
    // setMessages(response.data.messages);
  }, []);
    console.log(messages);
    console.log(userName);
    return (
        <div>
            <h1>Welcome {userName}</h1>

        </div>
    )
}

export default Profile;