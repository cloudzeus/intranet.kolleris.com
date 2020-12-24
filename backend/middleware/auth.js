/**
 * 
 Middleware for checking authorisation
 */

//Dependencies
const config = require('config');
const jwt = require('jsonwebtoken');
const debug = require('debug')('app:requests');

const checkAuth = (req, res, next) => {
  // console.log('token22', req.cookies);
  const token = !!req.cookies.token
    ? req.cookies.token
    : req.header('x-auth-token');
  // console.log('AUTH_TOKEN', token);
  if (!token) return res.status(401).send('User not authorised');

  try {
    let decoded = jwt.verify(token, config.get('jwt_key'));
    // console.log('DECODED', decoded);
    req.user = decoded;
    next();
  } catch (ex) {
    console.log('Auth Eror', ex);
    return res.status(400).send('Invalid token');
  }
};

module.exports = checkAuth;
