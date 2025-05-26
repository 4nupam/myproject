import { configureStore } from "@reduxjs/toolkit";
import storeSlices from "./ConfigureSlices";

export const store = configureStore({
  reducer: {
    stores: storeSlices,
  },
});
