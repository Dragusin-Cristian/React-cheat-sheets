import { createSlice } from "@reduxjs/toolkit"; // __ import hooks

const initialAuth = { isLoggedIn: false }; // __ initial state

const authSlice = createSlice({ // __ make a slice
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

export const authActions = authSlice.actions; // __ export actions

export default authSlice;