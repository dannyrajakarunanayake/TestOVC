import { combineReducers } from "redux";

import userReducer from "../slices/users";
import postReducer from "../slices/posts";

export type RootState = ReturnType<typeof rootReducer>;

const appReducer = combineReducers({
    users: userReducer,
    posts: postReducer,
});

const rootReducer = (state: any, action: any) => {
    
    return appReducer(state, action);
  };


export default rootReducer;
