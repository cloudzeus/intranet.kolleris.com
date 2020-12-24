import AuthStore from './authStore';
import apiClient from './client';

export const getProducts = async (page, size, query) => {
    const clientData = await AuthStore.getClientId();
    return apiClient.post(
        `/products?size=${size}&page=${page}&q=${query}`,
        clientData
    );
};
