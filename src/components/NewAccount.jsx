import React, { useState } from "react";
import { signup } from "../actions/userActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const NewAccount = ({ handleClose }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    date_of_birth: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(user));
    history.push("/login");
  };

  return (
    <div className="formContainer">
      <h2>Create an Account</h2>
      <form>
        <input
          type="text"
          placeholder="First name"
          className="name"
          name="first_name"
          value={user.first_name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Last name"
          className="name lastName"
          name="last_name"
          value={user.last_name}
          onChange={handleChange}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Date of birth"
          className="DoB wider"
          name="date_of_birth"
          value={user.date_of_birth}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email address"
          className="email wider"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="password wider"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <input
          type="submit"
          name="Create Account"
          className="submit"
          value="Create Account"
          onClick={handleSubmit}
        />
        <p onClick={handleClose}>I do not want to register</p>
      </form>
    </div>
  );
};

export default NewAccount;
