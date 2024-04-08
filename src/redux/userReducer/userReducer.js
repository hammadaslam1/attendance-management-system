import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};
const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    signinSuccess: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { signinSuccess } = userReducer.actions;

export default userReducer.reducer;
