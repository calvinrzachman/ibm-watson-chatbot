import * as actionTypes from "./actionTypes";
import axios from "axios";

export const addMessage = (message, isUser) => {
  return {
    type: actionTypes.ADD_MESSAGE,
    payload: {
      message,
      isUser
    }
  };
};

export const fetchMessageFailed = error => {
  return {
    type: actionTypes.FETCH_MESSAGE_FAILED,
    payload: {
      error
    }
  };
};

export const fetchMessage = () => {
  // Redux Thunk allows us to return a function in place of the typical action object
  return async (dispatch, getState) => {
    // Takes dispatch function - allows us to return as many actions as we want
    console.log("[INSIDE fetchMessage]");
    try {
      console.log("[INSIDE fetchMessage -try]");
      const response = await axios.get("http://localhost:5090/");
      // The response should have the message available under response.data
      // console.log(getState().converse.lastMessage.message);
      if (response.data !== getState().converse.lastMessage.message)
        dispatch(addMessage(response.data, false));
    } catch (err) {
      console.log("[INSIDE fetchMessage -catch]");
      dispatch(fetchMessageFailed());
    }
  };
};
