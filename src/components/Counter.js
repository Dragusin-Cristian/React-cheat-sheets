import classes from './Counter.module.css';
//
import { useSelector, useDispatch } from 'react-redux'; // __ do the imports
import { counterActions } from '../store/counter_slice.js'; // __ import actions

const Counter = () => {
  const counter = useSelector(state => state.counter.counter); // __  get the states
  const showCounter = useSelector(state => state.counter.showCounter); // useSelector gets the state
  const dispatch = useDispatch(); // useDispatch gets the action // __ useDispatch


  const incrementHandler = () => {
    // dispatch({type: INCREMENT});
    dispatch(counterActions.increment()); // __ use the actions
  }
  const decrementHandler = () => {
    // dispatch({type: DECREMENT});
    dispatch(counterActions.decrement());
  }

  const increaseHandler = (amount) => {
    // dispatch({type: INCREASE, amount: amount});
    dispatch(counterActions.increase({ amount: amount })); // { type: SOME_UNQUE_IDENTIFIER, payload: amount | or | payload: {amount: amount} }
  }
  const toggleCounterHandler = () => {
    // dispatch({ type: TOGGLE });
    dispatch(counterActions.toggle());
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
  );
};

export default Counter;


// import classes from './Counter.module.css';
// import React from "react";
// import {connect} from "react-redux";
// import {INCREMENT, DECREMENT} from "../store";

// class Counter extends React.Component {

//   incrementHandler(){
//     this.props.increment();
//   };

//   decrementHandler(){
//     this.props.decrement();
//   };

//   toggleCounterHandler(){};

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.value}</div>
//         <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//         <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return{
//     value: state.value
//   }
// }

// const mapDispacthToProps = dispatch => {
//   return{
//     increment: () => dispatch({type: INCREMENT}),
//     decrement: () => dispatch({type: DECREMENT})
//   }
// }

// export default connect(mapStateToProps, mapDispacthToProps)(Counter);
