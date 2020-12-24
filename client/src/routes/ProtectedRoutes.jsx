import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authContext } from '../contexts/AuthContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { user, loadingUser } = useContext(authContext);
    if (loadingUser) return null;
    if (user === null) return <Redirect to="/login" />;
    return (
        <Route
            {...rest}
            render={(props) => {
                if (user) {
                    return <Component {...rest} {...props} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: {
                                    from: props.location,
                                },
                            }}
                        />
                    );
                }
            }}
        />
    );
};

export default ProtectedRoute;
