import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = ({ loggedIn, setLoggedIn, setActiveMessage}) => {
  // const {setActiveMessage} = props;
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
            <NavLink to="/home" activeClassName="active">Home</NavLink>
          </li>
          <li>
          <NavLink to="/posts" activeClassName="active">Posts</NavLink>
          {/* <a href="/posts">Posts</a> */}
            
          </li>
          {loggedIn && (
            <li>
              <NavLink to="/profile" activeClassName="active">Profile</NavLink>
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
              {/* <a href="/">Log In</a> */}
              <Link to="/">Log In</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
