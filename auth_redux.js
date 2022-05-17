const redux = require('redux');

const initialState = {name: null, pass: null, isLoggedIn: false};

const authReducer = (state = initialState, action) => {
    if(action.type === 'login'){
        if(state.name !== null && state.pass !== null){
            return{
                ...state,
                isLoggedIn: true
            }
        }else{
            return state
        }
    }else if(action.type === 'signup'){
        return{
            name: action.name,
            pass: action.pass,
            isLoggedIn: false 
        }
    }
    return state;
}

const store = redux.createStore(authReducer);

store.subscribe(() => {
    const latestState = store.getState();
    console.log(latestState);
});


store.dispatch({type: 'signup', name: "George", pass: "123"});
store.dispatch({type: 'login'});