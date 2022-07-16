
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
    "https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT/posts";
  const [posts, setPosts] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

 
 
  
 
  
  
  useEffect(() => {
    if (localStorage.token) {
        setToken(localStorage.token);
        setLoggedIn(true);
        setUserName(window.localStorage.getItem('username'));
    }
  }, []);
  console.log(token);
  
  useEffect(() => {
    if (token) {
      const getMe = async () => {
        const data = await fetchMe(token, setUserName);
        console.log(data);
        
      };
      getMe();
    } 
  }, [loggedIn]);
  console.log(userName);
  console.log(loggedIn);

  //   useEffect(() => {
  //       const getUserName = async () => {
  //         if (!userName) {
  //                 console.log(`this is our userName in LS: ${window.localStorage.getItem('username')}` );
  //                 setUserName(window.localStorage.getItem('username'));

  //             } else {
  //                 console.log(`we have a username: ${userName}`);
  //             }
  //       }
  //       getUserName();
  //   }, [])

  return (
    <Router>
      <>
        <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
        <Switch>
          <Route exact path="/">
            {window.localStorage.getItem("token") ? (
              <Home userName={userName} />
            ) : (
              <LogIn setLoggedIn={setLoggedIn} setUserName={setUserName} userName={userName} password={password} setPassword={setPassword}/>
            )}
          </Route>
          <Route exact path="/posts">
            <AllPosts posts={posts} setPosts={setPosts} token={token} />
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
          <AddNewPost exact path="/add-new-post" />
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
