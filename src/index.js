import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { AllPosts, Header, AddNewPost, LogIn, Register, Profile, Home} from './components/index'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const App = () => {
  const baseURL =
    "https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT/posts";
  const [posts, setPosts] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  
  return (
    <Router>
        <>
            <Header/>
            <Switch>
                
                <Route exact path="/">
                    {window.localStorage.getItem('token') ? <Home userName={userName}/> : <LogIn/>}
                </Route>    
                <Route exact path="/posts">
                    <AllPosts posts={posts} setPosts={setPosts}/> 
                </Route>
                <Route exact path="/register">
                    <Register setToken={setToken} token={token}password={password} userName={userName}setUserName={setUserName} setPassword={setPassword}/>
                </Route>
                    {/* <AddNewPost/>  */}
                <Route exact path="/profile">
                    <Profile userName={userName} setUserName={setUserName} token={token}/>
                </Route>
            </Switch>
        </>
    </Router>
  );
};
let appElement = document.getElementById("app");
ReactDOM.render(<App />, appElement);
