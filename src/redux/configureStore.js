import { createStore, combineReducers, applyMiddleware } from "redux";
import { createForms } from "react-redux-form";
import { Dishes } from "./dishes";
import { Comments } from "./comments";
import { Promotions } from "./promotions";
import { Leaders } from "./leaders";
import { Auth } from "./auth";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { InitialFeedback } from "./forms";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: Dishes,
      comments: Comments,
      leaders: Leaders,
      promotions: Promotions,
      auth:Auth,
      ...createForms({
        feedback: InitialFeedback
      }),
    }),
    applyMiddleware(thunk) //Passed as enhancers
  );

  return store;
};
