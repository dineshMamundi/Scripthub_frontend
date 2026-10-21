import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",

  initialState,

  reducers: {
    fetchProfileStart: (state) => {
      state.loading = true;
      state.error = null;
    },

    fetchProfileSuccess: (
      state,
      action
    ) => {
      state.loading = false;
      state.profile = action.payload;
    },

    fetchProfileFailure: (
      state,
      action
    ) => {
      state.loading = false;
      state.error = action.payload;
    },

    updateProfileSuccess: (
      state,
      action
    ) => {
      state.profile = action.payload;
    },
  },
});

export const {
  fetchProfileStart,
  fetchProfileSuccess,
  fetchProfileFailure,
  updateProfileSuccess,
} = userSlice.actions;

export default userSlice.reducer;