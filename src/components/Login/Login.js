import React, { useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
//
import { useEffect, useReducer, useContext } from 'react';
import AuthContext from '../../store/auth-context';
import Input from './Input';

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val.includes('@')
    };
  } else if (action.type === "USER_BLUR") {
    return {
      value: state.value,
      isValid: state.value.includes('@')
    };
  };
  return {
    value: '',
    isValid: false
  }
}

const passReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val.trim().length > 6
    };
  } else if (action.type === "USER_BLUR") {
    return {
      value: state.value,
      isValid: state.value.trim().length > 6
    };
  };
  return {
    value: '',
    isValid: false
  }
}

const Login = () => {
  const ctx = useContext(AuthContext);
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: null });
  const [passState, dispatchPass] = useReducer(passReducer, { value: '', isValid: null })

  //example of object destructuring:
  const { isValid: emailIsValid } = emailState; // now emailIsValid will contain the value of emailState.isValid
  const { isValid: passwordIsValid } = passState; // now passwordIsValid will contain the value of passState.isValid
  var { value: passwordValue } = passState; // now passwordIsValid will contain the value of passState.isValid

  // check if format is correct
  useEffect(() => {
    setFormIsValid(
      emailIsValid && passwordIsValid // used the destructured values
    );
  }, [emailState.value, passState.value])
  // simulate http requests
  useEffect(() => {
    const sendHttpReq = setTimeout(() => {
      console.log("Verifying if user exists in db...");

    }, 500)

    // cleanup function 
    return () => {
      console.log("CLEANUP");
      clearTimeout(sendHttpReq);
    }
  }, [emailState.value])
  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);

    dispatchEmail({ type: "USER_INPUT", val: event.target.value })
    setFormIsValid(
      event.target.value.includes('@') && passState.value.trim().length > 6
    )

  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);

    dispatchPass({ type: "USER_INPUT", val: event.target.value });
    setFormIsValid(
      emailState.value.includes('@') && event.target.value.trim().length > 6
    )

  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.value.includes('@'));
    dispatchEmail({ type: "USER_BLUR" });
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPass({ type: "USER_BLUR" });

    console.log(passwordValue);
    passwordValue = "ceapa";
    console.log(passwordValue);

  };

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.onLogin(emailState.value, passState.value);
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
          onBlur={validateEmailHandler} />
        <Input isValid={passState.isValid}
          For="password"
          name="Password"
          type="password"
          id="password"
          value={passState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler} />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
