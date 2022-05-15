import React, { useState, useEffect } from "react";

// create the context to export default
const AuthContext = React.createContext({
    // these values are just for autocompletion
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: (email, password) => { }
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const storeUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    // checks if there are credentials in the localStorage
    useEffect(() => {
        if (storeUserLoggedInInformation === "1") {
            // set the auth status to true
            setIsLoggedIn(true);
        }
    }, [storeUserLoggedInInformation]);

    const loginHandler = (email, password) => {
        setIsLoggedIn(true);
        // save user in local storage
        localStorage.setItem("isLoggedIn", "1");
        // save credentials to local storage:
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
    };

    const logoutHandler = () => {
        setIsLoggedIn(false);
        // removes the user from local storage
        localStorage.removeItem("isLoggedIn");
    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler,
                onLogin: loginHandler
            }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;