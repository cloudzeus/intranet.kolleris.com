/**
 * Modelling the app user
 */

//Dependencies
const Joi = require('joi');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config');
// const bcrypt = require('bcryptjs');

const schema = new mongoose.Schema({
    email: {
        type: String,
        // required: true,
        unique: true,
    },

    password: {
        type: 'String',
        select: false,
    },
});

schema.methods.generateAuthToken = async function () {
    let token = jwt.sign(
        {
            _id: this._id,
            email: this.email,
        },
        config.get('jwt_key')
    );
    return token;
};
// schema.methods.hashPassword = async function (password) {
//     let salt = await bcrypt.genSalt(10);
//     password = await bcrypt.hash(password.toString(), salt);
//     return password;
// };

exports.User = mongoose.model('User', schema);
