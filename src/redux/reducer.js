import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";

export const initialState = {
  dishes: DISHES,
  comments: COMMENTS,
  promotions: PROMOTIONS,
  leaders: LEADERS,
};

//The initial state will be undefined at first. We keep the default value of state(parameter) as initialState to avoid any issues further  
export const Reducer = (state = initialState,action) =>{
    return state;
};
