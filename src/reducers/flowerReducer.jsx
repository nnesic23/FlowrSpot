import {
  FETCH_FLOWERS_BEGIN,
  FETCH_FLOWERS_ERROR,
  FETCH_FLOWERS_SUCCESS,
} from "../actions/actionTypes";

const initalState = {
  flowers: [],
  loading: false,
  error: null,
};

export const flowerReducer = (state = initalState, action) => {
  if (action.type === FETCH_FLOWERS_BEGIN) {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }

  if (action.type === FETCH_FLOWERS_SUCCESS) {
    return {
      ...state,
      loading: false,
      flowers: action.payload.flowers,
    };
  }

  if (action.type === FETCH_FLOWERS_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.payload.error,
      flowers: [],
    };
  }

  return state;
};
