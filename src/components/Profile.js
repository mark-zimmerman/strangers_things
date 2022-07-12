import React from 'react';

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
    const {userName, setUserName} = props;
    
    return (
        <div>
            <h1>Welcomed{userName}</h1>
        </div>
    )
}

export default Profile;