/**
 * AUtheintication route
 */

//Depndencies
const express = require('express');
const Joi = require('joi');
const { User } = require('../models/users');
const { erpAuth } = require('../services/erp');
const router = express.Router();

router.post('/', async function (req, res, next) {
    // console.log('Request data', req.body);
    if (!req.body) res.status(400).send('Email and password required');
    const { error } = validator(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    let user = await User.findOne({ email: req.body.email }).select(
        '+password'
    );
    if (!user || !user.password)
        return res.status(400).send('Invalid email or password');
    // console.log('User PAssword', req.body.password);
    const isValidPassword = req.body.password.toString() === user.password;

    if (!isValidPassword)
        return res.status(400).send('Invalid email or password');
    // if (!user.isVerified)
    //     return res.status(400).send('Your account has not been verified.');

    const authToken = await erpAuth();

    if (!authToken) return res.status(500).send('Failed to authentiate erp');

    return res.send(authToken);
});

const validator = function (data) {
    return Joi.object({
        email: Joi.string().email().min(3).max(255).required(),
        password: Joi.string().min(3).max(1024).required(),
    }).validate(data);
};

module.exports = router;
