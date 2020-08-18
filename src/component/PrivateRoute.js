import React from 'react';
import {Route, Redirect} from 'react-router-dom'
// Requirement 1.
// It has the same API as `<Route />`

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            localStorage.getItem("token") ? (
                <Component {...props} />
            ) : (
                    <Redirect to="/login" />
                )
        }
    />
)