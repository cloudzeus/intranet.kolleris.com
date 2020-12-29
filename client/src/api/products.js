import AuthStore from './authStore';
import apiClient from './client';

export const getProducts = async (page = 1, size = 30, query = '', id) => {
    const clientData = await AuthStore.getClientId();
    if (id) clientData.key = id;
    return apiClient.post(
        `/products?size=${size}&page=${page}&q=${query}`,
        clientData
    );
};
export const updateProduct = async (payload) => {
    const clientData = await AuthStore.getClientId();
    clientData.data = { ITEM: [payload] };
    clientData.key = payload.MTRL;
    return apiClient.post(`/products/update`, clientData);
};
