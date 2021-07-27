import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CustomerAPI from "../utils/customer-api";




type InitialState = {
  lists: [],
  status: string | null
};

export const initialState: InitialState = {
    lists: [],
    status: null
};



const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userBegin: (state) => ({
      ...state,
    }),
    userSuccess: (state, { payload }) => ({
      ...state,
      lists: payload.data,
    
    }),
    
    userFailure: (state) => ({
      ...state,
    }),
    
  },
});

const {
  userBegin,
  userSuccess,
  userFailure,

} = userSlice.actions;

export default userSlice.reducer;


export const fetchUsers = () => async (dispatch:any) => {
  dispatch(userBegin())
  try {
    const customerApi = new CustomerAPI();
    const response = await CustomerAPI.getUser();
      dispatch(userSuccess(response))
  }catch (e){
    dispatch(userFailure());
  
  }
}

