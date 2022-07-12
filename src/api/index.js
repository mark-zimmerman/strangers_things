import React from 'react';


export const baseURL = "https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT";

export async function fetchAllPosts(setPosts, posts) {
        try {
          const response = await fetch(`${baseURL}/posts`);
          const data = await response.json();
          setPosts(data.data.posts);
          return posts;
        } catch (error) {
          console.error(error);
        }
        
} 
export async function registerNewUser(userName, password, setToken) {
    console.log(password);
    console.log(userName);
    fetch(`${baseURL}/users/register`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: userName,
          password: password
        }
      })
    }).then(response => response.json())
      .then(result => {
        setToken(result.data.token);
        window.localStorage.setItem('token', result.data.token);
      })
      .catch(console.error);
}

