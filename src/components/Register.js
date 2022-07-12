import React, { useEffect }from "react";
import { registerNewUser, sayHi } from "../api";
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
  const handleUserChange = (event) => {
    setUserName(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  // const handleConPasswordChange = (event) => {
  //     setConPassword(event.target.value);
  // }
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    const usernameValue = document.getElementById("usernameInput").value;
    const passwordValue = document.getElementById("passwordInput").value;
    await setUserName(usernameValue);
    await setPassword(passwordValue);
    try {
      let response = await registerNewUser(userName, password, setToken);
      setTokenLocalStorage();
    } catch (error) {
      console.error(error);
    }
  };
  const setTokenLocalStorage = () => {
    window.localStorage.setItem("token", token);
  };
  
  useEffect(() => {
    console.log(userName, password);
    const callRegisterNewUser = async () => {
    try {
        let response = await registerNewUser(userName, password, setToken);
        setTokenLocalStorage();
      } catch (error) {
        console.error(error);
      }
    }
  }, [userName, password])

  return (
    <div className="log-in-container">
      <h1 className="page-title">Register</h1>
      <form action="" className="form" onSubmit={handleSubmit}>
        <input
          type="text"
        //   minLength="8"
          name="username"
          id="usernameInput"
        //   onChange={handleUserChange}
          required
        />
        <input
          type="text"
        //   minLength="8"
          name="password"
          id="passwordInput"
        //   onChange={handlePasswordChange}
          required
        />
        {/* <input type="text" minLength="8" onChange={handleConPasswordChange}required/> */}
        <button>Register</button>
      </form>
    </div>
  );
};
export default Register;
