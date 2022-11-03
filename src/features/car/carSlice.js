//import {createSlice} from '@reduxjs/toolkit'
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cars: [
    "Model S",
    "Model 3",
    "Model X",
    "Model Y",
    "Soolar Roof",
    "Soolar Panel",
  ],
};
const carSlice = createSlice({
  name: "car",
  initialState: { cars: initialState },
  reducers: {
    selectCars: (state, action) => {
      state.cars = action.payload;
    },
  },
});
export const { selectCars } = carSlice.actions;
export default carSlice.reducer;
