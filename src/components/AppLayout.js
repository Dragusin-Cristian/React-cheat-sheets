import classes from "./AppLayout.module.css";

const AppLayout = (props) => {
    return(
        <div className={classes.appContainer}>
            {props.children}
        </div>
    );
}

export default AppLayout;