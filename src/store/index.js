import { configureStore } from '@reduxjs/toolkit'; // __ import hooks

import counterSlice from './counter_slice'; // __ import slices
import authSlice from './auth_slice';

const store = configureStore({ // __ configure the store
    reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }
});


export default store; // __ export default store


// if you have one slice:
//
// reducer:  counterSlice.reducer
// }

// WITHOUT redux-toolkit: | only redux:

// const redux = require("redux");
//
// const counterReducer = (state = intialState, action) => {
//     switch (action.type) {
//         case INCREMENT:
//             return {
//                 counter: state.counter + 1,
//                 showCounter: state.showCounter
//             }
//         case DECREMENT:
//             return {
//                 counter: state.counter - 1,
//                 showCounter: state.showCounter
//             }
//         case INCREASE:
//             return{
//                 counter: state.counter + action.amount,
//                 showCounter: state.showCounter
//             }
//         case TOGGLE:{
//             return{
//                 counter: state.counter,
//                 showCounter: !state.showCounter
//             }
//         }
//         default:
//             return {
//                 counter: state.counter,
//                 showCounter: state.showCounter
//             }
//     }
// }
//
// const store = redux.createStore(counterReducer);