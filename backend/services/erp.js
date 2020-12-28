const iconv = require('iconv-lite');

const { create } = require('apisauce');

const apiClient = create({
    baseURL: 'http://kolleris2.oncloud.gr/s1services',
    responseType: 'arraybuffer',
    reponseEncoding: 'binary',
    headers: {
        'Content-Type': 'application/json;charset=windows-1253',
        'Content-Encoding': 'null',
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

        return (response.data = response.data);
    });
};

exports.getProducts = (credentials) => {
    return apiClient
        .post('/JS/ecomm.basics/getPRODUCTS', credentials)
        .then((response) => {
            console.log('klfdkjgbdf', response.data);
            if (!response.ok) {
                console.log('Error', response.problem);
                return null;
            }

            let text = iconv.decode(response.data, 'windows-1253');
            let parsedResponseData = JSON.parse(text);
            return (response.data = parsedResponseData.data);
        });
};
