import AuthStore from './authStore';
import apiClient from './client';

export const getProducts = async (page = 1, size = 30, query = '') => {
    const clientData = await AuthStore.getClientId();
    return apiClient.post(
        `/products?size=${size}&page=${page}&q=${query}`,
        clientData
    );
};
