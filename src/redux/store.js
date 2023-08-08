import { configureStore } from "@reduxjs/toolkit";

import navigationReducer from "redux/slices/navigation";
import cookieReducer from "redux/slices/cookie";

const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    cookie: cookieReducer,
  },
});

export default store;
