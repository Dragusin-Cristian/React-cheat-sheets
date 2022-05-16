import classes from './Login.module.css';
import React, { useImperativeHandle, useRef } from 'react';


// MADE TO EXPORT REF:
// Wrap the component inside React.forwardRef
// Add the ref argument next to props
const Input = React.forwardRef((props, ref) => {
  // ref to DOM input 
  const inputRef = useRef();

  // function to export | to call from outside  
  const activate = () => {
    inputRef.current.focus();
  }

  // exports the function to the parent component
  useImperativeHandle(ref, () => {
    return {
      // focus = name of the activate function to be called outside this component
      // activate = name of the function defined here
      focus: activate
    }
  });

    return(
        <div
          className={`${classes.control} ${props.isValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor={props.For}>{props.name}</label>
          <input
            type={props.type}
            id={props.id}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
            ref={inputRef}
          />
        </div>
    );
});

export default Input;