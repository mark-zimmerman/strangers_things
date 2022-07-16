import React, { useEffect } from "react";
import { registerNewUser } from "../api";
//Check if the form is filled out correctly
//We need to make an AJAX call to the backend (create?)
//We need to get a token and store it in state maybe local storage
//

const Register = (props) => {
  const {
    userName,
    password,
    setUserName,
    setPassword,
    setConPassword,
    token,
    setToken,
  } = props;


  const fetchRegUser = (e) => {
    e.preventDefault();
    try {
      registerNewUser(userName, password, setToken, token);

    } catch (error) {
      console.error(error);
    }
  };
  
  
  
  console.log(token);
  return (
    <div className="log-in-container">
      <h1 className="page-title">Register</h1>
      <form action="" className="form" onSubmit={e=> fetchRegUser(e)}>
        <input
          type="text"
          placeholder="Username"
          onChange={function(event) {
            setUserName(event.target.value)
            window.localStorage.setItem('username', event.target.value);
          }}
          name="username"
          id="usernameInput"
          required
        />
        <input
          type="text"
          placeholder="Password"
          onChange={function(event) {
            // window.localStorage.setItem('password', event.target.value);
            setPassword(event.target.value);
          }}
          name="password"
          id="passwordInput"
          required
        />
        {/* <input type="text" minLength="8"required/> */}
        <button>Register</button>
      </form>
    </div>
  );
};
export default Register;
