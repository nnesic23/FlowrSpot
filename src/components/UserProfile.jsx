import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/userActions";

const UserProfile = () => {
  const user = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  console.log(user);
  return (
    <div>
      <h2>Full name</h2>
      <p>First Name</p>
      <p>Last Name</p>
      <p>Date of Birth</p>
      <p>Email address</p>
      <button onClick={dispatch(logout)}>Logout</button>
    </div>
  );
};

export default UserProfile;
