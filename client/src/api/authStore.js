import jwtDecode from 'jwt-decode';

export default class AuthStore {
    static STORAGE_KEY = 'userToken';
    static CLIENT_ID = 'clientId';

    static getToken() {
        try {
            return localStorage.getItem(AuthStore.STORAGE_KEY);
        } catch (error) {
            console.log('GetToken error', error);
            return null;
        }
    }
    static async decodeToken() {
        let token = await AuthStore.getToken();
        if (token) {
            try {
                return jwtDecode(token);
            } catch (e) {
                return null;
            }
        }
    }

    static async getClientId() {
        try {
            let clientId = await localStorage.getItem(AuthStore.CLIENT_ID);
            if (!clientId) return null;
            clientId = JSON.parse(clientId);
            return clientId;
        } catch (error) {
            console.log('AuthStore: ', error);
            return null;
        }
    }

    static async setClientId(clientId) {
        const stringClientId = JSON.stringify(clientId);
        return localStorage.setItem(AuthStore.CLIENT_ID, stringClientId);
    }

    static setToken(token) {
        localStorage.setItem(AuthStore.STORAGE_KEY, token);
    }

    static removeToken() {
        localStorage.removeItem(AuthStore.CLIENT_ID);
        localStorage.removeItem(AuthStore.STORAGE_KEY);
    }
    static removeClientId() {
        localStorage.removeItem(AuthStore.CLIENT_ID);
    }
}
