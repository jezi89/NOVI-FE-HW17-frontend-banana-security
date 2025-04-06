import React, {useContext} from 'react';
import {Navigate} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";

function PrivateRoute({children}) {
    const {isAuth} = useContext(AuthContext);

    return isAuth ? children : <Navigate to="/signin"/>
}

export default PrivateRoute;
