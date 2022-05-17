// get the redux dependecy
const redux = require("redux");

// sets the default value for the first render
let initialState = { counter: 0 };

// it gets the old state and the dispatched action as arguments
const counterReducer = (state = initialState, action) => {
    // and returns the new state object based on action argument
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        }
    } else if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }
    }
    return state;
}

// create the store
// it needs to knnow which reducer (counterReducer) is responsible for cchanging that store
const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
    // gets the lastest state snapshot after it was updated
    const latestState = store.getState();
    console.log(latestState);
}

// subscribes the fucntion to be executed on store dispatch
store.subscribe(counterSubscriber);

// this type can be called from the action argument inside the counterReducer
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });
