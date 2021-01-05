import { AuthProvider } from 'react-admin';
import { login } from './api/auth';
import AuthStore from './api/authStore';

export const authProvider = {
    // authentication
    login: ({ username, password }) => {
        console.log('credd', username, password);
        return login({ email: username, password });
    },
    checkError: (error) => {
        console.log('Auth error', error);
    },
    checkAuth: async () => {
        return (await AuthStore.getClientId())
            ? Promise.resolve()
            : Promise.reject({ status: 401 });
    },
    logout: async () => {
        await AuthStore.removeClientId();
        return Promise.resolve('/login');
    },
    getIdentity: () => {
        return AuthStore.getClientId();
    },
    // authorization
    getPermissions: (params) => Promise.resolve(),
};
