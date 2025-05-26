import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
};

const storeSlices = createSlice({
  name: "Courses",
  initialState,
  reducers: {
    addCourses: (state, action) => {
      const { id, name, desc, image, pdf, price } = action.payload;
      state.items.push({ id, name, desc, image, pdf, price });
      state.totalPrice += Number(price);
    },
    removeCourses: (state, action) => {
      const itemToRemove = state.items.find(
        (item) => item.id === action.payload
      );
      if (itemToRemove) {
        state.totalPrice -= Number(itemToRemove.price);
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    },
  },
});

export const { addCourses, removeCourses } = storeSlices.actions;
export default storeSlices.reducer;
