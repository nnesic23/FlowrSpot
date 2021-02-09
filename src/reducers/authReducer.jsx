import { SET_CURRENT_USER } from "../actions/actionTypes";

const INITIAL_STATE = {
  isAuthenticated: false,
  user: {},
};

export const authReducer = (state = INITIAL_STATE, action) => {
  if (action.type === SET_CURRENT_USER)
    return {
      isAuthenticated: action.payload.isAuthenticated,
      user: action.payload.user,
    };

  return state;
};
