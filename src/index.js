
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  AllPosts,
  Header,
  AddNewPost,
  LogIn,
  Register,
  Profile,
  Home,
} from "./components/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { fetchMe } from "./api";
const App = () => {
  const baseURL =
    "https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT-b/posts";
  const [posts, setPosts] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

 
 
  
 
  
  
  useEffect(() => {
    if (window.localStorage.getItem('token')) {
        setToken(window.localStorage.getItem('token'));
        setLoggedIn(true);
        const getMe = async () => {
          const result = await fetchMe(token, setUserName);
          console.log(result);
          await setUserName(result.data.username);
          // window.localStorage.setItem('username', result.data.username);
        };
        getMe();
    }
  }, [token]);
  
  return (
    <Router>
      <>
        <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
        <Switch>
          <Route exact path="/">
            {loggedIn ? (
              <Home userName={userName} />
            ) : (
              <LogIn setLoggedIn={setLoggedIn} setUserName={setUserName} userName={userName} password={password} setPassword={setPassword}/>
            )}
          </Route>
          <Route exact path="/posts">
            <AllPosts posts={posts} setPosts={setPosts} token={token} />
            {loggedIn && <AddNewPost token={token}/>
            }

          </Route>
          <Route exact path="/register">
            <Register
              setToken={setToken}
              token={token}
              password={password}
              userName={userName}
              setUserName={setUserName}
              setPassword={setPassword}
              setLoggedIn={setLoggedIn}
            />
          </Route>
          
          <Route exact path="/profile">
            <Profile
              userName={userName}
              setUserName={setUserName}
              token={token}
            />
          </Route>
        </Switch>
      </>
    </Router>
  );
};
let appElement = document.getElementById("app");
ReactDOM.render(<App />, appElement);
