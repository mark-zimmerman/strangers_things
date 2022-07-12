import React from 'react';

const Home = (props) => {
    const {userName} = props;
    // - Home 
    // - Welcome to stranger things
    // - Logged in as {username}
    // - View Prifile button (renders profile page)
    
    return (
        <div>
            <h1>Welcome to Stranger's Things</h1>
            <p>Logged in as {userName}</p>
            <a href="/profile"><button>View Profile</button></a>
        </div>
    )
}

export default Home;