import classes from './Counter.module.css';
//
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter_slice.js';

const Counter_method_1 = () => {

    // useSelector gets the state from the store
    const counter = useSelector(state => state.counter.counter);
    const showCounter = useSelector(state => state.counter.showCounter);
    // use Dispatch gets the action from the store
    const dispatch = useDispatch();

    const incrementHandler = () => {
       dispatch(counterActions.increment()) 

    }
    const decrementHandler = () => {
        dispatch(counterActions.decrement())

    }

    const increaseHandler = (amount) => {
        dispatch(counterActions.increase(amount)) // or increase({amount: amount})

    }
    const toggleCounterHandler = () => {
        dispatch(counterActions.toggle())

    };
    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {showCounter && <div className={classes.value}>{counter}</div>}
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
            <button onClick={() => increaseHandler(10)}>increase by 10</button>
            <button onClick={() => increaseHandler(5)}>increase by 5</button>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    )
}

export default Counter_method_1;