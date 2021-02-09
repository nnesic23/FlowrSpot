import { SET_CURRENT_USER } from "./actionTypes";
import { baseURL } from "../baseURL";
import axios from "axios";

export const setCurrentUser = (isAuthenticated, user) => {
  return {
    type: SET_CURRENT_USER,
    payload: { isAuthenticated, user },
  };
};

export const signup = (user) => (dispatch) => {
  return axios
    .post(`${baseURL}/api/v1/users/register`, user)
    .then((res) => {
      const token = res.data.auth_token;
      localStorage.setItem("token", token);
      dispatch(
        setCurrentUser({
          isAuthenticated: true,
          user,
        })
      );
    })
    .then((err) => {
      console.log(err);
    });
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch(
    setCurrentUser({
      isAuthenticated: false,
      user: {},
    })
  );
};

export const login = (userData) => (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return axios
    .post(`${baseURL}/api/v1/users/login`, userData, config)
    .then(dispatch(setCurrentUser(true, userData)))
    .catch((err) => {
      console.log(err);
    });
};
