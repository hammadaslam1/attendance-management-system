import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: null,
  email: null,
  userId: null,
};
const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    signinSuccess: (state, action) => {
      state.username = action.name;
      state.email = action.email;
      state.userId = action.userId;
    },
  },
});

export const { signinSuccess } = userReducer.actions;

export default userReducer.reducer;
