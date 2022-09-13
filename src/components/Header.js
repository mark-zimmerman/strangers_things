import React from "react";

const Header = ({ loggedIn, setLoggedIn }) => {
  function logOut() {
    window.localStorage.clear();
    setLoggedIn(false);
  }

  return (
    <header className="header">
      <h1 className="logo title-font">Stranger's Things</h1>
      <nav>
        <ul className="nav-list">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/posts">Posts</a>
          </li>
          {loggedIn && (
            <li>
              <a href="/profile">Profile</a>
            </li>
          )}
          {loggedIn ? (
            <li>
              <a
                onClick={() => {
                  logOut();
                }}
              >
                Log Out
              </a>
            </li>
          ) : (
            <li>
              <a href="/">Log In</a>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
