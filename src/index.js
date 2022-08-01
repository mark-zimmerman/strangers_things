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
  MyPost,
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
  const [postId, setPostId] = useState("");
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      setToken(window.localStorage.getItem("token"));
      setLoggedIn(true);
      const getMe = async () => {
        console.log("this is the token", token);
        const result = await fetchMe(token, setMessages);
        console.log("this is the use effect in root", result);
        setUserName(result.data.username);
        console.log("this is after setusername");
      };
      getMe();
    }
  }, [token]);

  return (
    <Router>
      <>
        <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Switch>
          <Route exact path="/">
            {loggedIn ? (
              <Home userName={userName} />
            ) : (
              <LogIn
                setLoggedIn={setLoggedIn}
                setUserName={setUserName}
                userName={userName}
                password={password}
                setPassword={setPassword}
              />
            )}
          </Route>
          <Route exact path="/posts">
            <AllPosts
              setPostId={setPostId}
              postId={postId}
              userName={userName}
              posts={posts}
              setPosts={setPosts}
              token={token}
            />
            {loggedIn && <AddNewPost token={token} />}
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
          <Route exact path="/mypost">
            <MyPost
              postId={postId}
              setPostId={setPostId}
              setPosts={setPosts}
              posts={posts}
              userName={userName}
              token={token}
              setMessages={setMessages}
              messages={messages}
            />
          </Route>
          <Route exact path="/profile">
            <Profile
              userName={userName}
              setUserName={setUserName}
              token={token}
              setMessages={setMessages}
              messages={messages}
            />
          </Route>
        </Switch>
      </>
    </Router>
  );
};
let appElement = document.getElementById("app");
ReactDOM.render(<App />, appElement);
