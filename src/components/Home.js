import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
    const {userName} = props;
    // - Home 
    // - Welcome to stranger things
    // - Logged in as {username}
    // - View Prifile button (renders profile page)
    
    return (
        <div className="home-container">
            <h1>Welcome to Stranger's Things</h1>
            <p>Logged in as {userName}</p>
            {/* <a href="/profile"><button>View Profile</button></a> */}
            <Link to="/profile"><button>View Profile</button></Link>
        </div>
    )
}

export default Home;