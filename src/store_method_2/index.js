import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true }

const counterSlice = createSlice({
    name: 'counter',
    intialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload // or action.payload.amount
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        }
    }
});

const initialAuthState = { isLoggedIn: false };

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isLoggedIn = true
        },
        logout(state) {
            state.isLoggedIn = false
        }
    }
})

// // counterSlice.reducer is basically a reducer with if statements
// const store = createStore(counterSlice.reducer)

// better for multiple reducers
const store = configureStore({
    // a single reducer
    // reducer: counterSlice.reducer

    // creates a map of reducers
    reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }
});

// export the counterActions to be dispatched where needed
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;

