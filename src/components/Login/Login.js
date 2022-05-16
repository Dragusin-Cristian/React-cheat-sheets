import React, { useState, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
//
import { useEffect, useReducer, useContext } from 'react';
import AuthContext from '../../store/auth-context';
import Input from './Input';

// USE OF A REDUCER FUNCTION
const emailReducer = (state, action) => {
  // check for onChange from email Input
  if (action.type === "USER_INPUT") {
    //set the emailState:
    return {
      // values from the dispatchEmail function call
      value: action.val,
      isValid: action.val.includes('@')
    };
    // check for onBlur from email Input (lost focus)
  } else if (action.type === "USER_BLUR") {
    //set the emailState:
    return {
      // values from last state snapshot
      value: state.value,
      isValid: state.value.includes('@')
    };
  };
  //set the emailState (default values for the first render):
  return {
    value: '',
    isValid: false
  }
}

// REDUCER FUNCTION FOR PASSWORD:
const passReducer = (state, action) => {
  // check for onChange from password Input
  if (action.type === "USER_INPUT") {
    // set the passState value
    return {
      // values from the dispatchPass function call
      value: action.val,
      isValid: action.val.trim().length > 6
    };
    // check for onBlur from password Input (lost focus):
  } else if (action.type === "USER_BLUR") {
    // set the passState value
    return {
      // values for the last state snapshot 
      value: state.value,
      isValid: state.value.trim().length > 6
    };
  };
  //set the passState (default values for the first render):
  return {
    value: '',
    isValid: false
  }
}

const Login = () => {
  const ctx = useContext(AuthContext);
  // USESTATE METHOD:
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  // GO TO <Input> COMPONENT, THERE IS CUSTOMISED TO EXPORT REF 
  const emailRef = useRef();
  const passRef = useRef();

  // USEREDUCER METHOD:
  const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: null });
  const [passState, dispatchPass] = useReducer(passReducer, { value: '', isValid: null })

  //example of object destructuring:
  const { isValid: emailIsValid } = emailState; // now emailIsValid will contain the value of emailState.isValid
  const { isValid: passwordIsValid } = passState; // now passwordIsValid will contain the value of passState.isValid 

  // check if format is correct
  useEffect(() => {
    setFormIsValid(
      // used the destructured values
      // use this approach instead of watching 
      // emailState.isValid and passState.isValid because 
      // you want to watch only some nested  properties (isValid), NOT THE ALL STATE VALUES
      emailIsValid && passwordIsValid
    );
    //add in the dependencies array only the things that can change 
    // when the component or parent re-renders
  }, [emailIsValid, passwordIsValid])

  // useEffect for each change of the emailState.value (changes on onChange from email Input )
  useEffect(() => {
    // simulate http request function for checking if user exists in db
    const sendHttpReq = setTimeout(() => {
      // http simulation function:
      console.log("Verifying if user exists in db...");
    }, 500)

    // CLEANUP FUNCTION USECASE: (debouncing)
    // (this function executes before the sendHttpReq timer finishes)
    // therefore, the http simulation function executes only after 500 ms,
    // if the timer is not cleared
    return () => {
      console.log("CLEANUP");
      clearTimeout(sendHttpReq);
    }
  }, [emailState.value]);

  // onChange from email Input (on key stroke):
  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({ type: "USER_INPUT", val: event.target.value })
    setFormIsValid(
      event.target.value.includes('@') && passState.value.trim().length > 6
    )

  };

  // onChange from password Input:
  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);

    dispatchPass({ type: "USER_INPUT", val: event.target.value });
    setFormIsValid(
      emailState.value.includes('@') && event.target.value.trim().length > 6
    )

  };

  // onBlur from email Input (lost focus)
  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.value.includes('@')); // useState version
    // calls the dispatchEmail, which calls the emailReducer function
    dispatchEmail({ type: "USER_BLUR" });
  };

  // onBlur from password Input (lost focus)
  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPass({ type: "USER_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid){
      ctx.onLogin(emailState.value, passState.value);
    }else if(!emailIsValid){
      // call the function from Input  
     emailRef.current.focus();
    }else{
      passRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input isValid={emailState.isValid}
          For="email"
          name="E-Mail"
          type="email"
          id="email"
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler} 
          ref={emailRef}/>
        <Input isValid={passState.isValid}
          For="password"
          name="Password"
          type="password"
          id="password"
          value={passState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler} 
          ref={passRef}/>
        <div className={classes.actions}>
          <Button type="submit"
            className={classes.btn}
            // disabled={!formIsValid}
            >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
