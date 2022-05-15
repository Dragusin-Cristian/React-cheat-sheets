import React from 'react';

import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';
//
import ReactDOM from "react-dom"; // for using portals and DOM manipulation

const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onConfirm} />
  );
}

const Modal = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
}

// PORTALS:
const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {/* renders the <Backddrop/> component inside the "backdrop-root" dom element */}
      {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root"))} 
        {/* renders the <Modal/> component inside the "overlay-root" dom element */}
      {ReactDOM.createPortal(<Modal title={props.title} message={props.message} onConfirm={props.onConfirm} />,
        document.getElementById("overlay-root"))}
    </React.Fragment>
  );
};

export default ErrorModal;
