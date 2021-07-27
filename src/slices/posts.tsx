import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CustomerAPI from "../utils/customer-api";



type InitialState = {
  posts: [],
  status: string | null
  userId: string | null
};

export const initialState: InitialState = {
    posts: [],
    status: null,
    userId:null

};



const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postBegin: (state) => ({
      ...state,
    }),
    postSuccess: (state, {payload}) => ({
      ...state,
      posts: payload.data,
    }),
    postFailure: (state, action: PayloadAction<{ errorMessage: string }>) => ({
      ...state,
    }),
    
  },
});

const {
  postBegin,
  postSuccess,
  postFailure,

} = postSlice.actions;

export default postSlice.reducer;


export const fetchPosts = (userId: string) => async (dispatch:any) => {
  dispatch(postBegin())
  try {
    const customerApi = new CustomerAPI();
    const response = await customerApi.getPost(userId);
      dispatch(postSuccess(response))
  }catch (e){
    dispatch(postFailure({ errorMessage: e.message }));
  
  }
}


