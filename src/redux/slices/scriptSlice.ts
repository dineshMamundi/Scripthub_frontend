import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Script {
  id: number;
  title: string;
  genre: string;
  synopsis: string;
}

interface ScriptState {
  scripts: Script[];
  currentScript: Script | null;
  loading: boolean;
  error: string | null;
}

const initialState: ScriptState = {
  scripts: [],
  currentScript: null,
  loading: false,
  error: null,
};

const scriptSlice = createSlice({
  name: "scripts",
  initialState,

  reducers: {
    addScript: (
      state,
      action: PayloadAction<Script>
    ) => {
      state.scripts.push(action.payload);
    },
  },
});

export const { addScript } =
  scriptSlice.actions;

export default scriptSlice.reducer;