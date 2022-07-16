import React from 'react';

const Header = ({loggedIn, setLoggedIn}) => {
    function logOut() {
        delete localStorage.token;
        delete localStorage.username;
        setLoggedIn(false); 
      }
    
    return (
        <header className='header'>
            <h1 className='logo'>Stranger's Things</h1>
            <nav>
                <ul className='nav-list'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/posts">Posts</a></li>
                    { loggedIn && <li><a href="/profile">Profile</a></li> 
                    }
                    { loggedIn ? 
                        <li><a onClick={() => {logOut()}}>Log Out</a></li>
                        : <li><a href="/">Log In</a></li>
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header;