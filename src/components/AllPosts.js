import React, { useState } from "react";


const AllPosts = (props) => {
  const { posts } = props;
  return (
    <div>
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
