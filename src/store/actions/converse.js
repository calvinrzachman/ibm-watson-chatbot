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

export const getResponse = userInput => {
  // Redux Thunk allows us to return a function in place of the typical action object
  return async (dispatch, getState) => {
    // Takes dispatch function - allows us to return as many actions as we want
    try {
      const watsonsResponse = await axios.put("http://localhost:5090/", {
        userInput
      });
      const textResponse = watsonsResponse.data.output.text[0];
      if (textResponse !== getState().converse.lastMessage.message)
        dispatch(addMessage(textResponse, false));
    } catch (err) {
      dispatch(fetchMessageFailed());
    }
  };
};
