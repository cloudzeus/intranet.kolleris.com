/**
 * Database initialization
 */

//Dependencies
const mongoose = require('mongoose')
const config = require('config')

module.exports = function () {
  console.log("Connecting to Database....")

  mongoose
    .connect(config.get('mongo_uri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    .then((err, db) => {
      console.log('connected to mongoDB')
    })
    .catch(e => {
      console.log(e)
      throw new Error(e)
    })
}
