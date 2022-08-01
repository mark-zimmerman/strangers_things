import React, { useEffect } from "react";
import { deletePost, fetchAllPosts } from "../api";
export const baseURL = "https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT-b";

const MyPost = (props) => {
  const { postId, setPostId, setPosts, posts, userName, token, setMessages, messages } = props;

  useEffect(() => {
    async function fetchMe() {
      try {
        const response = await fetch(`${baseURL}/users/me`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        });
        const data = await response.json();
        setMessages(data.data.messages);
        return data;
      } catch (error) {
        console.error(error);
      }
    }
    fetchMe()
  }, []);
  const deletePost = async () => {
    console.log('were in delete post');
    fetch(`${baseURL}/posts/${postId}`, {
  method: "DELETE",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);
  }
  console.log(messages)
  return (
    <div>
      {Object.values(posts).map((post, index) => {
        if (postId === post._id) {
          console.log(post)
          return (
            <div className="posts">
              <div key={index} className="post">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <p>
                  <b>Price:</b> {post.price}
                </p>
                <p>
                  <b>Seller:</b> {post.author.username}
                </p>
                <p>
                  <b>Location:</b> {post.location}
                </p>
                <a onClick={ async () => {
                  await deletePost()
                  
                  }}>
                  <button 
                >Delete</button>
                </a>
                <button>Edit</button>
              </div>
            </div>

          );

        }      
      })}
      <h1>Messages regarding this post</h1>
      {Object.values(messages).map((message, index) => {
      if (message.post._id === postId) {
      return (
        <div className='posts'>    
            <div key={index} className='post'>
                <p>From: {message.fromUser.username}</p>
                <p>{message.content}</p>
                <p>Post: {message.post.title}</p>
            </div>
        </div>
        );
      }
      })} 

    </div>
  );
};
//We need to call patch and delete for this post
export default MyPost;
