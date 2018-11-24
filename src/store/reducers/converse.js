// Authorization Reducer
import * as actionTypes from "../actions/actionTypes";

/*
  Specify a message as follows

  message = {
    message: "",
    isUser: boolean,
  }

*/

const initialState = {
  conversation: [],
  lastMessage: {},
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_MESSAGE:
      const newMessageObject = action.payload;
      const updatedArray = state.conversation.concat(newMessageObject);
      return {
        ...state,
        conversation: updatedArray,
        lastMessage: newMessageObject
      };
    case actionTypes.FETCH_MESSAGE_FAILED:
      return {
        ...state,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default reducer;
