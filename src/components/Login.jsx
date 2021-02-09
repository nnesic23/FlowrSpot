import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../actions/userActions";
import { useHistory } from "react-router-dom";

const Login = ({ handleClose }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loggedUser, setLoggedUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoggedUser((loggedUser) => ({ ...loggedUser, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loggedUser);
    dispatch(login(loggedUser));
    console.log("Login successful!!!");
    history.push("/profile");
  };

  return (
    <div className="loginContainer">
      <div className="login">
        <h1 className="heading">Welcome back</h1>
        <form>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="email"
            value={loggedUser.email}
            onChange={handleChange}
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="password"
            value={loggedUser.password}
            onChange={handleChange}
          />
          <input
            type="submit"
            className="submit"
            value="Login to your Account"
            onClick={handleSubmit}
          />
          <p onClick={handleClose}>Close</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
