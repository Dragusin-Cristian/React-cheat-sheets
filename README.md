# Purpose of this branch
## Why use Redux instead of Context API?
### For more complex context management

### $ npm install redux react-redux

## Steps:
* create the store (inside ./store_method_1/index.js)
* * create the reducer function 
* * create the store
* Wrap the App component inside the Provider component (inside index.js) - works just like the ContextProvider
* useSelector for getting the state from the store and useDispatch for getting the actions form the store



# to dos:

state, actions, action payload, multiple state    => 
The state is overwritten, NEVER CHANGED (mutated)

=> npm i @reduxjs/toolkit and slices (method 2)

you can 'mutate' the state, because immer will overwrite the state
slice => multiple slices

---

## credits for the Udemy course:  
### https://www.udemy.com/course/react-the-complete-guide-incl-redux/