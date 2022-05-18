import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialAuth = { isLoggedIn: false }; 

// make a slice
const authSlice = createSlice({ 
    name: "auth",
    initialState: initialAuth,
    reducers: {
        login(state) {
            state.isLoggedIn = true
        },
        logout(state) {
            state.isLoggedIn = false
        }
    }
});

// export actions
export const authActions = authSlice.actions; 

export default authSlice;