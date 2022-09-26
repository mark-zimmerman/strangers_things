import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = (props) => {
  const {loggedIn, setLoggedIn, setActiveMessage, setCreatePost, createPost} = props;
  function logOut() {
    window.localStorage.clear();
    setLoggedIn(false);
  }
  console.log('createPost', createPost)
  console.log('activeMessage', setActiveMessage)
  console.log('setCreatePost', setCreatePost)
  console.log(props)
  return (
    <header className="header">
      <h1 className="logo title-font">Stranger's Things</h1>
      <nav>
        <ul className="nav-list">
          <li>
            <NavLink to="/home" activeClassName="active" onClick={()=>setActiveMessage({})}>Home</NavLink>
          </li>
          <li>
          <NavLink to="/posts" activeClassName="active" onClick={()=>setCreatePost(false)}>Posts</NavLink>
          {/* <a href="/posts">Posts</a> */}
          </li>
          {loggedIn && (
            <li>
              <NavLink to="/profile" activeClassName="active" onClick={()=>setActiveMessage({})}>Profile</NavLink>
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
              <Link to="/" onClick={()=>setActiveMessage({})}>Log In</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
