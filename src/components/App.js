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
  SendMessage,
} from "./index";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { fetchMe } from "../api";
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
  const [activeMessage, setActiveMessage] = useState({});
  const [newMessage, setNewMessage] = useState("");
  const [edit, setEdit] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  const [createPost, setCreatePost] = useState(false);
  const breakpoint = 850;
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
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    };
    handleWindowResize();
  }, [token]);
  
  return (
    <Router>
      <>
        <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} setActiveMessage={setActiveMessage}/>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home">
            {loggedIn ? (
              <Home userName={userName}/>
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
            <div className="posts-component-container">
              {!createPost &&
              Object.keys(activeMessage).length === 0 ? (
                <AllPosts
                  setPostId={setPostId}
                  postId={postId}
                  userName={userName}
                  posts={posts}
                  setPosts={setPosts}
                  token={token}
                  setActiveMessage={setActiveMessage}
                  activeMessage={activeMessage}
                  width={width}
                  setWidth={setWidth}
                  createPost={createPost}
                  setCreatePost={setCreatePost}
                />
                
              ) : (
                (!createPost && Object.keys(activeMessage).length > 0 ) && (
                  <SendMessage
                    activeMessage={activeMessage}
                    setActiveMessage={setActiveMessage}
                    newMessage={newMessage}
                    setNewMessage={setNewMessage}
                    token={token}
                  />
                )
                
              )}
              {/* {(loggedIn && !activeMessage && width < 850) || */}
                {(createPost && <AddNewPost token={token} />)}
            </div>
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
              edit={edit}
              setEdit={setEdit}
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

export default App;
