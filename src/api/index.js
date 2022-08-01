import React from 'react';


export const baseURL = "https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT-b";

export async function fetchAllPosts(setPosts) {
        try {
          const response = await fetch(`${baseURL}/posts`);
          const data = await response.json();
          // setPosts(data.data.posts);
          // console.log(data);
          return data;
        } catch (error) {
          console.error(error);
        }
        
} 
export async function registerNewUser(userName, password, setToken, token) {
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
        console.log('userName');
        setToken(result.data.token);
        window.localStorage.setItem('token', result.data.token);
        return result.data.token;
      })
      .catch(console.error);
}

export async function fetchMe(token, setMessages) {
    try {
      console.log('inside the fetchMe function');
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
 
export async function logIn(userName, password, setToken, setLoggedIn) {
  console.log(userName);
  console.log(password);
  fetch(`${baseURL}/users/login`, {
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
    console.log(result);
    if (result.success) {
      setLoggedIn(true);
      window.localStorage.setItem('token', result.data.token);
    }
  })
  .catch(console.error);
}

export async function addNewPost(newTitle, newDescription, newPrice, newLocation, newWillDeliver, token) {
  const response = await fetch(`${baseURL}/posts`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      post: {
        title: newTitle,
        description: newDescription,
        price: newPrice,
        willDeliver: newWillDeliver
      }
    })
  });
  const data = response.json();
  console.log(data);
  return data;
}

export async function deletePost(newTitle, newDescription, newPrice, newLocation, newWillDeliver, token) {
  const response = await fetch(`${baseURL}/posts`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      post: {
        title: newTitle,
        description: newDescription,
        price: newPrice,
        willDeliver: newWillDeliver
      }
    })
  });
  const data = response.json();
  console.log(data);
  return data;
}
