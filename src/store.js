import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/authSlice";
import kycReducer from "./redux/kycSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    kyc: kycReducer,
  },
});
