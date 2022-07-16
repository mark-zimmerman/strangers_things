import React from 'react';


export const baseURL = "https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT";

export async function fetchAllPosts(setPosts, posts) {
        try {
          const response = await fetch(`${baseURL}/posts`);
          const data = await response.json();
          setPosts(data.data.posts);
          console.log(data)
          return posts;
        } catch (error) {
          console.error(error);
        }
        
} 
export async function registerNewUser(userName, password, setToken, token) {
    console.log('hi');
    console.log(userName)
    console.log(password)
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
        console.log(';lakjsdf;lakjsdf', result)
        setToken(result.data.token);
        window.localStorage.setItem('token', result.data.token);
        return result.data.token;
      })
      .catch(console.error);
}

export async function fetchMe(token, setUserName) {
  console.log(token)
  fetch(`${baseURL}/users/me`, {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
}).then(response => response.json())
  .then(result => {
    console.log(result.data.username);
    setUserName(result.data.username);
    window.localStorage.setItem('username', result.data.username);
    return result.data;
  })
  .catch(console.error);
}