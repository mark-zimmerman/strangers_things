import React, { useState, useEffect } from "react";
import { fetchAllPosts } from "../api";
import { useHistory } from 'react-router-dom';
const baseURL = "https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT-b";

const AllPosts = (props) => {
  const history = useHistory();
  const { posts, setPosts, token, userName, setPostId, postId } = props;
  useEffect(() => {
   
async function fetchAllPosts() {
  try {
    const response = await fetch(`${baseURL}/posts`);
    const data = await response.json();
    setPosts(data.data.posts);
    // console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
  
} 
fetchAllPosts();
  }, []);
  
  useEffect(() => {
    console.log(postId);
  }, [postId, setPostId])
return (
    <div>
      <div className="search-posts">
                <h1>Posts</h1>
                <form action="">
                    <label htmlFor="">Search Posts</label>
                    <input type="text" />
                </form>
                
            </div>
      {Object.values(posts).map((post, index) => {
        return (
        <div className='posts'>    
            <div key={index} className='post'>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <p><b>Price:</b> {post.price}</p>
                <p><b>Seller:</b> {post.author.username}</p>
                <p><b>Location:</b> {post.location}</p>
                {post.author.username !== userName ? <button>Send Message</button> :
                <a onClick={ async () => {
                  await setPostId(post._id);
                  console.log('hi');
                  history.push('/mypost')
                  }}>
                  <button 
                >View Post</button>
                </a>
                }
            </div>
        </div>
        );
      })}
    </div>
  );
};

export default AllPosts;
