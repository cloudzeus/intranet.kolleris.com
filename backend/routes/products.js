const express = require('express');
const { getProducts } = require('../services/erp');
const cache = require('../utils/cache');

const CACHE_KEY = 'products-cache';

const router = express.Router();

router.post('/', async (req, res) => {
    const { size, page, q } = req.query;
    let products = await cache.getValue(CACHE_KEY, size, page, q);
    if (products) return res.send(products);
    if (!products) products = await getProducts(req.body);
    if (!products)
        return res.status(500).send('Failed to get products from ERP');
    products = await cache.setValue(CACHE_KEY, products, size, page, q);

    res.setHeader('X-Total-Count', products.total);
    return res.send(products);
});

module.exports = router;
