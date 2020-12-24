/**
 * Unknown errors handler
 */

//Dependencies
const winston = require('winston')

module.exports = function (app) {

  app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    err.message = "resource not found"
     console.log("404:Error", err)
    next(err);
  });

  if (process.env.NODE_ENV === 'development'|| process.env.NODE_ENV === 'test') {
    app.use(function (err, req, res, next) {
      // console.log("404:Error", error)
      res.status(err.status || 500).send({
        message: err.message,
        error: err
      });
    });
  } else {
    app.use(function (err, req, res, next) {
      winston.error(err.message, err)

      console.log("Error:",err)
      res.status(err.status || 500).send({
        message: err.message,
      });
    });
  }

}
