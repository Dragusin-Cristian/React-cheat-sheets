import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
    // these values are just for autocompletion
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: (email, password) => { }
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const storeUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    useEffect(() => {
        if (storeUserLoggedInInformation === "1") setIsLoggedIn(true);
    }, [storeUserLoggedInInformation]);

    const loginHandler = (email, password) => {
        setIsLoggedIn(true);

        localStorage.setItem("isLoggedIn", "1"); // save user in cookies
        // my bullshit:
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
    };

    const logoutHandler = () => {
        setIsLoggedIn(false);

        localStorage.removeItem("isLoggedIn"); // removes the user from cookies
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;