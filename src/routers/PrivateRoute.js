import React from 'react';
import {Redirect, Route} from "react-router-dom";

const PrivateRoute = ({component: Component, isAuthenticated, ...rest}) => {
    return (
        <Route
            {...rest}
            component={(props) =>
                isAuthenticated ? (
                    <Component {...props}/>
                ) : (
                    <Redirect
                        to='/logowanie'
                    />
                )
            }
        />
    );
};

export default PrivateRoute;