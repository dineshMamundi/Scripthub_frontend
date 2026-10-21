import {
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

interface InterestedScript {
  id: number;
  title: string;
  genre: string;
}

interface DashboardStats {
  scriptsViewed: number;
  interestedScripts: number;
  totalAvailableScripts: number;
}

interface ProducerState {
  interestedScripts: InterestedScript[];
  dashboardStats: DashboardStats | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProducerState = {
  interestedScripts: [],
  dashboardStats: null,
  loading: false,
  error: null,
};

const producerSlice = createSlice({
  name: "producer",
  initialState,

  reducers: {
    setInterestedScripts: (
      state,
      action: PayloadAction<InterestedScript[]>
    ) => {
      state.interestedScripts = action.payload;
    },

    addInterestedScript: (
      state,
      action: PayloadAction<InterestedScript>
    ) => {
      state.interestedScripts.push(action.payload);
    },

    setDashboardStats: (
      state,
      action: PayloadAction<DashboardStats>
    ) => {
      state.dashboardStats = action.payload;
    },

    setLoading: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.loading = action.payload;
    },

    setError: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.error = action.payload;
    },
  },
});

export const {
  setInterestedScripts,
  addInterestedScript,
  setDashboardStats,
  setLoading,
  setError,
} = producerSlice.actions;

export default producerSlice.reducer;