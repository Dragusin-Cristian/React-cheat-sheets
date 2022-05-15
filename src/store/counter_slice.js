import { createSlice } from "@reduxjs/toolkit"; // __ import hooks

const initialCounter = { counter: 0, showCounter: true }; // __ initial state

const counterSlice = createSlice({ // __ make a slice
    name: 'counter',
    initialState: initialCounter,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload.amount;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

export const counterActions = counterSlice.actions; // __ export actions

export default counterSlice;
