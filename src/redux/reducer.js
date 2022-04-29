//We simplified the reducer by breasking it down into smaller reducers. Made a reducer for each js object i.e dishes,comments,promotions,leaders
// So this file can be deleted 


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


