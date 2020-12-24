import AuthStore from './authStore';
import apiClient from './client';
import jwtDecode from 'jwt-decode';

// const ENDPOINT = 'auth/'

export const login = (credentials) =>
    apiClient.post('/users/auth', credentials).then(async (response) => {
        if (response.ok) {
            await AuthStore.setClientId(response.data);
        }
        return response;
    });
