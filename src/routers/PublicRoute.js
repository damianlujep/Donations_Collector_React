import React from 'react';
import {Redirect, Route} from "react-router-dom";
import {useAuth} from "../contexts/AuthContext";

const PublicRoute = ({component: Component, ...rest}) => {
    const { currentUser } = useAuth();

    return (
        <Route
            {...rest}
            render={props => !currentUser ? (
                <Component {...props}/>
            ) : (
                <Redirect to='/oddaj-rzeczy'/>
            )}
        />
    );
};

export default PublicRoute;