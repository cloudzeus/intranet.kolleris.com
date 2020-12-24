const { create } = require('apisauce');

const apiClient = create({
    baseURL: 'http://kolleris2.oncloud.gr/s1services',
    headers: {
        'Content-Type': 'application/json;charset=iso-8859-7',
        'Content-Encoding': 'gzip',
    },
});

exports.erpAuth = () => {
    const credentials = {
        service: 'login',
        username: 'jsonuser',
        password: '1f1femsk',
        appId: '1001',
        COMPANY: '1001',
        BRANCH: '1000',
        MODULE: '0',
        REFID: '15',
    };

    return apiClient.post('/', credentials).then((response) => {
        if (!response.ok) {
            console.log('Error', response.originalError);
            return null;
        }
        return (response.data = response.data.data);
    });
};

exports.getProducts = (credentials) => {
    return apiClient
        .post('/JS/ecomm.basics/getPRODUCTS', credentials)
        .then((response) => {
            if (!response.ok) {
                console.log('Error', response.problem);
                return null;
            }
            return (response.data = response.data.data);
        });
};
