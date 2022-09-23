import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basketSlice";
import signInReducer from "./signInSlice";
import signUpReducer from "./signUpSlice";

export default configureStore({
  reducer: {
    basket: basketReducer,
    signInForm: signInReducer,
    signUpForm: signUpReducer,
  }
});