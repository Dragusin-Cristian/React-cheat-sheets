// Hooks
import { createSlice } from "@reduxjs/toolkit"; 

// Initial state:
const initialCounter = { counter: 0, showCounter: true }; 

// Make the slice
const counterSlice = createSlice({ 
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

// Export the actions
export const counterActions = counterSlice.actions;

// Export default the counterSlice
export default counterSlice;
