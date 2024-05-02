import { ACTIONTYPE } from "./actiontype";

export const addcart = (payload) => {
  return {
    type: ACTIONTYPE.ADDCART,
    payload: payload,
  };
};

export const increment = (payload) => {
  return {
    type: ACTIONTYPE.INCREMENT,
    payload: payload,
  };
};

export const decrement = (payload) => {
  return {
    type: ACTIONTYPE.DECREMENT,
    payload: payload,
  };
};

export const removecart = (payload) => {
  return {
    type: "REMOVECART",
    payload: payload,
  };
};
