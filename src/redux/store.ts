import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice.ts";
import userReducer from "./slices/userSlice.ts";
import scriptReducer from "./slices/scriptSlice.ts";
import producerReducer from "./slices/producerSlice.ts";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer,
    scripts: scriptReducer,
    producer: producerReducer,
  },
});

export default store;