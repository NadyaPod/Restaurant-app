import { createSlice } from "@reduxjs/toolkit";

export const InputState = {
  Empty: "Empty",
  Invalid: "Invalid",
  Valid: "Valid",
}

const signUpSlice = createSlice({
  name: "signUp",
  initialState: {
    login: "",
    passw: "",
    loginState: InputState.Empty,
    passwState: InputState.Empty,
    notYetRegistered: true,
  },
  reducers: {
    updateLogin(state, action) {
      const login = action.payload;
      state.login = login;
      if (login.length === 0) {
        state.loginState = InputState.Empty;
      } else if (login.length > 4) {
        state.loginState = InputState.Valid;
      } else {
        state.loginState = InputState.Invalid;
      }
    },
    updatePassw(state, action) {
      const passw = action.payload;
      state.passw = passw;
      if (passw.length === 0) {
        state.passwState = InputState.Empty;
      } else if (passw.length > 4) {
        state.passwState = InputState.Valid;
      } else {
        state.passwState = InputState.Invalid;
      }
    },
    setRegisteredStatus(state, action) {
      state.notYetRegistered = action.payload;

    },
    resetState(state, action) {
      state.login = "";
      state.passw = "";
      state.loginState = InputState.Empty;
      state.passwState = InputState.Empty;
      state.notYetRegistered = true;
    },
  }
});

export const {updateLogin, updatePassw, resetState, setRegisteredStatus} = signUpSlice.actions;
export default signUpSlice.reducer;