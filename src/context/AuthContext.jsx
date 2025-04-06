import React, {createContext, useState} from "react";
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext(null);

export function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState(false)
    const navigate = useNavigate()

    // const data = {key: 'value', user: { name: 'John Doe', age: 30 }, isAuthenticated: false }

    function login() {
        toggleIsAuth(true)
        console.log('Gebruiker is ingelogd!');
        navigate('/profile');
    }

    function logout() {
        toggleIsAuth(false)
        console.log("Gebruiker is uitgelogd");
        navigate('/');
    }

    const contextData = {
        isAuth,
        login,
        logout,
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}
