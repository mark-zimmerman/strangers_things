import React, { useState, useEffect } from "react";
import { fetchAllPosts } from "../api";
import axios from "axios";
import { useHistory } from "react-router-dom";
// const baseURL =
//   "https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT-b";

const AllPosts = (props) => {
  const history = useHistory();
  const { posts, setPosts, token, userName, setPostId, postId, setActiveMessage, activeMessage, width, setWidth, createPost, setCreatePost } = props;
  const [searchTerm, setSearchTerm] = useState('');
  const breakpoint = 850;
  
  useEffect(() => {
    async function getAllPosts() {
      const allPosts = await fetchAllPosts();
      setPosts(allPosts);
      setActiveMessage({});
      console.log(posts);
    }
    getAllPosts();
    
  }, []);
  useEffect(()=> {
    console.log("activeMessage", activeMessage);
    console.log('createPost', createPost);
  })

  useEffect(() => {
    console.log(postId);
  }, [postId, setPostId]);
    
  return (
    <div id="posts">
      <div className="search-posts">
        <h1>Posts</h1>
        <form action="">
          <input type="text" placeholder="Search Posts" onChange={(event) => setSearchTerm(event.target.value)}/>
        </form>
        <button className="btn" onClick={(event)=> {
          setCreatePost(true);
        }}>+ Add New Post</button>
      </div>
      {Object.values(posts).filter((post)=> {
        if (searchTerm == "") {
          return post;
        } else if (post.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          return post;
        }
      }).map((post, index) => {
        return (
          <div className="posts">
            <div key={index} className="post">
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <div className="post-info">  
                <p className="price">
                  <b >Price: </b>{post.price} 
                </p>
                <p>
                  <b>Seller:</b> {post.author.username}
                </p>
                <p>
                  <b>Location:</b> {post.location}
                </p>
              </div>
              {post.author.username !== userName ? (
                <button className="post-btn btn" onClick={(event) => {
                  setActiveMessage({
                    post: post,
                  })
                  console.log('this is activeMessage', activeMessage);
                }}>Send Message</button>
              ) : (
                <a
                  onClick={async () => {
                    await setPostId(post._id);
                    console.log("hi");
                    history.push("/mypost");
                  }}
                >
                  <button className="post-btn btn">View Post</button>
                </a>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllPosts;
