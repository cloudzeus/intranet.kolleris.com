import { create } from 'apisauce';
import AuthStore from './authStore';

const apiClient = create({
    baseURL:
        process.env.NODE_ENV === 'production' ? '' : 'http://localhost:5000',
});

apiClient.addAsyncRequestTransform(async (request) => {
    let authToken = await AuthStore.getToken();
    // console.log(request);
    if (!authToken) return;
    request.headers['Authorization'] = 'Bearer ' + authToken;
});

export default apiClient;
