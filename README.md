# Purpose of this branch

## Find the Reducer function USECASE in /components/Login/Login.js

* used for more complex state management 
* object as a state
* is a great choice if you update a state that depends on another state
  ,for example: setEmailIsValid(enteredEmail.includes("@"))

### useReducer structure:

#### const [state, dispatchFunc] = useReducer(reducerFunc, initialState, initFunc);

  * state = latest state snapshot
  * dispatchFunc = update the state snapshot
  * reducerFunc = (prevState, action) => newState 
    // is triggered automatically once an action is dispatched, via dispatchFunc
    // receives the latest state snapshot and should return the new, updated state
  * initialState = the initial state
  * initFunc = a function to set the initial state programatically   


## Find the CLEANUP FUNCTION USECASE for the useEffect hook inside /components/Login/Login.js 

## Find the forwardRef USECASE inside /components/Login/Input.js 