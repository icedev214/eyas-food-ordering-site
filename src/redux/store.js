import { configureStore } from "@reduxjs/toolkit";

import navigationReducer from "redux/slices/navigation";

const store = configureStore({
  reducer: {
    navigation: navigationReducer,
  },
});

export default store;
