import React, { useEffect } from "react";
import { deletePost, fetchAllPosts, editPost } from "../api";
export const baseURL = "https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT-b";

const MyPost = (props) => {
  const { postId, setPostId, setPosts, posts, userName, token, setMessages, messages, edit, setEdit } = props;
  
  
  useEffect(() => {
    setEdit(false);
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
  
  return (
    <div>
      { !edit ? (Object.values(posts).map((post, index) => {
          
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
                    await deletePost();
                    }}>
                    <button 
                  >Delete</button>
                  </a>
                  <button className="edit-button" onClick={ async () => {
                    setEdit(true);
                  }}>Edit</button>
                </div>
              </div>

            );

          }      
        })) : (
          
          Object.values(posts).map((post, index) => {
            
            let title = '';
            let description = '';
            let price = '';
            let location = '';
            let willDeliver = false;

            const edit = async ()=> {
              try {
                const result = await editPost(postId, token, title, description, price, location, willDeliver);
                console.log(result);
              } catch(error) {
                console.log(error);
              }
            }
            
            if (postId === post._id) {
              console.log(post)
              
              return (
                <div className="add-new-post edit-post">
                  <div key={index} className="post">
                  <h1>Edit Post</h1>
                  
                  <form action="" className="form new-post-form" onSubmit={event=> edit(event)}>
                 <label>Title</label>
                 <input type="text" placeholder={post.title}
                onChange={function(event) {
                    title = event.target.value;
                  }}
                />
                <label>Description</label>
                <textarea  rows="5" cols="33" placeholder={post.description}
                onChange={function(event) {
                    description = event.target.value;
                  }}
                ></textarea>
                <label>Price</label>
                <input type="text" placeholder={post.price}
                onChange={function(event) {
                    price = event.target.value;
                  }}
                />
                <label>Location</label>
                <input type="text" placeholder={post.location}
                onChange={function(event) {
                    location = event.target.value;
                  }}
                />
                <label htmlFor="">Will Deliver?</label>
                <input type="checkbox"/>
                <button>Create</button>
                </form>
              </div>
              </div>
  
              );
  
            }      
          })
        //   <div className="add-new-post edit-post">
        //     <h1>Add New Post</h1>
        //     <form action="" className="form new-post-form" onSubmit={e=> addPost(e)}>
        //         <input type="text" placeholder='Title'
        //         onChange={function(event) {
        //             title = event.target.value;
        //           }}
        //         />
        //         <input type="text" placeholder='Description'
        //         onChange={function(event) {
        //             description = event.target.value;
        //           }}
        //         />
        //         <input type="text" placeholder='Price'
        //         onChange={function(event) {
        //             price = event.target.value;
        //           }}
        //         />
        //         <input type="text" placeholder='Location'
        //         onChange={function(event) {
        //             location = event.target.value;
        //           }}
        //         />
        //         <label htmlFor="">Will Deliver?</label>
        //         <input type="checkbox"/>
        //         <button>Create</button>

        //     </form>
        // </div>
        )}
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
