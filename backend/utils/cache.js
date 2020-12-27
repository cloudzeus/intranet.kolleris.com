const NodeCache = require('node-cache');

const cache = new NodeCache({ stdTTL: 60 * 60 * 24 });

const paginate = (value, size = 30, page = 1, query = '') => {
    size = parseInt(size);
    page = parseInt(page);
    const startIndex = (page - 1) * size;
    const endIndex = startIndex + size;
    let data = value.slice(startIndex, endIndex);
    data = data.map((product) => ({ ...product, id: product.MTRL }));
    data = data.filter(
        (data) =>
            new RegExp(query, 'gi').test(data.PRODUCTNAME_NAME) ||
            new RegExp(query, 'gi').test(data.MTRL) ||
            new RegExp(query, 'gi').test(data.ERPCODE_CODE) ||
            new RegExp(query, 'gi').test(data.EANCODE) ||
            new RegExp(query, 'gi').test(data.MANUFACTURECODE) ||
            new RegExp(query, 'gi').test(data.VAT) ||
            new RegExp(query, 'gi').test(data.VATNAME) ||
            new RegExp(query, 'gi').test(data.MTRUNIT1) ||
            new RegExp(query, 'gi').test(data.MTRUNIT3) ||
            new RegExp(query, 'gi').test(data.MTRCATEGORY) ||
            new RegExp(query, 'gi').test(data.COMMERCIAL_CATEGORY_NAME) ||
            new RegExp(query, 'gi').test(data.MTRGROUP) ||
            new RegExp(query, 'gi').test(data.MTRCATEGORY_1) ||
            new RegExp(query, 'gi').test(data.PRICER) ||
            new RegExp(query, 'gi').test(data.PRICEW)
    );
    console.log(startIndex, endIndex);
    return { data, size, page, total: value.length };
};

exports.setValue = async (key, value, size, page, query) => {
    await cache.set(key, value);
    return paginate(value, size, page, query);
};

exports.getValue = async (key, size, page, query) => {
    try {
        const data = await cache.get(key);
        if (!data) return null;
        return paginate(data, size, page, query);
    } catch (error) {
        console.log('error', error);
        return null;
    }
};
