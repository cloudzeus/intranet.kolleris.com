const NodeCache = require('node-cache');

const cache = new NodeCache({ stdTTL: 60 * 60 });

const paginate = (value, size = 30, page = 1, query = '') => {
    size = parseInt(size);
    page = parseInt(page);
    const startIndex = (page - 1) * size;
    const endIndex = startIndex + size;
    let data = value.filter((data) =>
        query
            .split(' ')
            .every(
                (q) =>
                    new RegExp(q, 'gi').test(data.PRODUCTNAME_NAME) ||
                    new RegExp(q, 'gi').test(data.MTRL) ||
                    new RegExp(q, 'gi').test(data.ERPCODE_CODE) ||
                    new RegExp(q, 'gi').test(data.EANCODE) ||
                    new RegExp(q, 'gi').test(data.MANUFACTURECODE) ||
                    new RegExp(q, 'gi').test(data.VAT) ||
                    new RegExp(q, 'gi').test(data.VATNAME) ||
                    new RegExp(q, 'gi').test(data.MTRUNIT1) ||
                    new RegExp(q, 'gi').test(data.MTRUNIT3) ||
                    new RegExp(q, 'gi').test(data.MTRCATEGORY) ||
                    new RegExp(q, 'gi').test(data.COMMERCIAL_CATEGORY_NAME) ||
                    new RegExp(q, 'gi').test(data.MTRGROUP) ||
                    new RegExp(q, 'gi').test(data.MTRCATEGORY_1) ||
                    new RegExp(q, 'gi').test(data.PRICER) ||
                    new RegExp(q, 'gi').test(data.PRICEW)
            )
    );
    data = data.slice(startIndex, endIndex);
    data = data.map((product) => ({ ...product, id: product.MTRL }));
    return { data, size, page, total: value.length };
};

exports.setValue = async (key, value, size, page, query) => {
    let dataString = JSON.stringify(value);
    await cache.set(key, dataString);
    return paginate(value, size, page, query);
};

exports.getValue = async (key, size, page, query) => {
    try {
        let data = await cache.get(key);
        if (!data) return null;
        data = JSON.parse(data);
        return paginate(data, size, page, query);
    } catch (error) {
        console.log('error', error);
        return null;
    }
};
