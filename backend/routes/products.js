const express = require('express');
const { getProducts, checkout, printInvoice } = require('../services/erp');
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
router.post('/update', async (req, res) => {
    const products = await getProducts(req.body);
    if (!products) return res.status(500).send('Failed to update');
    // products = await cache.setValue(CACHE_KEY, products, size, page, q);

    // res.setHeader('X-Total-Count', products.total);
    return res.send(products);
});

router.post('/checkout', async (req, res) => {
    const response = await checkout(req.body);
    if (response && response.success) {
        let payload = req.body;
        payload.KEY = response.id;
        payload.SERVICE = 'getData';
        payload.locateinfo = 'FINDOC:FINCODE';
        let printResponse = await printInvoice(payload);

        if (printResponse && printResponse.success) {
            return res.send(printResponse);
        }
    }
    return res.sendStatus(500);
});

module.exports = router;
