import React from 'react';

const Header = () => {
    return (
        <header className='header'>
            <h1 className='logo'>Stranger's Things</h1>
            <nav>
                <ul className='nav-list'>
                    <li>Home</li>
                    <li>Posts</li>
                    <li>Profile</li>
                    <li>Log Out</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;