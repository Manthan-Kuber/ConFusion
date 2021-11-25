//This reducer will receive action(in actiontypes) from the redux store. Therefore we import
import * as ActionTypes from "./ActionTypes";

export const Comments = (state = { errMess: null, comments: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        comments: action.payload,
      };
    case ActionTypes.COMMENTS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        comments: [],
      };
    case ActionTypes.ADD_COMMENT:
      var comment = action.payload;

      //All state updates must be done immutably so we use concat() function to create a new object of the state(copy of the state) and push the new array values into the state array.In this way we modify the state values immutably as Redux expects
      console.log("Comment: ", comment);
      return { ...state, comments: state.comments.concat(comment) };
    //Also this will only add values in array temporarily if not using json server

    default:
      return state;
  }
};
