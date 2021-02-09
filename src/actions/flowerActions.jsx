import axios from "axios";
import { baseURL } from "../baseURL";

import {
  FETCH_FLOWERS_BEGIN,
  FETCH_FLOWERS_ERROR,
  FETCH_FLOWERS_SUCCESS,
} from "./actionTypes";

export const fetchFlowersBegin = () => ({
  type: FETCH_FLOWERS_BEGIN,
});

export const fetchFlowersSuccess = (flowers) => ({
  type: FETCH_FLOWERS_SUCCESS,
  payload: { flowers },
});

export const fetchFlowersError = (error) => ({
  type: FETCH_FLOWERS_ERROR,
  payload: { error },
});

export const getFlowers = () => {
  return (dispatch) => {
    dispatch(fetchFlowersBegin());
    axios
      .get(`${baseURL}/api/v1/flowers/random`)
      .then((res) => {
        const flowers = res.data.flowers;
        dispatch(fetchFlowersSuccess(flowers));
        return flowers;
      })
      .catch((err) => {
        dispatch(fetchFlowersError(err));
      });
  };
};
