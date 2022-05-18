import { createStore } from 'redux';

const initialStateCounter = { counter: 0, showCounter: true };

// create the reducer function
const counterReducer = (state = initialStateCounter, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        }
    }
    else if (action.type  === 'increase'){
        return{
            counter: state.action + action.payload,
            showCounter: state.showCounter
        }
    }else if (action.type === 'togleCounter'){
        return{
            counter: state.counter,
            showCounter: !state.showCounter
        }
    }
    return state;
}

// create the store
const store = createStore(counterReducer);

export default store;