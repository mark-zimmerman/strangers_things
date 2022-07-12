import React, { useState, useEffect } from "react";
import { fetchAllPosts } from "../api";


const AllPosts = (props) => {
  const { posts, setPosts } = props;
  useEffect(() => {
    const response = fetchAllPosts(setPosts, posts);
    setPosts(response);
  }, []);


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
                <button>Send Message</button>
            </div>
        </div>
        );
      })}
    </div>
  );
};

export default AllPosts;
