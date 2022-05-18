// HOOKS
import { configureStore } from '@reduxjs/toolkit';

// IMPORT THE SLICES
import counterSlice from './counter_slice'; 
import authSlice from './auth_slice';

// CONFIGURE THE STORE
const store = configureStore({ 
    reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }
});

// EXPORT DEFAULT THE STORE
export default store; 


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
//         // increment by 1: 
//             return {
//                 counter: state.counter + 1,
//                 showCounter: state.showCounter
//             }
//         case DECREMENT:
//          // decrement with 1:
//             return {
//                 counter: state.counter - 1,
//                 showCounter: state.showCounter
//             }
//         case INCREASE:
//          // increase with an amout:
//             return{
//                 counter: state.counter + action.amount,
//                 showCounter: state.showCounter
//             }
//         case TOGGLE:{
//          // toggle visibility:
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