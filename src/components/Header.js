import React from 'react';

const Header = () => {
    return (
        <header className='header'>
            <h1 className='logo'>Stranger's Things</h1>
            <nav>
                <ul className='nav-list'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/posts">Posts</a></li>
                    <li><a href="/profile">Profile</a></li>
                    <li><a href="/register">Log Out</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;