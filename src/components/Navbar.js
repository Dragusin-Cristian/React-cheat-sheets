import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
    return(
        <nav>
            <ul className={classes.navbar}>
                <li><NavLink activeClassName={classes.active} className={classes.link}  to="/welcome">Welcome</NavLink></li>
                <li><NavLink activeClassName={classes.active} className={classes.link} to="/quotes">Quotes</NavLink></li>
                <li><NavLink activeClassName={classes.active} className={classes.link} to="/newQuote">New Quote</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;


