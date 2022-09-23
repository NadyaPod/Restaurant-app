import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../utils";

const signInSlice = createSlice({
  name: "signIn",
  initialState: {
    login: "",
    passw: "",
    isLoginEmpty: false,
    isPasswEmpty: false,
    auth: false,
    notYetLogin: true,
    showSignIn: true,
  },
  reducers: {
    updateLogin(state, action) {
      const login = action.payload;
      state.login = login;
      state.isLoginEmpty = login.length === 0;
    },
    updatePassw(state, action) {
      const passw = action.payload;
      state.passw = passw;
      state.isPasswEmpty = passw.length === 0;
    },
    signIn(state, action) {
      state.notYetLogin = false;
      state.isLoginEmpty = state.login.length === 0;
      state.isPasswEmpty = state.passw.length === 0;

      if (!state.isLoginEmpty && !state.isPasswEmpty) {
        if (auth(state.login, state.passw)) {
          state.notYetLogin = true;
          state.auth = true;
          state.login = "";
          state.passw = "";
        } else {
          state.auth = false;
          state.passw = "";
          state.isPasswEmpty = false;
        }
      }
    },
    signOut(state, action) {
      state.auth = false;
    },
    resetLoginStatus(state, action) {
      state.notYetLogin = true;
    },
    resetState(state, action) {
      state.login = "";
      state.passw = "";
      state.isLoginEmpty = false;
      state.isPasswEmpty = false;
    },
    showSignIn(state, action) {
      state.showSignIn = action.payload;
    }
  }
});

export const {updateLogin, updatePassw, signIn, signOut, resetLoginStatus, resetState, showSignIn} = signInSlice.actions;
export default signInSlice.reducer;