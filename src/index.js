import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { AllPosts, Header, AddNewPost, LogIn, Register} from './components/index'; 
const App = () => {
  const baseURL =
    "https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT/posts";
  const [posts, setPosts] = useState("");
  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const response = await fetch(baseURL);
        const data = await response.json();
        setPosts(data.data.posts);
        return posts;
      } catch (error) {
        console.error(error);
      }
    };

    fetchAllPosts();
  }, []);
  console.log(posts)
  return (
    <>
        <Header/>
        {/* <LogIn/> */}
        {/* <AllPosts posts={posts}/>
        <AddNewPost/> */}
        <Register/>
    </>
  );
};
let appElement = document.getElementById("app");
ReactDOM.render(<App />, appElement);
