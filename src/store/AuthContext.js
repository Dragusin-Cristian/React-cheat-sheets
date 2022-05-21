import React, { useState } from "react";

// create the context itself
const AuthContext = React.createContext({
    isLoggedIn: false,
    name: '',
    pass: '',
    login: (name, pass) => { },
    logout: () => { }
});

// create the context provider to be consumed by a context consumer  
export const AuthContextProvider = (props) => {

    const [name, setName] = useState(null);
    const [pass, setPass] = useState(null);
    const [isLoggedIn, setisLogegdIn] = useState(false);

    const login = (name, pass) => {
        setName(name);
        setPass(pass);
        setisLogegdIn(true);
    }

    const logout = () => {
        setName(null);
        setPass(null);
        setisLogegdIn(false);
    }

    return <AuthContext.Provider value={{
        isLoggedIn: isLoggedIn,
        name: name,
        pass: pass,
        login: login,
        logout: logout
    }}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;