// src/redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Get initial state from localStorage, if it exists
const initialAuthState = {
  isAuthenticated: localStorage.getItem('isAuthenticated') === 'true' || false, // Retrieve isAuthenticated from localStorage
  user: JSON.parse(localStorage.getItem('user')) || null, // Retrieve user data from localStorage
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState, // Use the persisted state as initial state
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      // Save authentication state to localStorage
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', JSON.stringify(action.payload)); // Store user data
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      // Clear authentication state from localStorage
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('user');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

// // src/redux/authSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     isAuthenticated: false,
//     user: null,
//   },
//   reducers: {
//     login: (state, action) => {
//       state.isAuthenticated = true;
//       state.user = action.payload;
//       // Optionally store token in localStorage
//       localStorage.setItem('token', action.payload.token); // If the token is part of the payload
//     },
//     logout: (state) => {
//       state.isAuthenticated = false;
//       state.user = null;
//       // Clear token from localStorage
//       localStorage.removeItem('token');
//     },
//   },
// });

// export const { login, logout } = authSlice.actions;
// export default authSlice.reducer;

