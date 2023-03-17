import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  code: "",
  currency: "",
  speedUnit: "",
  distanceUnit: "",
  volumeUnit: "",
  timezone: "",
};

const regionSlice = createSlice({
  name: "region",
  initialState,
  reducers: {
    setRegion(state, action) {
      const region = action.payload;
      state.code = region.code;
      state.currency = region.currency;
      state.speedUnit = region.speedUnit;
      state.distanceUnit = region.distanceUnit;
      state.volumeUnit = region.volumeUnit;
      state.timezone = region.timezone;
    },
  },
});

export const { setRegion } = regionSlice.actions;

export default regionSlice.reducer;
