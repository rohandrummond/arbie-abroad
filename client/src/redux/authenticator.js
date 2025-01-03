import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  authenticated: false,
  userType: null
}

export const authSlice = createSlice({
  name: 'authenticator',
  initialState,
  reducers: {
    authenticate: (state, action) => {
      state.authenticated = true;
      state.userInfo = action.payload
    },
    deAuthenticate: (state) => {
      state.authenticated = false;
      state.userInfo = null;
    }
  },
})

// Action creators are generated for each case reducer function
export const { authenticate, deAuthenticate } = authSlice.actions

export default authSlice.reducer