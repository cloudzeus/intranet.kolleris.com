import React, { createContext, useState, useEffect } from 'react';
import AuthStore from '../api/authStore';

export const authContext = createContext({
    user: null,
    loadingUser:true,
    setUser: () => {},
    logOut: () => {},
});

function AuthContext(props) {
    const [user, setUser] = useState(null);
    const [loadingUser, setLoadingUser] = useState(true);

    const setUserFromToken = async () => {
        const user = await AuthStore.getClientId();
        if (user) setUser(user);
        setLoadingUser(false);
    };
    const logOut = () => {
        AuthStore.removeClientId();
        setUser(null);
        window.location.replace('/login');
    };

    useEffect(() => {
        window.onload = () => {
            // console.log();
            //Read localStorage
            setUserFromToken();
        };

        return () => {};
    }, []);
    return (
        <authContext.Provider
            value={{
                user,
                loadingUser,
                setUser,
                logOut,
            }}
        >
            {props.children}
        </authContext.Provider>
    );
}

export default AuthContext;
