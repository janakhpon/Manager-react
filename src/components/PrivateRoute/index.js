import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function PrivateRoute({ children, ...rest }) {
    let boo = Boolean(false)
    return (
        <Route
            {...rest}
            render={({ location }) =>
               boo ? (
                    children
                ) : (
                        <Redirect
                            to="/Page-signin"
                        />
                    )
            }
        />
    );
}


export default PrivateRoute;